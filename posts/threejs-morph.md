---
title: 'Threejs モーフィング01（morphAttributes）'
date: 'May 4, 2022'
excerpt: 'Threejs モーフィング01（morphAttributes）'
category: 'JavaScript'
tags: ['threejs']
---

<!-- Markdown generator - https://jaspervdj.be/lorem-markdownum/ -->

## morphAttributes
ThreejsのmorphAttributesを使う事で、シェーダーを使わずに簡単にモーフィング表現が行えます。

公式example

https://threejs.org/examples/?q=morp#webgl_morphtargets_sphere


### 今回作成したサンプル

https://github.com/anx234/threejs-morph-target

https://6354e8240f2f0040750b2efd--taupe-haupia-d409bd.netlify.app/

### 準備
```js
//　変形対象オブジェクトを宣言
const geometry = new THREE.SphereGeometry(1, 32, 32);
//　変化後の頂点座標を格納する準備
geometry.morphAttributes.position = [];
```


### モーフィングする形状を作る

```js
//　変形用に頂点座標を格納する準備
  const morphPositions = [];

//　ランダムな頂点を付与
  for (let i = 0; i < positionAttribute.count; i++) {
    const radius = Math.random() * 0.1;
    const x = positionAttribute.getX(i);
    const y = positionAttribute.getY(i);
    const z = positionAttribute.getZ(i);
    randomPositions.push(
      Math.sin(x * (Math.random() - 0.5) * 100),
      y * (Math.random() - 0.5) * 100,
      z * (Math.random() - 0.5) * 100
    );
  }

//　変化後の頂点座標を格納
  geometry.morphAttributes.position[0] = new THREE.Float32BufferAttribute(
    randomPositions,
    3
  );

　geometry.attributes.position.needsUpdate = true;
  geometry.computeVertexNormals();


```
変形対象の頂点分ループさせて、ランダムなポジションに格納させています。別のオブジェクトにモーフィングさせたい場合は,頂点数を合わせるためMeshSurfaceSamplerを使用する。
他にもモーフィングしたい形状がある場合は
geometry.morphAttributes.position[1],  geometry.morphAttributes.position[2]といったように、変形後の頂点を格納しておきます。


```js
const params = {
  morphing: 0,
};
//　変化後の頂点座標を格納
  mesh.morphTargetInfluences[0] = params.morphing;
```

mesh.morphTargetInfluences[0]に変数を代入します。0の場合は変形前、１で変形後の形状になります。

```js
gsap.to(params, {
  Randomness: 1,
  duration: 8,
  ease: "Power2.out",
});
```
gsapなどで、先ほど、用意したパラメータを変化させることでモーフィングアニメーションが可能になります。