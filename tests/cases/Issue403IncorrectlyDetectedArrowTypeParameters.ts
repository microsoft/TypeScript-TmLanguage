e.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var t = e(this).data("ui-resizable"),
                    n = t.options,
                    r = t.size,
                    i = t.originalSize,
                    s = t.originalPosition,
                    o = t.axis,
                    u = typeof n.grid == "number" ? [n.grid, n.grid] : n.grid,
                    a = u[0] || 1,
                    f = u[1] || 1,
                    l = Math.round((r.width - i.width) / a) * a,
                    c = Math.round((r.height - i.height) / f) * f,
                    h = i.width + l,
                    p = i.height + c,
                    d = n.maxWidth && n.maxWidth < h,
                    v = n.maxHeight && n.maxHeight < p,
                    m = n.minWidth && n.minWidth > h,
                    g = n.minHeight && n.minHeight > p;
                n.grid = u, m && (h += a), g && (p += f), d && (h -= a), v && (p -= f), /^(se|s|e)$/.test(o) ? (t.size.width = h, t.size.height = p) : /^(ne)$/.test(o) ? (t.size.width = h, t.size.height = p, t.position.top = s.top - c) : /^(sw)$/.test(o) ? (t.size.width = h, t.size.height = p, t.position.left = s.left - l) : (p - f > 0 ? (t.size.height = p, t.position.top = s.top - c) : (t.size.height = f, t.position.top = s.top + i.height - f), h - a > 0 ? (t.size.width = h, t.position.left = s.left - l) : (t.size.width = a, t.position.left = s.left + i.width - a))
            }
        })