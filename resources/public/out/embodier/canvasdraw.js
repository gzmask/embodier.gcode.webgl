// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.canvasdraw');
goog.require('cljs.core');
embodier.canvasdraw.THREE = THREE;
embodier.canvasdraw.example = (function example(){var scene = (new embodier.canvasdraw.THREE.Scene());var width = 640;var height = 480;var camera = (new embodier.canvasdraw.THREE.PerspectiveCamera(75,(width / height),0.1,1000));var renderer = (new embodier.canvasdraw.THREE.CanvasRenderer());var geometry = (new embodier.canvasdraw.THREE.CubeGeometry(1,1,1));var material = (new embodier.canvasdraw.THREE.MeshBasicMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),65280], null))));var cube = (new embodier.canvasdraw.THREE.Mesh(geometry,material));var render = ((function (scene,width,height,camera,renderer,geometry,material,cube){
return (function cb(){requestAnimationFrame(cb);
cube.rotation.x = (0.1 + cube.rotation.x);
cube.rotation.y = (0.1 + cube.rotation.y);
return renderer.render(scene,camera);
});})(scene,width,height,camera,renderer,geometry,material,cube))
;renderer.setSize(width,height);
document.getElementById("layer-view-before").appendChild(renderer.domElement);
scene.add(cube);
camera.position.z = 5;
return render.call(null);
});
embodier.canvasdraw.draw_line = (function draw_line(points){var geo = (new embodier.canvasdraw.THREE.Geometry());var mat = (new embodier.canvasdraw.THREE.LineBasicMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),65280], null))));var line = (new embodier.canvasdraw.THREE.Line(geo,mat));var points_ = cljs.core.filter.call(null,((function (geo,mat,line){
return (function (p){if(((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p) == null)) || ((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p) == null)) || ((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p) == null)))
{return false;
} else
{return true;
}
});})(geo,mat,line))
,points);var p_list = (function (){var iter__4160__auto__ = ((function (geo,mat,line,points_){
return (function iter__5229(s__5230){return (new cljs.core.LazySeq(null,((function (geo,mat,line,points_){
return (function (){var s__5230__$1 = s__5230;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5230__$1);if(temp__4092__auto__)
{var s__5230__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5230__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5230__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5232 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5231 = 0;while(true){
if((i__5231 < size__4159__auto__))
{var p = cljs.core._nth.call(null,c__4158__auto__,i__5231);cljs.core.chunk_append.call(null,b__5232,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))));
{
var G__5233 = (i__5231 + 1);
i__5231 = G__5233;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5232),iter__5229.call(null,cljs.core.chunk_rest.call(null,s__5230__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5232),null);
}
} else
{var p = cljs.core.first.call(null,s__5230__$2);return cljs.core.cons.call(null,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))),iter__5229.call(null,cljs.core.rest.call(null,s__5230__$2)));
}
} else
{return null;
}
break;
}
});})(geo,mat,line,points_))
,null,null));
});})(geo,mat,line,points_))
;return iter__4160__auto__.call(null,points_);
})();geo.vertices = cljs.core.apply.call(null,cljs.core.array,p_list);
return line;
});
embodier.canvasdraw.show_layer = (function show_layer(layers,dom_id,current_layer){var scene = (new embodier.canvasdraw.THREE.Scene());var width = 640;var height = 480;var camera = (new embodier.canvasdraw.THREE.PerspectiveCamera(75,(width / height),0.1,1000));var renderer = (new embodier.canvasdraw.THREE.CanvasRenderer());var render = ((function (scene,width,height,camera,renderer){
return (function cb(){return renderer.render(scene,camera);
});})(scene,width,height,camera,renderer))
;renderer.setSize(width,height);
document.getElementById(dom_id).replaceChild(renderer.domElement,document.getElementById(dom_id).firstChild);
scene.add(embodier.canvasdraw.draw_line.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,layers),current_layer)));
camera.position.y = -25;
camera.position.z = 25;
camera.lookAt((new embodier.canvasdraw.THREE.Vector3(0,0,10)));
return render.call(null);
});

//# sourceMappingURL=canvasdraw.js.map