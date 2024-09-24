function(q) {
  if (znb(q)) {
    var r = Object.assign({}, {
      form: {
        element: q.target,
        event: q
      }
    }, k);
    q.preventDefault();
    vB(m, r)
  }
}
