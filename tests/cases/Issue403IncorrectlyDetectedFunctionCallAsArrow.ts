p.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = p.trim(t + "");
        return i && !p.trim(i.replace(Nn, function(e, t, i, s) {
            return n && t && (r = 0), r === 0 ? e : (n = i || t, r += !s - !i, "")
        })) ? Function("return " + i)() : p.error("Invalid JSON: " + t)
    }