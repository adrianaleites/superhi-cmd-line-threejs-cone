import { ConeGeometry, MeshBasicMaterial, Mesh } from 'three';

export default function (color) {
    var geometry = new ConeGeometry( 10, 20, 40 );
    var material = new MeshBasicMaterial( {color: color} );
    var cone = new Mesh( geometry, material );
    return cone;
}
