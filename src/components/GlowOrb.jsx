import { useEffect, useRef, useState } from "react";

const VERTEX = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

// Soft, morphing, iridescent orb in the spirit of Siri / Apple Intelligence light.
const FRAGMENT = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uScroll;

// 3D simplex noise by Ashima Arts / Stefan Gustavson (MIT).
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0)) +
    i.y + vec4(0.0, i1.y, i2.y, 1.0)) +
    i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

vec3 palette(float h) {
  h = fract(h) * 4.0;
  vec3 blue = vec3(0.04, 0.52, 1.0);
  vec3 violet = vec3(0.72, 0.36, 0.98);
  vec3 pink = vec3(1.0, 0.27, 0.45);
  vec3 amber = vec3(1.0, 0.66, 0.2);
  float f = fract(h);
  f = f * f * (3.0 - 2.0 * f);
  if (h < 1.0) return mix(blue, violet, f);
  if (h < 2.0) return mix(violet, pink, f);
  if (h < 3.0) return mix(pink, amber, f);
  return mix(amber, blue, f);
}

void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float fit = min(1.0, uRes.x / uRes.y * 1.5);
  float t = uTime * 0.22;

  vec2 center = vec2(0.0, 0.02) + uMouse * vec2(0.05, 0.035);
  vec2 q = (p - center) / (fit * (1.0 + uScroll * 0.7));
  float d = length(q);
  float ang = atan(q.y, q.x);
  vec2 dir = vec2(cos(ang), sin(ang));

  // Liquid edge: two octaves of noise sampled around the circle.
  float wobble = snoise(vec3(dir * 0.9, t)) * 0.55 + snoise(vec3(dir * 2.1 + 4.0, t * 1.7)) * 0.25;
  float r = 0.24 + wobble * 0.045;

  float body = smoothstep(r + 0.14, r - 0.12, d);
  float halo = exp(-max(d - r, 0.0) * 8.5) * 0.5;

  float hue = ang / 6.28318 + t * 0.35 + snoise(vec3(q * 2.2, t * 1.3)) * 0.18;
  vec3 col = palette(hue);

  // Bright, saturated rim fading to a pale, luminous core.
  float rim = smoothstep(0.0, r, d);
  vec3 inner = mix(vec3(1.0), col, 0.25 + 0.6 * rim * rim);
  vec3 color = mix(col, inner, body);

  // Dissolve while scrolling away, and never meet the hero's bottom edge hard.
  float fade = 1.0 - smoothstep(0.0, 0.6, uScroll);
  float floorFade = smoothstep(0.0, 0.22, gl_FragCoord.y / uRes.y);
  float alpha = max(body * 0.85, halo) * fade * floorFade;

  // Dither to hide 8-bit banding in the long, faint falloff.
  float grain = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5;
  alpha = clamp(alpha + grain / 255.0, 0.0, 1.0);
  gl_FragColor = vec4(color * alpha, alpha);
}
`;

function compile(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader));
  }
  return shader;
}

export default function GlowOrb({ progress, active, still, onReady }) {
  const canvasRef = useRef(null);
  const activeRef = useRef(active);
  const readyRef = useRef(onReady);
  const [failed, setFailed] = useState(false);
  activeRef.current = active;
  readyRef.current = onReady;

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: true, antialias: false });
    if (!gl) {
      setFailed(true);
      readyRef.current?.();
      return;
    }

    let program;
    try {
      program = gl.createProgram();
      gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX));
      gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAGMENT));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
    } catch (err) {
      console.error(err);
      setFailed(true);
      readyRef.current?.();
      return;
    }
    gl.useProgram(program);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "uRes");
    const uTime = gl.getUniformLocation(program, "uTime");
    const uMouse = gl.getUniformLocation(program, "uMouse");
    const uScroll = gl.getUniformLocation(program, "uScroll");

    // The orb is soft by nature, so rendering below native resolution is invisible and cheap.
    const resize = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 2) * 0.6;
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * scale));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const target = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };
    const onMove = (e) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let frame;
    let first = true;
    const start = performance.now();
    const render = (now) => {
      frame = requestAnimationFrame(render);
      if (!activeRef.current) return;
      mouse.x += (target.x - mouse.x) * 0.04;
      mouse.y += (target.y - mouse.y) * 0.04;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, still ? 6 : 6 + (now - start) / 1000);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uScroll, progress?.get() ?? 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (first) {
        first = false;
        readyRef.current?.();
      }
    };
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [progress, still]);

  if (failed) return <div className="orb-fallback" />;
  return <canvas ref={canvasRef} className="orb-canvas" />;
}
