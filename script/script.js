document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var parallaxElems = document.querySelectorAll('.parallax');
    var parallaxInstances = M.Parallax.init(parallaxElems);
});