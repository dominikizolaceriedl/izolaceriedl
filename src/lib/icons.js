export function iconPath(name) {
  const icons = {
    cube: '<path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z"/><path d="m3 7 9 5 9-5"/><path d="M12 12v10"/>',
    waves: '<path d="M8 4c2 2 2 4 0 6s-2 4 0 6"/><path d="M12 4c2 2 2 4 0 6s-2 4 0 6"/><path d="M16 4c2 2 2 4 0 6s-2 4 0 6"/>',
    tape: '<circle cx="9" cy="12" r="5"/><circle cx="9" cy="12" r="2"/><path d="M14 12h7v5h-5"/>',
    thermo: '<path d="M14 14.76V5a4 4 0 0 0-8 0v9.76a6 6 0 1 0 8 0Z"/><path d="M10 6v8"/>',
    sound: '<path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M16 9a5 5 0 0 1 0 6"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/>',
    pulse: '<path d="M3 12h4l2-6 4 12 2-6h6"/>',
    weight: '<path d="M7 8h10l2 13H5L7 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
    ruler: '<path d="m16 2 6 6L8 22l-6-6L16 2Z"/><path d="m7 17 2 2"/><path d="m10 14 2 2"/><path d="m13 11 2 2"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.26-1.26a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
    tool: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L2 19l3 3 7.3-7.3a4 4 0 0 0 5.4-5.4l-3 3-3-3 3-3Z"/>',
    truck: '<path d="M10 17h4V5H2v12h3"/><path d="M14 8h4l4 4v5h-3"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>'
  };
  return icons[name] || icons.check;
}
