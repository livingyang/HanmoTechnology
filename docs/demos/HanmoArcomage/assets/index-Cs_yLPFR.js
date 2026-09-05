import{T as xi,A as ji,F as qi,R as Yi,E as on,C as gt,P as Qi,V as qe,S as Xs,a as ei,B as ti,d as At,r as X,c as Q,s as Ji,w as ln,b as Se,o as A,e as C,n as _e,f as Zi,g as pn,h as g,t as _,u as m,i as ie,j as ue,k as te,l as ye,m as Z,p as Ae,q as ce,v as Xi,x as Xn,y as er,z as tr,D as nr}from"./vendor-BFtIxWlF.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const he={Brick:"brick",Gem:"gem",Recruit:"recruit",None:"none"},mt={PlayAgain:"playAgain",DrawDiscard:"drawDiscard",NotDiscardable:"notDiscardable"},sr={Gain:"gain",Lose:"lose",Set:"set",Damage:"damage",Swap:"swap"},Pe={Self:"self",Opponent:"opponent",All:"all",AllExceptSelf:"allExceptSelf",Enemies:"enemies",Allies:"allies",LowestWall:"lowestWall",HighestWall:"highestWall",LowestTower:"lowestTower",HighestTower:"highestTower"},v={Tower:"tower",Wall:"wall",Quarry:"quarry",Magic:"magic",Dungeon:"dungeon",Bricks:"bricks",Gems:"gems",Recruits:"recruits",OpponentTower:"opponentTower",OpponentWall:"opponentWall",OpponentQuarry:"opponentQuarry",OpponentMagic:"opponentMagic",OpponentDungeon:"opponentDungeon",OpponentBricks:"opponentBricks",OpponentGems:"opponentGems",OpponentRecruits:"opponentRecruits",LowestWall:"lowestWall",HighestWall:"highestWall",HighestTower:"highestTower",LowestTower:"lowestTower",HighestQuarry:"highestQuarry",HighestBricks:"highestBricks",HighestMagic:"highestMagic",HighestGems:"highestGems",HighestDungeon:"highestDungeon",HighestRecruits:"highestRecruits",LowestQuarry:"lowestQuarry",LowestBricks:"lowestBricks",LowestMagic:"lowestMagic",LowestGems:"lowestGems",LowestDungeon:"lowestDungeon",LowestRecruits:"lowestRecruits"},ir=new Set([v.HighestWall,v.LowestWall,v.HighestTower,v.LowestTower,v.HighestQuarry,v.LowestQuarry,v.HighestBricks,v.LowestBricks,v.HighestMagic,v.LowestMagic,v.HighestGems,v.LowestGems,v.HighestDungeon,v.LowestDungeon,v.HighestRecruits,v.LowestRecruits]);function rr(s){return ir.has(s)}function ar(s){const e=new Map;for(const t of s)e.set(t.toLowerCase(),t);return e}function Vt(s,e,t){const n=ar(e),i=s.toLowerCase(),r=n.get(i);if(r!==void 0)return r;let a;if(i.length>1&&i.endsWith("s")?a=n.get(i.slice(0,-1)):a=n.get(i+"s"),a!==void 0)return a;throw new Error(`Unknown ${t} token '${s}'`)}function ws(s){return Vt(s,Object.values(Pe),"target")}function Rn(s){return Vt(s,Object.values(v),"resource")}function or(s){return Vt(s,Object.values(sr),"effect")}function lr(s){return Vt(s,Object.values(he),"cardType")}function cr(s){return Vt(s,Object.values(mt),"cardFeature")}const ur="#b5503f",dr="#5e241c",hr="#e08577",fr="#3f6fb5",pr="#1d3866",gr="#7fa3e0",mr="#479050",yr="#22482a",_r="#82c48a",wr="#7d7d8c",Sr="#3f3f4a",Tr="#b5b5c2",Er="#1d3a3a",br="#14262e",kr="#0a1218",Ar="#4a4f58",Ir="#6b727d",Rr="#33373e",vr="#565c66",Nr="#4d535d",Dr="#d8d2c4",Cr="#1b202c",Or="#4d8cf2",Mr="#f2594d",oe={brickMain:ur,brickDark:dr,brickLight:hr,gemMain:fr,gemDark:pr,gemLight:gr,recruitMain:mr,recruitDark:yr,recruitLight:_r,neutralMain:wr,neutralDark:Sr,neutralLight:Tr,tableInner:Er,tableMid:br,tableOuter:kr,stoneBase:Ar,stoneTop:Ir,stoneSeam:Rr,wallBrickA:vr,wallBrickB:Nr,flagPole:Dr,cardFaceBg:Cr,sideHuman:Or,sideAi:Mr};function Kt(s,e){const t=document.createElement("canvas");t.width=s,t.height=e;const n=t.getContext("2d");if(!n)throw new Error("[procedural] canvas 2d context unavailable");return[t,n]}function Ht(s,e){const t=new xi(s.graphicsDevice,{width:e.width,height:e.height,flipY:!0});return t.setSource(e),t}const Lr={[he.Brick]:{main:oe.brickMain,dark:oe.brickDark,light:oe.brickLight},[he.Gem]:{main:oe.gemMain,dark:oe.gemDark,light:oe.gemLight},[he.Recruit]:{main:oe.recruitMain,dark:oe.recruitDark,light:oe.recruitLight},[he.None]:{main:oe.neutralMain,dark:oe.neutralDark,light:oe.neutralLight}};function Wr(s){const[e,t]=Kt(1024,512),n=t.createRadialGradient(512,256,60,512,256,620);n.addColorStop(0,oe.tableInner),n.addColorStop(.55,oe.tableMid),n.addColorStop(1,oe.tableOuter),t.fillStyle=n,t.fillRect(0,0,1024,512),t.strokeStyle="rgba(255,255,255,0.025)",t.lineWidth=1;for(let i=0;i<=1024;i+=32)t.beginPath(),t.moveTo(i,0),t.lineTo(i,512),t.stroke();for(let i=0;i<=512;i+=32)t.beginPath(),t.moveTo(0,i),t.lineTo(1024,i),t.stroke();return Ht(s,e)}function Pr(s){const[e,t]=Kt(160,96);return t.clearRect(0,0,160,96),t.fillStyle=oe.stoneBase,t.beginPath(),t.moveTo(18,90),t.lineTo(142,90),t.lineTo(120,30),t.lineTo(40,30),t.closePath(),t.fill(),t.fillStyle=oe.stoneTop,t.beginPath(),t.moveTo(40,30),t.lineTo(120,30),t.lineTo(110,16),t.lineTo(50,16),t.closePath(),t.fill(),t.strokeStyle=oe.stoneSeam,t.lineWidth=3,t.beginPath(),t.moveTo(55,58),t.lineTo(105,58),t.stroke(),t.beginPath(),t.moveTo(45,78),t.lineTo(115,78),t.stroke(),Ht(s,e)}function Gr(s,e){const[t,n]=Kt(128,128);return n.clearRect(0,0,128,128),n.fillStyle=e,n.beginPath(),n.moveTo(64,8),n.lineTo(96,84),n.lineTo(32,84),n.closePath(),n.fill(),n.fillStyle="rgba(255,255,255,0.22)",n.beginPath(),n.moveTo(64,8),n.lineTo(64,84),n.lineTo(32,84),n.closePath(),n.fill(),n.strokeStyle=oe.flagPole,n.lineWidth=3,n.beginPath(),n.moveTo(64,8),n.lineTo(64,0),n.stroke(),n.fillStyle=e,n.beginPath(),n.moveTo(64,0),n.lineTo(92,8),n.lineTo(64,18),n.closePath(),n.fill(),n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(28,84,72,6),Ht(s,t)}function Br(s){const[e,t]=Kt(128,128);t.clearRect(0,0,128,128);const n=4,i=128/n;for(let r=0;r<n;r++){const a=r%2===0?0:16;for(let o=-1;o<4;o++){const l=o*32+a,c=r*i;t.fillStyle=r%2===0?oe.wallBrickA:oe.wallBrickB,t.fillRect(l+2,c+2,28,i-4),t.fillStyle="rgba(255,255,255,0.09)",t.fillRect(l+2,c+2,28,4)}}return Ht(s,e)}const Ss=new Map;function $r(s,e,t){const n=`${e}:${t}`,i=Ss.get(n);if(i)return i;const[r,a]=Kt(240,320),o=Lr[e];a.fillStyle=oe.cardFaceBg,a.fillRect(0,0,240,320),a.strokeStyle=o.main,a.lineWidth=12,a.strokeRect(6,6,228,308),a.fillStyle=o.dark,a.fillRect(6,6,228,44),a.fillStyle=o.light,a.font='bold 130px "Microsoft YaHei", "PingFang SC", sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(t||"?",120,175),a.strokeStyle=o.main,a.lineWidth=4,a.beginPath(),a.moveTo(30,285),a.lineTo(210,285),a.stroke();const l=Ht(s,r);return Ss.set(n,l),l}const vn=5.2,Ts=40;function Kn(s,e,t){const n=new on;n.addComponent("render",{type:"plane"}),n.setLocalEulerAngles(-90,0,0),n.setLocalScale(e,1,t);const i=new Xs;i.useLighting=!1,i.cull=ei,i.emissiveMap=s,i.emissive=new gt(1,1,1),i.diffuse.set(0,0,0),i.blendType=ti,i.depthWrite=!1,i.opacityMap=s,i.opacity=1,i.update();const r=n.render?.meshInstances[0];return r&&(r.material=i),{entity:n,mat:i}}function Es(s,e,t){const n=new on;n.addComponent("render",{type:"plane"}),n.setLocalEulerAngles(-90,0,0),n.setLocalScale(s,1,e);const i=new Xs;i.useLighting=!1,i.cull=ei,i.emissive=t,i.diffuse.set(0,0,0),i.blendType=ti,i.depthWrite=!1,i.opacity=1,i.update();const r=n.render?.meshInstances[0];return r&&(r.material=i),{entity:n,mat:i}}function Nn(s,e){const t=s.height/s.width;return Kn(s,e,e*t)}class zr{ready;app;camera;seats={};flyers=[];particles=[];constructor(e){this.app=new ji(e),this.app.setCanvasFillMode(qi),this.app.setCanvasResolution(Yi),this.camera=new on("camera"),this.camera.addComponent("camera",{projection:Qi,orthoHeight:vn,clearColor:new gt(.04,.045,.06,1)}),this.camera.setPosition(0,0,10),this.camera.lookAt(0,0,0),this.app.root.addChild(this.camera),this.build(),this.ready=Promise.resolve(),this.app.on("update",this.onUpdate),this.app.start(),requestAnimationFrame(this.fixCanvasSize),window.addEventListener("resize",this.fixCanvasSize),document.addEventListener("visibilitychange",this.fixCanvasSize)}fixCanvasSize=()=>{window.innerWidth>0&&window.innerHeight>0&&this.app.resizeCanvas()};build(){const e=Nn(Wr(this.app),22);e.entity.setPosition(0,0,-3),this.app.root.addChild(e.entity),this.buildSeat(0,new qe(-4.3,-2.9,0),oe.sideHuman,new gt(.3,.55,.95)),this.buildSeat(1,new qe(4.3,2.9,0),oe.sideAi,new gt(.95,.35,.3)),this.seats[1].root.rotateLocal(0,0,180)}buildSeat(e,t,n,i){const r=new on(`seat-${e}`);r.setPosition(t.x,t.y,t.z),this.app.root.addChild(r);const a=Nn(Pr(this.app),1.6);r.addChild(a.entity);const o=Es(.9,1,i);r.addChild(o.entity);const l=Nn(Gr(this.app,n),1.2);r.addChild(l.entity);const c=Kn(Br(this.app),1.4,1.4);c.entity.setLocalPosition(1.6,-.2,.01),r.addChild(c.entity);const h={root:r,shaft:o.entity,shaftMat:o.mat,top:l.entity,wall:c.entity,wallMat:c.mat,targetTowerH:0,targetWallH:0,towerH:.01,wallH:.01};this.seats[e]=h,this.layoutSeat(h,!0)}setSeatStats(e,t,n){const i=this.seats[e];i&&(i.targetTowerH=Math.max(0,t)/Ts,i.targetWallH=Math.max(0,n)/Ts)}anchor(e,t){const n=this.seats[e],i=t==="tower"?n?.top:n?.wall,r=e===0?new qe(-4.3,-2,0):new qe(4.3,2,0);return i?i.getWorldTransform().getTranslation(new qe):r}cssToWorld(e,t,n=2){const i=this.app.graphicsDevice.canvas,r=i.clientWidth||1,a=i.clientHeight||1,o=vn*(r/a);return new qe((e/r-.5)*2*o,(.5-t/a)*2*vn,n)}worldToCss(e){const t=this.camera.camera.worldToScreen(e,new qe),n=this.app.graphicsDevice.canvas;return{x:t.x,y:(n.clientHeight||1)-t.y}}async flyCard(e){await this.ready;const t=$r(this.app,e.cardType,e.glyph),{entity:n,mat:i}=Kn(t,.95,1.3),r=this.cssToWorld(e.fromCss.x,e.fromCss.y,2);n.setPosition(r.x,r.y,r.z),this.app.root.addChild(n),await new Promise(a=>{this.flyers.push({entity:n,mat:i,from:r,to:new qe(e.toWorld.x,e.toWorld.y,e.toWorld.z),elapsed:0,duration:e.duration??.5,done:a})})}burst(e,t,n="tower"){const i=this.anchor(e,n),r=t==="damage"?new gt(1,.28,.15):new gt(1,.82,.3),a=14;for(let o=0;o<a;o++){const{entity:l,mat:c}=Es(.16,.16,r);l.setPosition(i.x,i.y,1.5),this.app.root.addChild(l);const h=Math.PI*2*o/a+Math.random()*.5,d=1.2+Math.random()*1.6;this.particles.push({entity:l,mat:c,vel:new qe(Math.cos(h)*d,Math.sin(h)*d+1.2,0),elapsed:0,life:.65+Math.random()*.25})}}onUpdate=e=>{for(const t of Object.values(this.seats))t&&this.layoutSeat(t,!1,e);for(let t=this.flyers.length-1;t>=0;t--){const n=this.flyers[t];n.elapsed+=e;const i=Math.min(1,n.elapsed/n.duration),r=1-(1-i)*(1-i),a=n.from.x+(n.to.x-n.from.x)*r,o=n.from.y+(n.to.y-n.from.y)*r,l=Math.sin(i*Math.PI)*.6;n.entity.setPosition(a,o+l,n.from.z);const c=.8+r*.35;n.entity.setLocalScale(.95*c,1,1.3*c),n.mat.opacity=i<.15?i/.15:i>.75?Math.max(0,1-(i-.75)/.25):1,n.mat.update(),i>=1&&(this.app.root.removeChild(n.entity),n.entity.destroy(),this.flyers.splice(t,1),n.done())}for(let t=this.particles.length-1;t>=0;t--){const n=this.particles[t];n.elapsed+=e,n.vel.y-=4.5*e;const i=n.entity.getPosition();n.entity.setPosition(i.x+n.vel.x*e,i.y+n.vel.y*e,i.z);const r=n.elapsed/n.life;n.mat.opacity=Math.max(0,1-r),n.mat.update(),n.elapsed>=n.life&&(this.app.root.removeChild(n.entity),n.entity.destroy(),this.particles.splice(t,1))}};layoutSeat(e,t,n=0){if(t)e.towerH=Math.max(.01,e.targetTowerH),e.wallH=Math.max(.01,e.targetWallH);else{const o=Math.min(1,n*5);e.towerH+=(Math.max(.01,e.targetTowerH)-e.towerH)*o,e.wallH+=(Math.max(.01,e.targetWallH)-e.wallH)*o}const i=.12,r=e.targetTowerH<=0;e.shaft.setLocalScale(.9,1,e.towerH),e.shaft.setLocalPosition(0,-.1,i+e.towerH/2),e.shaftMat.opacity=r?.15:.85,e.shaftMat.update(),e.top.enabled=!r,e.top.setLocalPosition(0,-.1,i+e.towerH+.22);const a=e.targetWallH<=0;e.wall.setLocalScale(1.4,1,e.wallH),e.wall.setLocalPosition(1.6,-.2,e.wallH/2),e.wallMat.opacity=a?.15:1,e.wallMat.update(),e.wall.enabled=!a||e.wallH>.05}destroy(){window.removeEventListener("resize",this.fixCanvasSize),document.removeEventListener("visibilitychange",this.fixCanvasSize),this.app.off("update",this.onUpdate),this.app.destroy()}}const Ur=At("meta",()=>{const s=X(""),e=X(!1),t=X(!1);async function n(){try{s.value=await window.gameAPI.getVersion(),e.value=!0}catch(i){console.error("[meta] boot failed:",i),e.value=!1}}return{appVersion:s,ipcOk:e,rendererReady:t,boot:n}}),st=At("settings",()=>{const s=X(null),e=X(!1),t=Q(()=>s.value?.nickname??""),n=Q(()=>s.value?.language??"—");async function i(){s.value=await window.gameAPI.getSettings(),e.value=!0}async function r(a){s.value||await i();const o={...s.value,...a};s.value=await window.gameAPI.saveSettings(o)}return{settings:s,loaded:e,nickname:t,language:n,load:i,update:r}}),Vr=`name: Classic Deck
description: The classic 102-card deck.
cards:
  - id: brick_shortage
    name: Brick Shortage
    description: All players lose 8 bricks
    type: brick
    cost: 0
    pic: ../Sprites/Cards/brick_shortage.png
    actions:
      - all.Bricks.Lose(8)
  
  - id: lucky_cache
    name: Lucky Cache
    description: +2 Bricks, +2 Gems, Play again
    type: brick
    cost: 0
    pic: ../Sprites/Cards/lucky_cache.png
    features:
      - playAgain
    actions:
      - self.Bricks.Gain(2)
      - self.Gems.Gain(2)
  
  - id: friendly_terrain
    name: Friendly Terrain
    description: +1 Wall, Play again
    type: brick
    cost: 1
    pic: ../Sprites/Cards/friendly_terrain.png
    features:
      - playAgain
    actions:
      - self.Wall.Gain(1)
  
  - id: miners
    name: Miners
    description: +1 Quarry
    type: brick
    cost: 3
    pic: ../Sprites/Cards/miners.png
    actions:
      - self.Quarry.Gain(1)
  
  - id: mother_lode
    name: Mother Lode
    description: If quarry < enemy quarry, +2 quarry. Else, +1 quarry
    type: brick
    cost: 4
    pic: ../Sprites/Cards/mother_lode.png
    actions:
      - if: self.Quarry < opponent.Quarry
        then:
          - self.Quarry.Gain(2)
        else:
          - self.Quarry.Gain(1)
  
  - id: dwarven_miners
    name: Dwarven Miners
    description: +4 Wall, +1 Quarry
    type: brick
    cost: 7
    pic: ../Sprites/Cards/dwarven_miners.png
    actions:
      - self.Wall.Gain(4)
      - self.Quarry.Gain(1)
  
  - id: work_overtime
    name: Work Overtime
    description: +5 Wall, You lose 6 gems
    type: brick
    cost: 2
    pic: ../Sprites/Cards/work_overtime.png
    actions:
      - self.Wall.Gain(5)
      - self.Gems.Lose(6)
  
  - id: copping_the_tech
    name: Copping the Tech
    description: If quarry < enemy quarry, quarry = enemy quarry
    type: brick
    cost: 5
    pic: ../Sprites/Cards/copping_the_tech.png
    actions:
      - if: self.Quarry < opponent.Quarry
        then:
          - self.Quarry.Set(opponent.Quarry)
  
  - id: basic_wall
    name: Basic Wall
    description: +3 Wall
    type: brick
    cost: 2
    pic: ../Sprites/Cards/basic_wall.png
    actions:
      - self.Wall.Gain(3)
  
  - id: sturdy_wall
    name: Sturdy Wall
    description: +4 Wall
    type: brick
    cost: 3
    pic: ../Sprites/Cards/sturdy_wall.png
    actions:
      - self.Wall.Gain(4)
  
  - id: innovations
    name: Innovations
    description: +1 To all player's quarrys, you gain 4 gems
    type: brick
    cost: 2
    pic: ../Sprites/Cards/innovations.png
    actions:
      - all.Quarry.Gain(1)
      - self.Gems.Gain(4)
  
  - id: foundations
    name: Foundations
    description: If wall = 0, +6 wall, else +3 wall
    type: brick
    cost: 3
    pic: ../Sprites/Cards/foundations.png
    actions:
      - if: self.Wall == 0
        then:
          - self.Wall.Gain(6)
        else:
          - self.Wall.Gain(3)
  
  - id: tremors
    name: Tremors
    description: All walls take 5 damage. Play again
    type: brick
    cost: 7
    pic: ../Sprites/Cards/tremors.png
    features:
      - playAgain
    actions:
      - all.Wall.Lose(5)
  
  - id: secret_room
    name: Secret Room
    description: +1 Magic, Play Again
    type: brick
    cost: 8
    pic: ../Sprites/Cards/secret_room.png
    features:
      - playAgain
    actions:
      - self.Magic.Gain(1)
  
  - id: earthquake
    name: Earthquake
    description: -1 To all player's quarrys
    type: brick
    cost: 0
    pic: ../Sprites/Cards/earthquake.png
    actions:
      - all.Quarry.Lose(1)
  
  - id: big_wall
    name: Big Wall
    description: +6 Wall
    type: brick
    cost: 5
    pic: ../Sprites/Cards/big_wall.png
    actions:
      - self.Wall.Gain(6)
  
  - id: collapse
    name: Collapse!
    description: -1 Enemy quarry
    type: brick
    cost: 4
    pic: ../Sprites/Cards/collapse.png
    actions:
      - opponent.Quarry.Lose(1)
  
  - id: new_equipment
    name: New Equipment
    description: +2 Quarry
    type: brick
    cost: 6
    pic: ../Sprites/Cards/new_equipment.png
    actions:
      - self.Quarry.Gain(2)
  
  - id: strip_mine
    name: Strip Mine
    description: -1 Quarry, +10 Wall, You gain 5 gems
    type: brick
    cost: 0
    pic: ../Sprites/Cards/strip_mine.png
    actions:
      - self.Quarry.Lose(1)
      - self.Wall.Gain(10)
      - self.Gems.Gain(5)
  
  - id: reinforced_wall
    name: Reinforced Wall
    description: +8 Wall
    type: brick
    cost: 8
    pic: ../Sprites/Cards/reinforced_wall.png
    actions:
      - self.Wall.Gain(8)
  
  - id: porticulus
    name: Porticulus
    description: +5 Wall, +1 Dungeons
    type: brick
    cost: 9
    pic: ../Sprites/Cards/porticulus.png
    actions:
      - self.Wall.Gain(5)
      - self.Dungeons.Gain(1)
  
  - id: crystal_rocks
    name: Crystal Rocks
    description: +7 Wall, gain 7 gems
    type: brick
    cost: 9
    pic: ../Sprites/Cards/crystal_rocks.png
    actions:
      - self.Wall.Gain(7)
      - self.Gems.Gain(7)
  
  - id: harmonic_ore
    name: Harmonic Ore
    description: +6 Wall, +3 Tower
    type: brick
    cost: 11
    pic: ../Sprites/Cards/harmonic_ore.png
    actions:
      - self.Wall.Gain(6)
      - self.Tower.Gain(3)
  
  - id: mondo_wall
    name: Mondo Wall
    description: +12 Wall
    type: brick
    cost: 13
    pic: ../Sprites/Cards/mondoWall.png
    actions:
      - self.Wall.Gain(12)
  
  - id: focused_designs
    name: Focused Designs
    description: +8 Wall, +5 Tower
    type: brick
    cost: 15
    pic: ../Sprites/Cards/focusedDesigns.png
    actions:
      - self.Wall.Gain(8)
      - self.Tower.Gain(5)
  
  - id: great_wall
    name: Great Wall
    description: +15 Wall
    type: brick
    cost: 16
    pic: ../Sprites/Cards/great_wall.png
    actions:
      - self.Wall.Gain(15)
  
  - id: rock_launcher
    name: Rock Launcher
    description: +6 Wall, 10 Damage to enemy
    type: brick
    cost: 18
    pic: ../Sprites/Cards/rock_launcher.png
    actions:
      - self.Wall.Gain(6)
      - opponent.Damage(10)
  
  - id: dragons_heart
    name: Dragon's Heart
    description: +20 Wall, +8 Tower
    type: brick
    cost: 24
    pic: ../Sprites/Cards/dragons_heart.png
    actions:
      - self.Wall.Gain(20)
      - self.Tower.Gain(8)
  
  - id: forced_labor
    name: Forced Labor
    description: +9 Wall, Lose 5 Recruits
    type: brick
    cost: 7
    pic: ../Sprites/Cards/forced_labor.png
    actions:
      - self.Wall.Gain(9)
      - self.Recruits.Lose(5)
  
  - id: rock_garden
    name: Rock Garden
    description: +1 Wall, +1 Tower, +2 Recruits
    type: brick
    cost: 1
    pic: ../Sprites/Cards/rock_garden.png
    actions:
      - self.Wall.Gain(1)
      - self.Tower.Gain(1)
      - self.Recruits.Gain(2)
  
  - id: flood_water
    name: Flood Water
    description: Player(s) with lowest Wall are -1 Dungeon and 2 damage to Tower
    type: brick
    cost: 6
    pic: ../Sprites/Cards/flood_water.png
    actions:
      - lowestWall.Dungeons.Lose(1)
      - lowestWall.Tower.Lose(2)
  
  - id: barracks
    name: Barracks
    description: +6 Recruits, +6 Wall, If dungeon < enemy dungeon then +1 dungeon
    type: brick
    cost: 10
    pic: ../Sprites/Cards/barracks.png
    actions:
      - self.Recruits.Gain(6)
      - self.Wall.Gain(6)
      - if: self.Dungeons < opponent.Dungeons
        then:
          - self.Dungeons.Gain(1)
  
  - id: battlements
    name: Battlements
    description: +7 Wall, 6 damage to enemy
    type: brick
    cost: 14
    pic: ../Sprites/Cards/battlements.png
    actions:
      - self.Wall.Gain(7)
      - opponent.Damage(6)
  
  - id: shift
    name: Shift
    description: Switch your Wall with enemy Wall
    type: brick
    cost: 17
    pic: ../Sprites/Cards/shift.png
    actions:
      - self.Wall.Swap(opponent.Wall)
  
  - id: quartz
    name: Quartz
    description: +1 Tower, Play again
    type: gem
    cost: 1
    pic: ../Sprites/Cards/quartz.png
    features:
      - playAgain
    actions:
      - self.Tower.Gain(1)
  
  - id: smoky_quartz
    name: Smoky Quartz
    description: 1 Damage to enemy tower, Play again
    type: gem
    cost: 2
    pic: ../Sprites/Cards/smoky_quartz.png
    features:
      - playAgain
    actions:
      - opponent.Tower.Lose(1)
  
  - id: amethyst
    name: Amethyst
    description: +3 Tower
    type: gem
    cost: 2
    pic: ../Sprites/Cards/amethyst.png
    actions:
      - self.Tower.Gain(3)
  
  - id: spell_weavers
    name: Spell Weavers
    description: +1 Magic
    type: gem
    cost: 3
    pic: ../Sprites/Cards/spell_weavers.png
    actions:
      - self.Magic.Gain(1)
  
  - id: prism
    name: Prism
    description: Draw 1 card, Discard 1 card, Play again
    type: gem
    cost: 2
    pic: ../Sprites/Cards/prism.png
    features:
      - playAgain
      - drawDiscard
  
  - id: lodestone
    name: Lodestone
    description: +3 Tower, This card can't be discarded without playing it
    type: gem
    cost: 5
    pic: ../Sprites/Cards/lodestone.png
    features:
      - notDiscardable
    actions:
      - self.Tower.Gain(3)
  
  - id: solar_flare
    name: Solar Flare
    description: +2 Tower, 2 Damage to enemy tower
    type: gem
    cost: 4
    pic: ../Sprites/Cards/solar_flare.png
    actions:
      - self.Tower.Gain(2)
      - opponent.Tower.Lose(2)
  
  - id: crystal_matrix
    name: Crystal Matrix
    description: +1 Magic, +3 Tower, +1 Enemy tower
    type: gem
    cost: 6
    pic: ../Sprites/Cards/crystal_matrix.png
    actions:
      - self.Magic.Gain(1)
      - self.Tower.Gain(3)
      - opponent.Tower.Gain(1)
  
  - id: gemstone_flaw
    name: Gemstone Flaw
    description: 3 Damage to enemy tower
    type: gem
    cost: 2
    pic: ../Sprites/Cards/gemstone_flaw.png
    actions:
      - opponent.Tower.Lose(3)
  
  - id: ruby
    name: Ruby
    description: +5 Tower
    type: gem
    cost: 3
    pic: ../Sprites/Cards/ruby.png
    actions:
      - self.Tower.Gain(5)
  
  - id: gem_spear
    name: Gem Spear
    description: 5 Damage to enemy tower
    type: gem
    cost: 4
    pic: ../Sprites/Cards/gem_spear.png
    actions:
      - opponent.Tower.Lose(5)
  
  - id: power_burn
    name: Power Burn
    description: 5 Damage to your tower, +2 Magic
    type: gem
    cost: 3
    pic: ../Sprites/Cards/power_burn.png
    actions:
      - self.Tower.Lose(5)
      - self.Magic.Gain(2)
  
  - id: harmonic_vibe
    name: Harmonic Vibe
    description: +1 Magic, +3 Tower, +3 Wall
    type: gem
    cost: 7
    pic: ../Sprites/Cards/harmonic_vibe.png
    actions:
      - self.Magic.Gain(1)
      - self.Tower.Gain(3)
      - self.Wall.Gain(3)
  
  - id: parity
    name: Parity
    description: All player's magic equals the highest player's magic
    type: gem
    cost: 7
    pic: ../Sprites/Cards/parity.png
    actions:
      - all.Magic.Set(highestMagic)
  
  - id: emerald
    name: Emerald
    description: +8 Tower
    type: gem
    cost: 6
    pic: ../Sprites/Cards/emerald.png
    actions:
      - self.Tower.Gain(8)
  
  - id: pearl_of_wisdom
    name: Pearl of Wisdom
    description: +5 Tower, +1 Magic
    type: gem
    cost: 9
    pic: ../Sprites/Cards/pearl_of_wisdom.png
    actions:
      - self.Tower.Gain(5)
      - self.Magic.Gain(1)
  
  - id: shatterer
    name: Shatterer
    description: -1 Magic, 9 Damage to enemy tower
    type: gem
    cost: 8
    pic: ../Sprites/Cards/shatterer.png
    actions:
      - self.Magic.Lose(1)
      - opponent.Tower.Lose(9)
  
  - id: crumblestone
    name: Crumblestone
    description: +5 Tower, Enemy loses 6 bricks
    type: gem
    cost: 7
    pic: ../Sprites/Cards/crumblestone.png
    actions:
      - self.Tower.Gain(5)
      - opponent.Bricks.Lose(6)
  
  - id: sapphire
    name: Sapphire
    description: +11 Tower
    type: gem
    cost: 10
    pic: ../Sprites/Cards/sapphire.png
    actions:
      - self.Tower.Gain(11)
  
  - id: discord
    name: Discord
    description: 7 Damage to all towers, all player's magic -1
    type: gem
    cost: 5
    pic: ../Sprites/Cards/discord.png
    actions:
      - all.Tower.Lose(7)
      - all.Magic.Lose(1)
  
  - id: fire_ruby
    name: Fire Ruby
    description: +6 Tower, 4 Damage to all enemy towers
    type: gem
    cost: 13
    pic: ../Sprites/Cards/fire_ruby.png
    actions:
      - self.Tower.Gain(6)
      - enemies.Tower.Lose(4)
  
  - id: quarrys_help
    name: Quarry's Help
    description: +7 Tower, Lose 10 bricks
    type: gem
    cost: 4
    pic: ../Sprites/Cards/quarrys_help.png
    actions:
      - self.Tower.Gain(7)
      - self.Bricks.Lose(10)
  
  - id: crystal_shield
    name: Crystal Shield
    description: +8 Tower, +3 Wall
    type: gem
    cost: 12
    pic: ../Sprites/Cards/crystal_shield.png
    actions:
      - self.Tower.Gain(8)
      - self.Wall.Gain(3)
  
  - id: empathy_gem
    name: Empathy Gem
    description: +8 Tower, +1 Dungeon
    type: gem
    cost: 14
    pic: ../Sprites/Cards/empathy_gem.png
    actions:
      - self.Tower.Gain(8)
      - self.Dungeons.Gain(1)
  
  - id: diamond
    name: Diamond
    description: +15 Tower
    type: gem
    cost: 16
    pic: ../Sprites/Cards/diamond.png
    actions:
      - self.Tower.Gain(15)
  
  - id: sanctuary
    name: Sanctuary
    description: +10 Tower, +5 Wall, Gain 5 recruits
    type: gem
    cost: 15
    pic: ../Sprites/Cards/sanctuary.png
    actions:
      - self.Tower.Gain(10)
      - self.Wall.Gain(5)
      - self.Recruits.Gain(5)
  
  - id: lava_jewel
    name: Lava Jewel
    description: +12 Tower, 6 Damage to all enemies
    type: gem
    cost: 17
    pic: ../Sprites/Cards/lava_jewel.png
    actions:
      - self.Tower.Gain(12)
      - enemies.Damage(6)
  
  - id: dragons_eye
    name: Dragon's Eye
    description: +20 Tower
    type: gem
    cost: 21
    pic: ../Sprites/Cards/dragons_eye.png
    actions:
      - self.Tower.Gain(20)
  
  - id: crystallize
    name: Crystallize
    description: +11 Tower, -6 Wall
    type: gem
    cost: 8
    pic: ../Sprites/Cards/crystallize.png
    actions:
      - self.Tower.Gain(11)
      - self.Wall.Lose(6)
  
  - id: bag_of_baubles
    name: Bag of Baubles
    description: If Tower < enemy Tower than +2 Tower, Else +1 Tower
    type: gem
    cost: 0
    pic: ../Sprites/Cards/bag_of_baubles.png
    actions:
      - if: self.Tower < opponent.Tower
        then:
          - self.Tower.Gain(2)
        else:
          - self.Tower.Gain(1)
  
  - id: rainbow
    name: Rainbow
    description: +1 Tower to all players. You gain 3 gems
    type: gem
    cost: 0
    pic: ../Sprites/Cards/rainbow.png
    actions:
      - all.Tower.Gain(1)
      - self.Gems.Gain(3)
  
  - id: apprentice
    name: Apprentice
    description: +4 Tower, you lose 3 recruits, 2 Damage to enemy Tower
    type: gem
    cost: 5
    pic: ../Sprites/Cards/apprentice.png
    actions:
      - self.Tower.Gain(4)
      - self.Recruits.Lose(3)
      - opponent.Tower.Lose(2)
  
  - id: lightning_shard
    name: Lightning Shard
    description: If Tower > enemy Wall then 8 damage to enemy Tower, else 8 damage
    type: gem
    cost: 11
    pic: ../Sprites/Cards/lightning_shard.png
    actions:
      - if: self.Tower > opponent.Wall
        then:
          - opponent.Tower.Lose(8)
        else:
          - opponent.Damage(8)
  
  - id: phase_jewel
    name: Phase Jewel
    description: +13 Tower, +6 Recruits, +6 Bricks
    type: gem
    cost: 18
    pic: ../Sprites/Cards/phase_jewel.png
    actions:
      - self.Tower.Gain(13)
      - self.Recruits.Gain(6)
      - self.Bricks.Gain(6)
  
  - id: mad_cow_disease
    name: Mad Cow Disease
    description: All players lose 6 recruits.
    type: recruit
    cost: 0
    pic: ../Sprites/Cards/madCowDisease.png
    actions:
      - all.Recruits.Lose(6)
  
  - id: faerie
    name: Faerie
    description: 2 Damage, Play again
    type: recruit
    cost: 1
    pic: ../Sprites/Cards/faerie.png
    features:
      - playAgain
    actions:
      - opponent.Damage(2)
  
  - id: moody_goblins
    name: Moody Goblins
    description: 4 Damage, You lose 3 gems
    type: recruit
    cost: 1
    pic: ../Sprites/Cards/moody_goblins.png
    actions:
      - opponent.Damage(4)
      - self.Gems.Lose(3)
  
  - id: minotaur
    name: Minotaur
    description: +1 Dungeon
    type: recruit
    cost: 3
    pic: ../Sprites/Cards/minotaur.png
    actions:
      - self.Dungeons.Gain(1)
  
  - id: elven_scout
    name: Elven Scouts
    description: Draw 1 card, Discard 1 card, Play again
    type: recruit
    cost: 2
    pic: ../Sprites/Cards/elven_scout.png
    features:
      - playAgain
      - drawDiscard
  
  - id: goblin_mob
    name: Goblin Mob
    description: 6 Damage, You take 3 damage
    type: recruit
    cost: 3
    pic: ../Sprites/Cards/goblin_mob.png
    actions:
      - opponent.Damage(6)
      - self.Damage(3)
  
  - id: goblin_archers
    name: Goblin Archers
    description: 3 Damage to enemy tower, You take 1 damage
    type: recruit
    cost: 4
    pic: ../Sprites/Cards/goblin_archers.png
    actions:
      - opponent.Tower.Lose(3)
      - self.Damage(1)
  
  - id: shadow_faerie
    name: Shadow Faerie
    description: 2 Damage to enemy tower, Play again
    type: recruit
    cost: 6
    pic: ../Sprites/Cards/shadow_faerie.png
    features:
      - playAgain
    actions:
      - opponent.Tower.Lose(2)
  
  - id: orc
    name: Orc
    description: 5 Damage
    type: recruit
    cost: 3
    pic: ../Sprites/Cards/orc.png
    actions:
      - opponent.Damage(5)
  
  - id: dwarves
    name: Dwarves
    description: 4 Damage, +3 Wall
    type: recruit
    cost: 5
    pic: ../Sprites/Cards/dwarves.png
    actions:
      - opponent.Damage(4)
      - self.Wall.Gain(3)
  
  - id: little_snakes
    name: Little Snakes
    description: 4 Damage to enemy tower
    type: recruit
    cost: 6
    pic: ../Sprites/Cards/little_snakes.png
    actions:
      - opponent.Tower.Lose(4)
  
  - id: troll_trainer
    name: Troll Trainer
    description: +2 Dungeon
    type: recruit
    cost: 7
    pic: ../Sprites/Cards/troll_trainer.png
    actions:
      - self.Dungeon.Gain(2)
  
  - id: tower_gremlin
    name: Tower Gremlin
    description: 2 Damage, +4 Wall, +2 Tower
    type: recruit
    cost: 8
    pic: ../Sprites/Cards/tower_gremlin.png
    actions:
      - opponent.Damage(2)
      - self.Wall.Gain(4)
      - self.Tower.Gain(2)
  
  - id: full_moon
    name: Full Moon
    description: +1 to all player's Dungeon, You gain 3 recruits
    type: recruit
    cost: 0
    pic: ../Sprites/Cards/full_moon.png
    actions:
      - all.Dungeons.Gain(1)
      - self.Recruits.Gain(3)
  
  - id: slasher
    name: Slasher
    description: 6 Damage
    type: recruit
    cost: 5
    pic: ../Sprites/Cards/slasher.png
    actions:
      - opponent.Damage(6)
  
  - id: ogre
    name: Ogre
    description: 7 Damage
    type: recruit
    cost: 6
    pic: ../Sprites/Cards/ogre.png
    actions:
      - opponent.Damage(7)
  
  - id: rabid_sheep
    name: Rabid Sheep
    description: 6 Damage, Enemy loses 3 recruits
    type: recruit
    cost: 6
    pic: ../Sprites/Cards/rabid_sheep.png
    actions:
      - opponent.Damage(6)
      - opponent.Recruits.Lose(3)
  
  - id: imp
    name: Imp
    description: 6 Damage. All players lose 5 bricks, gems and recruits
    type: recruit
    cost: 5
    pic: ../Sprites/Cards/imp.png
    actions:
      - opponent.Damage(6)
      - all.Bricks.Lose(5)
      - all.Gems.Lose(5)
      - all.Recruits.Lose(5)
  
  - id: spizzer
    name: Spizzer
    description: If enemy wall = 0 then 10 damage, Else 6 damage
    type: recruit
    cost: 8
    pic: ../Sprites/Cards/spizzer.png
    actions:
      - if: opponent.Wall == 0
        then:
          - opponent.Damage(10)
        else:
          - opponent.Damage(6)
  
  - id: werewolf
    name: Werewolf
    description: 9 Damage
    type: recruit
    cost: 9
    pic: ../Sprites/Cards/werewolf.png
    actions:
      - opponent.Damage(9)
  
  - id: corrosion_cloud
    name: Corrosion Cloud
    description: If enemy wall > 0 then 10 damage, Else 7 Damage
    type: recruit
    cost: 11
    pic: ../Sprites/Cards/corrosion_cloud.png
    actions:
      - if: opponent.Wall > 0
        then:
          - opponent.Damage(10)
        else:
          - opponent.Damage(7)
  
  - id: unicorn
    name: Unicorn
    description: If magic > enemy magic then 12 Damage, Else 8 Damage
    type: recruit
    cost: 9
    pic: ../Sprites/Cards/unicorn.png
    actions:
      - if: self.Magic > opponent.Magic
        then:
          - opponent.Damage(12)
        else:
          - opponent.Damage(8)
  
  - id: elven_archers
    name: Elven Archers
    description: If wall > enemy wall then 6 Damage to enemy Tower, Else 6 Damage
    type: recruit
    cost: 10
    pic: ../Sprites/Cards/elven_archers.png
    actions:
      - if: self.Wall > opponent.Wall
        then:
          - opponent.Tower.Lose(6)
        else:
          - opponent.Damage(6)
  
  - id: succubus
    name: Succubus
    description: 5 Damage to enemy tower, enemy loses 8 recruits.
    type: recruit
    cost: 14
    pic: ../Sprites/Cards/succubus.png
    actions:
      - opponent.Tower.Lose(5)
      - opponent.Recruits.Lose(8)
  
  - id: rock_stompers
    name: Rock Stompers
    description: 8 Damage, -1 Enemy quarry
    type: recruit
    cost: 11
    pic: ../Sprites/Cards/rock_stompers.png
    actions:
      - opponent.Damage(8)
      - opponent.Quarry.Lose(1)
  
  - id: thief
    name: Thief
    description: Enemy loses 10 gems, 5 bricks, you gain 1/2 amt. round up
    type: recruit
    cost: 12
    pic: ../Sprites/Cards/thief.png
    actions:
      - opponent.Gems.Lose(10)
      - opponent.Bricks.Lose(5)
      - self.Gems.Gain(5)
      - self.Bricks.Gain(3)
  
  - id: stone_giant
    name: Stone Giant
    description: 10 Damage, +4 Wall
    type: recruit
    cost: 15
    pic: ../Sprites/Cards/stone_giant.png
    actions:
      - opponent.Damage(10)
      - self.Wall.Gain(4)
  
  - id: vampire
    name: Vampire
    description: 10 Damage, Enemy loses 5 recruits, -1 enemy Dungeon
    type: recruit
    cost: 17
    pic: ../Sprites/Cards/vampire.png
    actions:
      - opponent.Damage(10)
      - opponent.Recruits.Lose(5)
      - opponent.Dungeons.Lose(1)
  
  - id: dragon
    name: Dragon
    description: 20 Damage, Enemy loses 10 gems, -1 enemy Dungeon
    type: recruit
    cost: 25
    pic: ../Sprites/Cards/dragon.png
    actions:
      - opponent.Damage(20)
      - opponent.Gems.Lose(10)
      - opponent.Dungeons.Lose(1)
  
  - id: spearman
    name: Spearman
    description: If wall > enemy Wall do 3 Damage, Else do 2 Damage
    type: recruit
    cost: 2
    pic: ../Sprites/Cards/spearman.png
    actions:
      - if: self.Wall > opponent.Wall
        then:
          - opponent.Damage(3)
        else:
          - opponent.Damage(2)
  
  - id: gnome
    name: Gnome
    description: 3 Damage, +1 Gem
    type: recruit
    cost: 2
    pic: ../Sprites/Cards/gnome.png
    actions:
      - opponent.Damage(3)
      - self.Gems.Gain(1)
  
  - id: berserker
    name: Berserker
    description: 8 Damage, 3 Damage to your Tower
    type: recruit
    cost: 4
    pic: ../Sprites/Cards/berserker.png
    actions:
      - opponent.Damage(8)
      - self.Tower.Lose(3)
  
  - id: warlord
    name: Warlord
    description: 13 Damage, You lose 3 gems
    type: recruit
    cost: 13
    pic: ../Sprites/Cards/warlord.png
    actions:
      - opponent.Damage(13)
      - self.Gems.Lose(3)
  
  - id: pegasus_lancer
    name: Pegasus Lancer
    description: 12 Damage to enemy tower
    type: recruit
    cost: 18
    pic: ../Sprites/Cards/pegasus_lancer.png
    actions:
      - opponent.Tower.Lose(12)`,Kr=`id,en,ru,uk,pl,da,de,fr,zh
BRICK_SHORTAGE,Brick Shortage,Дефицит кирпича,Нехватка цегли,Niedobór cegieł,Byggesten Mangel,Ziegelknappheit,Pénurie de briques,砖块短缺
BRICK_SHORTAGE_DESC,All players lose 8 bricks,Все игроки теряют по 8 кирпичей,Усі гравці втрачають по 8 цеглин,Wszyscy gracze tracą po 8 cegieł,Alle spillere mister 8 byggesten,Alle Spieler verlieren 8 Ziegel,Tous les joueurs perdent 8 briques,所有玩家失去 8 砖块
LUCKY_CACHE,Lucky Cache,Удачная находка,Вдала знахідка,Szczęśliwe znalezisko,Heldigt Forråd,Glücklicher Fund,Cachette chanceuse,幸运宝藏
LUCKY_CACHE_DESC,"+2 Bricks, +2 Gems, Play again","+2 Кирпича, +2 Самоцвета, Играем снова","+2 Цегли, +2 Самоцвіту, Граємо знову","+2 cegły, +2 klejnoty, zagraj ponownie","+2 Byggesten, +2 Ædelstene, Spil igen","+2 Ziegel, +2 Edelsteine, Noch einmal spielen","+2 Briques, +2 Gemmes, Jouez à nouveau",+2 砖块，+2 宝石，再出一张
FRIENDLY_TERRAIN,Friendly Terrain,Благотатная почва,Благодатний ґрунт,Urodzajna gleba,Venligt Terræn,Freundliches Terrain,Terrain amical,地利
FRIENDLY_TERRAIN_DESC,"+1 Wall, Play again","+1 к Стене, Играем снова","+1 до Стіни, Граємо знову","+1 do Muru, zagraj ponownie","+1 Mur, Spil igen","+1 Mauer, Noch einmal spielen","+1 Mur, Jouez à nouveau",墙 +1，再出一张
MINERS,Miners,Шахтёры,Шахтарі,Górnicy,Minearbejdere,Bergleute,Mineurs,矿工
MINERS_DESC,+1 Quarry,+1 к Карьеру,+1 до Кар'єру,+1 do Kamieniołomu,+1 Stenbrud,+1 Steinbruch,+1 Carrière,采石场 +1
MOTHER_LODE,Mother Lode,Большая жила,Велика жила,Wielka żyła,Hovedåre,Mutterlode,Filon de Mère,主矿脉
MOTHER_LODE_DESC,"If quarry < enemy quarry, +2 quarry. Else, +1 quarry","Если карьер < чем у врага, то карьер +2. Иначе +1 Карьер","Якщо кар'єр ніж у ворога, то кар'єр +2. Інакше +1","Jeśli kamieniołom jest niższy niż u przeciwnika, to kamieniołom +2. W przeciwnym razie +1","Hvis stenbrud < modstander stenbrud, +2 stenbrud. Ellers, +1 stenbrud","Wenn Steinbruch < feindlicher Steinbruch, +2 Steinbruch. Sonst, +1 Steinbruch","Si carrière < carrière de l'ennemi, +2 carrière. Sinon, +1 carrière",若己方采石场低于敌方，则采石场 +2；否则 +1
DWARVEN_MINERS,Dwarven Miners,Гномы-Шахтёры,Гноми-Шахтарі,Górnicy Krasnoludów,Dværg Minearbejdere,Zwergenbergleute,Mineurs nains,矮人矿工
DWARVEN_MINERS_DESC,"+4 Wall, +1 Quarry","+4 к Стене, +1 к карьеру","+4 до Стіни, +1 до кар'єру","+4 do Muru, +1 do kamieniołomu","+4 Mur, +1 Stenbrud","+4 Mauer, +1 Steinbruch","+4 Mur, +1 Carrière",墙 +4，采石场 +1
WORK_OVERTIME,Work Overtime,Сверхурочные,Понаднормові,Nadgodziny,Arbejd Overtid,Überstunden,Heures supplémentaires,加班赶工
WORK_OVERTIME_DESC,"+5 Wall, You lose 6 gems","+5 к Стене, вы теряете 5 самоцветов","+5 до Стіни, ви втрачаєте 5 самоцвітів","+5 do Muru, tracisz 5 klejnotów","+5 Mur, Du mister 6 ædelstene","+5 Mauer, Du verlierst 6 Edelsteine","+5 Mur, Vous perdez 6 gemmes",墙 +5，失去 6 宝石
COPPING_THE_TECH,Copping the Tech,Чужая технология,Чужа технологія,Obca technologia,Hug Teknologien,Technik übernehmen,Copie de technologie,偷师学艺
COPPING_THE_TECH_DESC,"If quarry < enemy quarry, quarry = enemy quarry","Если карьер < чем у врага, то карьер становится = вражескому","Якщо кар'єр < ніж у ворога, то кар'єр стає ворожим","Jeśli kamieniołom < niż u przeciwnika, to kamieniołom staje się wrogi","Hvis stenbrud < modstander stenbrud, stenbrud = modstander stenbrud","Wenn Steinbruch < feindlicher Steinbruch, Steinbruch = feindlicher Steinbruch","Si carrière < carrière de l'ennemi, carrière = carrière de l'ennemi",若己方采石场低于敌方，则采石场变为与敌方相同
BASIC_WALL,Basic Wall,Обычная стена,Звичайна стіна,Zwykły mur,Almindelig Mur,Grundmauer,Mur basique,简易城墙
BASIC_WALL_DESC,+3 Wall,+3 к Стене,+3 до Стіни,+3 do Muru,+3 Mur,+3 Mauer,+3 Mur,墙 +3
STURDY_WALL,Sturdy Wall,Крепкая стена,Міцна стіна,Solidny mur,Hårdført Mur,Stabile Mauer,Mur solide,坚固城墙
STURDY_WALL_DESC,+4 Wall,+4 к Стене,+4 до Стіни,+4 do Muru,+4 Mur,+4 Mauer,+4 Mur,墙 +4
INNOVATIONS,Innovations,Новшества,Нововведення,Innowacja,Innovationer,Innovationen,Innovations,工艺革新
INNOVATIONS_DESC,"+1 To all player's quarrys, you gain 4 gems","+1 к карьерам всех игроков, вы получаете 4 самоцвета","+1 до кар'єрів всіх гравців, ви отримуєте 4 самоцвіти","+1 do kamieniołomów wszystkich graczy, otrzymujesz 4 klejnoty","+1 Til alle spillers stenbrud, du modtager 4 ædelstene","+1 zu allen Steinbrüchen der Spieler, du erhältst 4 Edelsteine","+1 À toutes les carrières des joueurs, vous gagnez 4 gemmes",所有玩家采石场 +1，己方获得 4 宝石
FOUNDATIONS,Foundations,Фундамент,Фундамент,Fundament,Fundament,Fundamente,Fondations,地基
FOUNDATIONS_DESC,"If wall = 0, +6 wall, else +3 wall","Если стена = 0, то +5 к Стене, иначе +3 к Стене","Якщо стіна = 0, то +5 до стіни, інакше +3 до стіни","Jeśli mur = 0, to +5 do muru, w przeciwnym razie +3 do muru","Hvis mur = 0, +6 mur, ellers +3 mur","Wenn Mauer = 0, +6 Mauer, sonst +3 Mauer","Si mur = 0, +6 mur, sinon +3 mur",若己方墙为 0，墙 +6；否则墙 +3
TREMORS,Tremors,Толчки,Поштовхи,Wstrząsy,Rystelser,Erschütterungen,Tremblements,地动
TREMORS_DESC,All walls take 5 damage. Play again,"Все стены получают по 5 повреждений, играем снова","Усі стіни отримують по 5 пошкоджень, граємо знову","Wszystkie mury otrzymują po 5 obrażeń, zagraj ponownie","Alle murer tager 5 skade, Spil igen",Alle Mauern erleiden 5 Schaden. Noch einmal spielen,Tous les murs subissent 5 dégâts. Jouez à nouveau,所有墙受到 5 点伤害，再出一张
SECRET_ROOM,Secret Room,Секретный зал,Таємна зала,Tajemna sala,Hemmeligt Rum,Geheimer Raum,Salle secrète,密室
SECRET_ROOM_DESC,"+1 Magic, Play Again","+1 Магия, Играем снова","+1 Магія, Граємо знову","+1 Magia, zagraj ponownie","+1 Magi, Spil Igen","+1 Magie, Noch einmal spielen","+1 Magie, Jouez à nouveau",魔法 +1，再出一张
EARTHQUAKE,Earthquake,Землетрясение,Землетрус,Trzęsienie ziemi,Jordskælv,Erdbeben,Tremblement de terre,地震
EARTHQUAKE_DESC,-1 To all player's quarrys,-1 Карьеры всех игроков,-1 Кар'єри всіх гравців,-1 Kamieniołomy wszystkich graczy,-1 Til alle spillers stenbrud,-1 zu allen Steinbrüchen der Spieler,-1 À toutes les carrières des joueurs,所有玩家采石场 -1
BIG_WALL,Big Wall,Большая стена,Велика стіна,Wielki mur,Stor Mur,Große Mauer,Grand mur,巨型城墙
BIG_WALL_DESC,+6 Wall,+6 к Стене,+6 до Стіни,+6 do Muru,+6 Mur,+6 Mauer,+6 Mur,墙 +6
COLLAPSE,Collapse!,Обвал!,Обвалення!,Zawał!,Bryd Sammen!,Einsturz!,Effondrement !,坍塌
COLLAPSE_DESC,-1 Enemy quarry,-1 Карьер врага,-1 Ворожий кар'єр,-1 Wrogi kamieniołom,-1 Modstander Stenbrud,-1 feindlicher Steinbruch,-1 Carrière ennemie,敌方采石场 -1
NEW_EQUIPMENT,New Equipment,Новое оборудование,Нове устаткування,Nowe wyposażenie,Nyt Udstyr,Neue Ausrüstung,Nouveau matériel,新设备
NEW_EQUIPMENT_DESC,+2 Quarry,+2 Карьера,+2 Кар'єра,+2 Kamieniołomu,+2 Stenbrud,+2 Steinbruch,+2 Carrière,采石场 +2
STRIP_MINE,Strip Mine,Рудник обвалился,Розчистити шахту,Oczyszczenie kopalni,Stribe Mine,Tagebau,Mine à ciel ouvert,露天开采
STRIP_MINE_DESC,"-1 Quarry, +10 Wall, You gain 5 gems","-1 Карьер, +10 к Стене, вы получаете 5 самоцветов","-1 Кар'єр, +10 до Стіни, Ви отримуєте 5 дорогоцінних каменів","-1 Kamieniołom, +10 do Muru, Otrzymujesz 5 klejnotów","-1 Stenbrud, +11 Mur, Du modtager 5 ædelstene","-1 Steinbruch, +10 Mauer, du erhältst 5 Edelsteine","-1 Carrière, +10 Mur, Vous gagnez 5 gemmes",采石场 -1，墙 +10，获得 5 宝石
REINFORCED_WALL,Reinforced Wall,Усиленная стена,Армована стіна,Wzmocniony mur,Forstærket Mur,Verstärkte Mauer,Mur renforcé,加固城墙
REINFORCED_WALL_DESC,+8 Wall,+8 к Стене,+ 8 до Стіни,+8 do Muru,+8 Mur,+8 Mauer,+8 Mur,墙 +8
PORTICULUS,Porticulus,Решётка,Ґрати,Kraty,Faldgitter,Fallgitter,Herse,铁闸门
PORTICULUS_DESC,"+5 Wall, +1 Dungeons","+5 к Стене, +1 к Темнице","+5 до Стіни, +1 Підземелля","+5 do Muru, +1 Loch","+5 Mur, +1 Hule","+5 Mauer, +1 Verlies","+5 Mur, +1 Donjon",墙 +5，地下城 +1
CRYSTAL_ROCKS,Crystal Rocks,Кристальная жила,Кристалічні породи,Kryształowe skały,Krystal Sten,Kristallfelsen,Roches cristallines,晶石矿脉
CRYSTAL_ROCKS_DESC,"+7 Wall, gain 7 gems","+7 к Стене, вы получаете 7 самоцветов","+7 до Стіни, отримати 7 дорогоцінних каменів","+7 do Muru, otrzymaj 7 klejnotów","+7 Mur, modtag 7 ædelstene","+7 Mauer, du erhältst 7 Edelsteine","+7 Mur, gagnez 7 gemmes",墙 +7，获得 7 宝石
HARMONIC_ORE,Harmonic Ore,Поющая руда,Співуча руда,Śpiewająca ruda,Harmonisk Malm,Harmonisches Erz,Minerai harmonique,谐鸣矿石
HARMONIC_ORE_DESC,"+6 Wall, +3 Tower","+6 к Стене, +3 к Башне","+6 до Стіни, +3 Вежі","+6 do Muru, +3 do Wieży","+6 Mur, +3 Tårn","+6 Mauer, +3 Turm","+6 Mur, +3 Tour",墙 +6，塔 +3
MONDO_WALL,Mondo Wall,Бастион,Світова стіна,Światowy mur,Mondo Mur,Mondo Mauer,Mur monumental,巨壁
MONDO_WALL_DESC,+12 Wall,+12 к Стене,+12 до Стіни,+12 do Muru,+12 Mur,+12 Mauer,+12 Mur,墙 +12
FOCUSED_DESIGNS,Focused Designs,Новые успехи,Орієнтовані проекти,Skierowane projekty,Fokuseret Design,Konzentrierte Designs,Conceptions ciblées,精专设计
FOCUSED_DESIGNS_DESC,"+8 Wall, +5 Tower","+8 к Стене, +5 к Башне","+8 до Стіни, +5 Вежі","+8 do Muru, +5 do Wieży","+8 Mur, +5 Tårn","+8 Mauer, +5 Turm","+8 Mur, +5 Tour",墙 +8，塔 +5
GREAT_WALL,Great Wall,Великая стена,Велетенська стіна,Gigantyczny mur,Enorm Mur,Große Mauer,Grande Muraille,长城
GREAT_WALL_DESC,+15 Wall,+15 к Стене,+15 до Стіни,+15 do Muru,+15 Mur,+15 Mauer,+15 Mur,墙 +15
ROCK_LAUNCHER,Rock Launcher,Камнемёт,Камнеметатель,Kamieniomiot,Sten Slynge,Felsenwerfer,Lance-rochers,掷石机
ROCK_LAUNCHER_DESC,"+6 Wall, 10 Damage to enemy","+6 к Стене, 10 урона","+6 до Стіни, 10 Пошкодження ворогу","+6 do Muru, 10 Obrażeń przeciwnikowi","+6 Mur, 10 Skade til modstander","+6 Mauer, 10 Schaden für den Feind","+6 Mur, 10 Dégâts à l'ennemi",墙 +6，对敌方造成 10 点伤害
DRAGONS_HEART,Dragon's Heart,Драконье сердце,Серце Дракона,Serce Smoka,Drages Hjerte,Drachenherz,Cœur de dragon,龙之心
DRAGONS_HEART_DESC,"+20 Wall, +8 Tower","+20 к Стене, +8 к Башне","+20 до Стіна, +8 до Вежі","+20 do Muru, +8 do Wieży","+20 Mur, +8 Tårn","+20 Mauer, +8 Turm","+20 Mur, +8 Tour",墙 +20，塔 +8
FORCED_LABOR,Forced Labor,Каторга,Примусова праця,Przymusowa praca,Tvunget Arbejde,Zwangsarbeit,Travail forcé,强制劳役
FORCED_LABOR_DESC,"+9 Wall, Lose 5 Recruits","+9 к Стене, вы теряете 5 зверей","+9 до Стіни, втратити 5 новобранців","+9 do Muru, stracisz 5 rekrutów","+9 Mur, Mist 5 Rekrutter","+9 Mauer, Du verlierst 5 Rekruten","+9 Mur, Perdez 5 recrues",墙 +9，失去 5 兵员
ROCK_GARDEN,Rock Garden,Каменный сад,Кам'яний сад,Kamienny ogród,Sten Have,Steingarten,Jardin de pierres,石庭
ROCK_GARDEN_DESC,"+1 Wall, +1 Tower, +2 Recruits","+1 к Стене, +1 к Башне, +2 зверя","+1 Стіни, +1 Вежі, +2 Новобранця","+1 Mur, +1 Wieża, +2 Rekruci","+1 Mur, +1 Tårn, +2 Rekrutter","+1 Mauer, +1 Turm, +2 Rekruten","+1 Mur, +1 Tour, +2 Recrues",墙 +1，塔 +1，+2 兵员
FLOOD_WATER,Flood Water,Наводнение,Паводкова вода,Powódź,Oversvømmelse,Hochwasser,Eaux de crue,洪水
FLOOD_WATER_DESC,Player(s) with lowest Wall are -1 Dungeon and 2 damage to Tower,Игрок с меньшей стеной получает -1 к темнице и 2 урона башне,Гравці з найнижчою стіною мають -1 підземелля і 2 до пошкодження вежі,Gracze z najniższym murem mają -1 loch i 2 obrażeń dla wieży,Spiller(e) med lavest Mur er -1 Hule og 2 skade til Tårn,Spieler mit der niedrigsten Mauer verlieren -1 Verlies und 2 Schaden am Turm,Joueur(s) avec le plus bas mur -1 Donjon et 2 dégâts à la tour,墙最低的玩家地下城 -1，且其塔受到 2 点伤害
BARRACKS,Barracks,Казармы,Барак,Barak,Barakker,Kaserne,Caserne,兵营
BARRACKS_DESC,"+6 Recruits, +6 Wall, If dungeon < enemy dungeon then +1 dungeon","+6 зверей, +6 к Стене, если темница < вражеской, +1 темница","+6 новобранців, +6 стіни, якщо підземелля < вороже підземелля, то +1 підземе","+6 rekrutów, +6 muru, jeśli loch < loch wroga, to +1 loch","+6 Rekrutter, +6 Mur, Hvis hule < modstander hule så +1 hule","+6 Rekruten, +6 Mauer, Wenn Verlies < feindliches Verlies, dann +1 Verlies","+6 Recrues, +6 Mur, Si donjon < donjon de l'ennemi alors +1 donjon",+6 兵员，+6 墙；若己方地下城低于敌方，地下城 +1
BATTLEMENTS,Battlements,Укрепления,Укріплювання,Ufortyfikowanie,Brystværner,Wehrmauern,Créneaux,城垛
BATTLEMENTS_DESC,"+7 Wall, 6 damage to enemy","+7 к Стене, 6 урона врагу","+7 до Стіни, 6 ушкодження ворожій","+7 do Muru, 6 obrażeń dla wroga","+7 Mur, 6 skade til modstander","+7 Mauer, 6 Schaden für den Feind","+7 Mur, 6 dégâts à l'ennemi",墙 +7，对敌方造成 6 点伤害
SHIFT,Shift,Сдвиг,Зміщення,Przesunięcie,Skift,Tausch,Échange,移墙
SHIFT_DESC,Switch your Wall with enemy Wall,Ваша и вражеская стена меняются местами,Змініть свою стіну на ворожу,Zamień swój mur na wrogi,Byt din Mur med modstander Mur,Wechsle deine Mauer mit der feindlichen Mauer,Échangez votre mur avec le mur de l'ennemi,与敌方交换墙的高度
QUARTZ,Quartz,Кварц,Кварц,Kwarc,Kvarts,Quarz,Quartz,石英
QUARTZ_DESC,"+1 Tower, Play again","+1 к Башне, Играем снова","+1 до Вежі, Граємо знову","+1 do Wieży, zagraj ponownie","+1 Tårn, Spil igen","+1 Turm, Noch einmal spielen","+1 Tour, Jouez à nouveau",塔 +1，再出一张
SMOKY_QUARTZ,Smoky Quartz,Дымчатый кварц,Димчастий кварц,Dymny kwarc,Røg Kvarts,Rauchquarz,Quartz fumé,烟晶
SMOKY_QUARTZ_DESC,"1 Damage to enemy tower, Play again","1 урона Башне врага, Играем снова","1 Пошкодження ворожої вежі, Грайте знову","1 Obrażenie wrogiej wieży, zagraj ponownie","1 Skade til modstander tårn, Spil igen","1 Schaden am feindlichen Turm, Noch einmal spielen","1 Dégât à la tour ennemie, Jouez à nouveau",对敌方塔造成 1 点伤害，再出一张
AMETHYST,Amethyst,Аметист,Аметист,Ametyst,Ametyst,Amethyst,Améthyste,紫水晶
AMETHYST_DESC,+3 Tower,+3 к Башне,+3 до Вежі,+3 do Wieży,+3 Tårn,+3 Turm,+3 Tour,塔 +3
SPELL_WEAVERS,Spell Weavers,Ткачи заклинаний,Ткачі заклинань,Tkacze zaklęć,Besværgelsesvæver,Zauberweber,Tisseurs de sorts,咒语织工
SPELL_WEAVERS_DESC,+1 Magic,+1 к Магии,+1 до Магії,+1 do Magii,+1 Magi,+1 Magie,+1 Magie,魔法 +1
PRISM,Prism,Призма,Призма,Pryzmat,Prisme,Prisma,Prisme,棱镜
PRISM_DESC,"Draw 1 card, Discard 1 card, Play again","Взять 1 карту, Сбросить 1 карту, Играем снова","Взяти 1 карту, Скинути 1 карту, Граємо знову","Weź 1 kartę, odrzuć 1 kartę, zagraj ponownie","Træk 1 kort, Kasser 1 kort, Spil igen","Ziehe 1 Karte, wirf 1 Karte ab, Noch einmal spielen","Piochez 1 carte, Défaussez 1 carte, Jouez à nouveau",摸 1 张牌，弃 1 张牌，再出一张
LODESTONE,Lodestone,Магнетит,Магнетит,Magnetyt,Ledesten,Magnetstein,Magnétite,磁石
LODESTONE_DESC,"+3 Tower, This card can't be discarded without playing it","+3 к Башне, Эта карта не может быть сброшена","+3 до Вежі, Ця карта не може бути скинута","+3 do Wieży, ta karta nie może być odrzucona","+3 Tårn, Dette kort kan ikke kasseres uden at blive spillet","+3 Turm, Diese Karte kann nicht abgeworfen werden, ohne sie zu spielen","+3 Tour, Cette carte ne peut pas être défaussée sans être jouée",塔 +3；此牌未打出时不可弃置
SOLAR_FLARE,Solar Flare,Вспышка солнца,Сонячний спалах,Rozbłysk słoneczny,Soludbrud,Sonnenflare,Éruption solaire,太阳耀斑
SOLAR_FLARE_DESC,"+2 Tower, 2 Damage to enemy tower","+2 к Башне, 2 урона башне врага","+2 до Вежі, 2 шкоди башти ворога","+2 do Wieży, 2 obrażenia dla wieży wroga","+2 Tårn, 2 Skade til modstander tårn","+2 Turm, 2 Schaden am feindlichen Turm","+2 Tour, 2 Dégâts à la tour ennemie",塔 +2，对敌方塔造成 2 点伤害
CRYSTAL_MATRIX,Crystal Matrix,Матрица,Кришталева матриця,Kryształowa matryca,Krystal Matrix,Kristallmatrix,Matrice cristalline,水晶矩阵
CRYSTAL_MATRIX_DESC,"+1 Magic, +3 Tower, +1 Enemy tower","+1 к Магии, +3 к Башне, +1 к Башне врага","+1 до Магії, +3 до Вежі, +1 до Вежі ворога","+1 do Magii, +3 do Wieży, +1 do Wieży wroga","+1 Magi, +3 Tårn, +1 Modstander tårn","+1 Magie, +3 Turm, +1 feindlicher Turm","+1 Magie, +3 Tour, +1 Tour ennemie",魔法 +1，塔 +3，敌方塔 +1
GEMSTONE_FLAW,Gemstone Flaw,Трещина,Хиба цінного каменю,Błąd klejnotu,Ædelstensfejl,Edelsteinfehler,Défaut de gemme,宝石瑕疵
GEMSTONE_FLAW_DESC,3 Damage to enemy tower,3 урона Башне врага,3 пошкодження ворожої Вежі,3 obrażenia wrogiej Wieży,3 Skade til modstander tårn,3 Schaden am feindlichen Turm,3 Dégâts à la tour ennemie,对敌方塔造成 3 点伤害
RUBY,Ruby,Рубин,Рубін,Rubin,Rubin,Rubin,Rubis,红宝石
RUBY_DESC,+5 Tower,+5 к Башне,+5 до Вежі,+5 do Wieży,+5 Tårn,+5 Turm,+5 Tour,塔 +5
GEM_SPEAR,Gem Spear,Копье из самоцвета,Самоцвітний спис,Klejnotowa włócznia,Ædelstensspyd,Edelsteinspeer,Lance de gemme,宝石长矛
GEM_SPEAR_DESC,5 Damage to enemy tower,5 урона Башне врага,5 пошкодження ворожої Вежі,5 obrażeń wrogiej Wieży,5 Skade til modstander tårn,5 Schaden am feindlichen Turm,5 Dégâts à la tour ennemie,对敌方塔造成 5 点伤害
POWER_BURN,Power Burn,Взрыв силы,Спалювання енергії,Spalanie energii,Magt Afbrænding,Machtverzehrung,Brûlure de puissance,力量燃耗
POWER_BURN_DESC,"5 Damage to your tower, +2 Magic","5 урона собственной Башне, +2 к Магии","5 збитків власної Вежі, +2 до Магії","5 obrażeń własnej Wieży, +2 do Magii","5 Skade til dit tårn, +2 Magi","5 Schaden an deinem Turm, +2 Magie","5 Dégâts à votre tour, +2 Magie",己方塔受到 5 点伤害，魔法 +2
HARMONIC_VIBE,Harmonic Vibe,Гармония,Гармонія,Harmonia,Harmonisk Bølge,Harmonische Schwingung,Vibration harmonique,谐律
HARMONIC_VIBE_DESC,"+1 Magic, +3 Tower, +3 Wall","+1 к Магии, +3 к Башне, +3 к Стене","+1 до Магії, +3 до Вежі, +3 до Стіни","+1 do Magii, +3 do Wieży, +3 do Muru","+1 Magi, +3 Tårn, +3 Mur","+1 Magie, +3 Turm, +3 Mauer","+1 Magie, +3 Tour, +3 Mur",魔法 +1，塔 +3，墙 +3
PARITY,Parity,Паритет,Рівність,Równość,Paritet,Parität,Parité,均势
PARITY_DESC,All player's magic equals the highest player's magic,Магия всех игроков становится равна магии сильнейшего,Магія всіх гравців стає рівна магії найсильнішого,Magia wszystkich graczy staje się równa najsilniejszej magii,Alle spillers magi er ens med den højeste spillers magi,Alle Spieler haben so viel Magie wie der Spieler mit der höchsten Magie,Toute la magie des joueurs égale celle du joueur ayant le plus de magie,所有玩家的魔法变为与当前最高者相同
EMERALD,Emerald,Изумруд,Смарагд,Szmaragd,Smaragd,Smaragd,Émeraude,祖母绿
EMERALD_DESC,+8 Tower,+8 к Башне,+8 до Вежі,+8 do Wieży,+8 Tårn,+8 Turm,+8 Tour,塔 +8
PEARL_OF_WISDOM,Pearl of Wisdom,Жемчуг мудрости,Перлина мудрості,Perła mądrości,Visdomsperle,Perle der Weisheit,Perle de sagesse,智慧珍珠
PEARL_OF_WISDOM_DESC,"+5 Tower, +1 Magic","+5 к Башне, +1 к Магии","+5 до Вежі, +1 до Магії","+5 do Wieży, +1 do Magii","+5 Tårn, +1 Magi","+5 Turm, +1 Magie","+5 Tour, +1 Magie",塔 +5，魔法 +1
SHATTERER,Shatterer,Разрушитель,Руйнівник,Niszczyciel,Knuser,Zertrümmerer,Briseur,粉碎者
SHATTERER_DESC,"-1 Magic, 9 Damage to enemy tower","-1 к Магии, 9 урона Башне врага","-1 до Магії, 9 втрати Вежі ворога","-1 do Magii, 9 obrażeń dla wrogiej Wieży","-1 Magi, 9 Skade til modstander tårn","-1 Magie, 9 Schaden am feindlichen Turm","-1 Magie, 9 Dégâts à la tour ennemie",魔法 -1，对敌方塔造成 9 点伤害
CRUMBLESTONE,Crumblestone,Хрупкий камень,Крихкий камінь,Kruchy kamień,Smuldresten,Bröckelstein,Pierre friable,崩石
CRUMBLESTONE_DESC,"+5 Tower, Enemy loses 6 bricks","+5 к Башне, враг теряет 6 кирпичей","+5 до Вежі, ворог втрачає 6 цеглин","+5 do Wieży, wróg traci 6 cegieł","+5 Tårn, Modstander mister 6 byggesten","+5 Turm, Feind verliert 6 Ziegel","+5 Tour, L'ennemi perd 6 briques",塔 +5，敌方失去 6 砖块
SAPPHIRE,Sapphire,Сапфир,Сапфір,Szafir,Safir,Saphir,Saphir,蓝宝石
SAPPHIRE_DESC,+11 Tower,+11 к Башне,+11 до Вежі,+11 do Wieży,+11 Tårn,+11 Turm,+11 Tour,塔 +11
DISCORD,Discord,Раздор,Розлад,Rozpad,Dissonans,Unordnung,Discorde,失和
DISCORD_DESC,"7 Damage to all towers, all player's magic -1","7 урона всем Башням, -1 к Магии всех игроков","7 збитків усім Вежам, -1 до Магії всіх гравців","7 obrażeń dla wszystkich Wież, -1 do Magii wszystkich graczy","7 Skade til alle tårne, alle spillers magi -1","7 Schaden an allen Türmen, alle Spieler verlieren -1 Magie","7 Dégâts à toutes les tours, la magie de tous les joueurs -1",所有塔受到 7 点伤害，所有玩家魔法 -1
FIRE_RUBY,Fire Ruby,Огненный рубин,Вогненний рубін,Ognisty rubin,Ild Rubin,Feuerrubin,Rubis de feu,烈焰红宝石
FIRE_RUBY_DESC,"+6 Tower, 4 Damage to all enemy towers","+6 к Башне, 4 урона Башням врагов","+6 до Вежі, 4 шкоди Вежам ворогів","+6 do Wieży, 4 obrażenia dla Wież wrogów","+6 Tårn, 4 Skade til alle modstander tårne","+6 Turm, 4 Schaden an allen feindlichen Türmen","+6 Tour, 4 Dégâts à toutes les tours ennemies",塔 +6，对所有敌方塔造成 4 点伤害
QUARRYS_HELP,Quarry's Help,Помощь карьера,Допомога Кар'єру,Pomoc Kamieniołomu,Stenbruds Hjælp,Steinbruchhilfe,Aide de la carrière,采石场援助
QUARRYS_HELP_DESC,"+7 Tower, Lose 10 bricks","+7 к Башне, Вы теряете 10 кирпичей","+7 до Вежі, Ви втрачаєте 10 цегли","+7 do Wieży, tracisz 10 cegieł","+7 Tårn, Mist 10 Byggesten","+7 Turm, Du verlierst 10 Ziegel","+7 Tour, Perdez 10 briques",塔 +7，失去 10 砖块
CRYSTAL_SHIELD,Crystal Shield,Кристальный щит,Кришталевий щит,Kryształowa tarcza,Krystalskjold,Kristallschild,Bouclier de cristal,水晶盾
CRYSTAL_SHIELD_DESC,"+8 Tower, +3 Wall","+8 к Башне, +3 к Стене","+8 до Вежі, +3 до Стіни","+8 do Wieży, +3 do Muru","+8 Tårn, +3 Mur","+8 Turm, +3 Mauer","+8 Tour, +3 Mur",塔 +8，墙 +3
EMPATHY_GEM,Empathy Gem,Самоцвет эмпатии,Самоцвіт емпатії,Klejnot empatii,Empati Ædelsten,Empathie-Edelstein,Gemme de l'empathie,共情宝石
EMPATHY_GEM_DESC,"+8 Tower, +1 Dungeon","+8 к Башне, +1 к Темнице","+8 до Вежі, +1 до В'язниці","+8 do Wieży, +1 do Lochu","+8 Tårn, +1 Hule","+8 Turm, +1 Verlies","+8 Tour, +1 Donjon",塔 +8，地下城 +1
DIAMOND,Diamond,Алмаз,Алмаз,Diament,Diamant,Diamant,Diamant,钻石
DIAMOND_DESC,+15 Tower,+15 к Башне,+15 до Вежі,+15 do Wieży,+15 Tårn,+15 Turm,+15 Tour,塔 +15
SANCTUARY,Sanctuary,Святилище,Святиня,Świątynia,Fristed,Zufluchtsort,Sanctuaire,庇护所
SANCTUARY_DESC,"+10 Tower, +5 Wall, Gain 5 recruits","+10 к Башне, +5 к Стене, Вы получаете пять зверей","+10 до Вежі, +5 до Стіни, Ви отримуєте п'ять звірів","+10 do Wieży, +5 do Muru, otrzymujesz pięć zwierząt","+10 Tårn, +5 Mur, Modtag 5 rekrutter","+10 Turm, +5 Mauer, Du erhältst 5 Rekruten","+10 Tour, +5 Mur, Gagnez 5 recrues",塔 +10，墙 +5，获得 5 兵员
LAVA_JEWEL,Lava Jewel,Лавовый камень,Лавовий камінь,Kamień lawowy,Lava Juvel,Lava-Edelstein,Bijou de lave,熔岩宝珠
LAVA_JEWEL_DESC,"+12 Tower, 6 Damage to all enemies","+12 к Башне, 6 урона всем врагам","+12 до Вежі, 6 втрат усім ворогам","+12 do Wieży, 6 obrażeń wszystkim wrogom","+12 Tårn, 6 Skade til alle modstandere","+12 Turm, 6 Schaden an allen Feinden","+12 Tour, 6 Dégâts à tous les ennemis",塔 +12，对所有敌人造成 6 点伤害
DRAGONS_EYE,Dragon's Eye,Глаз дракона,Око дракона,Oko smoka,Drages Øje,Drachenauge,Œil de dragon,龙之眼
DRAGONS_EYE_DESC,+20 Tower,+20 к Башне,+20 до Вежі,+20 do Wieży,+20 Tårn,+20 Turm,+20 Tour,塔 +20
CRYSTALLIZE,Crystallize,Кристализация,Кристалізація,Krystalizacja,Krystallisere,Kristallisieren,Cristalliser,结晶
CRYSTALLIZE_DESC,"+11 Tower, -6 Wall","+11 к Башне, -6 к Стене","+11 до Вежі, -6 до Стіни","+11 do Wieży, -6 do Muru","+11 Tårn, -6 Mur","+11 Turm, -6 Mauer","+11 Tour, -6 Mur",塔 +11，墙 -6
BAG_OF_BAUBLES,Bag of Baubles,Мешок безделушек,Мішок дрібничок,Torba błyskotek,Smykker Pose,Beutel mit Schmuckstücken,Sac de babioles,一袋饰物
BAG_OF_BAUBLES_DESC,"If Tower < enemy Tower than +2 Tower, Else +1 Tower","Если Башня < вражеской, то +2 к Башне, Иначе +1 к Башне","Якщо Вежа < ворожою, то +2 до Вежі, Інакше +1 до Вежі","Jeśli Wieża < wroga, to +2 do Wieży, w przeciwnym razie +1 do Wieży","Hvis Tårn < modstander Tårn, +2 Tårn, ellers +1 Tårn","Wenn Turm < feindlicher Turm, dann +2 Turm, sonst +1 Turm","Si Tour < Tour ennemie alors +2 Tour, Sinon +1 Tour",若己方塔低于敌方，塔 +2；否则塔 +1
RAINBOW,Rainbow,Радуга,Веселка,Tęcza,Regnbue,Regenbogen,Arc-en-ciel,彩虹
RAINBOW_DESC,+1 Tower to all players. You gain 3 gems,"+1 ко всем Башням, Вы получаете 3 самоцвета","+1 до всіх Веж, Ви отримуєте 3 самоцвіти","+1 do wszystkich Wież, otrzymujesz 3 klejnoty",+1 Tårn til alle spillere. Du modtager 3 ædelstene,+1 Turm für alle Spieler. Du erhältst 3 Edelsteine,+1 Tour pour tous les joueurs. Vous gagnez 3 gemmes,所有玩家塔 +1，己方获得 3 宝石
APPRENTICE,Apprentice,Ученик,Учень,Uczeń,Lærling,Lehrling,Apprenti,学徒
APPRENTICE_DESC,"+4 Tower, you lose 3 recruits, 2 Damage to enemy Tower","+4 к Башне, вы теряете 3 зверя, 2 урона Башне врага","+4 до Вежі, ви втрачаєте 3 звіра, 2 шкоди Вежі ворога","+4 do Wieży, tracisz 3 zwierzęta, 2 obrażenia dla wrogiej Wieży","+4 Tårn, du mister 3 rekrutter, 2 Skade til modstander tårn","+4 Turm, du verlierst 3 Rekruten, 2 Schaden am feindlichen Turm","+4 Tour, vous perdez 3 recrues, 2 Dégâts à la tour ennemie",塔 +4，失去 3 兵员，对敌方塔造成 2 点伤害
LIGHTNING_SHARD,Lightning Shard,Осколок молнии,Осколок блискавки,Odłamek błyskawicy,Lynskår,Blitzsplitter,Éclat de foudre,闪电碎片
LIGHTNING_SHARD_DESC,"If Tower > enemy Wall then 8 damage to enemy Tower, else 8 damage","Если ваша Башня > Стены врага, то 8 урона Башне врага, Иначе 8 урона","Якщо ваша Вежа > Стіни ворога, то 8 збитків Вежі ворога, Інакше 8 збитків","Jeśli twoja Wieża > Mur wroga, to 8 obrażeń dla wrogiej Wieży, w przeciwnym razie 8 obrażeń","Hvis Tårn > modstander mur, 8 skade til modstander Tårn, ellers 8 skade","Wenn Turm > feindliche Mauer, dann 8 Schaden am feindlichen Turm, sonst 8 Schaden","Si Tour > Mur ennemi alors 8 dégâts à la tour ennemie, sinon 8 dégâts",若己方塔高于敌方墙，则对敌方塔造成 8 点伤害；否则造成 8 点伤害
PHASE_JEWEL,Phase Jewel,Фазовый самоцвет,Фазовий самоцвіт,Fazowy klejnot,Fase Juvel,Phasen-Edelstein,Jewel de phase,相位宝珠
PHASE_JEWEL_DESC,"+13 Tower, +6 Recruits, +6 Bricks","+13 к Башне, +6 Зверей, +6 Кирпичей","+13 до Вежі, +6 Звірів, +6 Цегли","+13 do Wieży, +6 Zwierząt, +6 Cegieł","+13 Tårn, +6 Rekrutter, +6 Byggesten","+13 Turm, +6 Rekruten, +6 Ziegel","+13 Tour, +6 Recrues, +6 Briques",塔 +13，+6 兵员，+6 砖块
MAD_COW_DISEASE,Mad Cow Disease,Коровье безумие,Коров'яче божевілля,Krowie szaleństwo,Kogalskab,Rinderwahnsinn,Maladie de la vache folle,疯牛病
MAD_COW_DISEASE_DESC,All players lose 6 recruits.,Все игроки теряют по 6 зверей.,Усі гравці втрачають по 6 звірів.,Wszyscy gracze tracą po 6 zwierząt,Alle spillere mister 6 rekrutter,Alle Spieler verlieren 6 Rekruten.,Tous les joueurs perdent 6 recrues,所有玩家失去 6 兵员
FAERIE,Faerie,Фея,Фея,Wróżka,Fe,Fee,Fée,小精灵
FAERIE_DESC,"2 Damage, Play again","2 урона, Играем снова","2 Пошкодження, грайте знову","2 Obrażenia, zagraj ponownie","2 Skade, Spil igen","2 Schaden, Noch einmal spielen","2 Dégâts, Jouez à nouveau",造成 2 点伤害，再出一张
MOODY_GOBLINS,Moody Goblins,Угрюмые гоблины,Похмурі гобліни,Ponure gobliny,Mutte Gobliner,Launische Kobolde,Gobelins lunatiques,阴郁哥布林
MOODY_GOBLINS_DESC,"4 Damage, You lose 3 gems","4 урона, Вы теряете 3 самоцвета","4 шкоди, Ви втрачаєте 3 самоцвіти","4 obrażenia, tracisz 3 klejnoty","4 Skade, Du mister 3 ædelstene","4 Schaden, Du verlierst 3 Edelsteine","4 Dégâts, Vous perdez 3 gemmes",造成 4 点伤害，失去 3 宝石
MINOTAUR,Minotaur,Минотавр,Мінотавр,Minotaur,Minotaur,Minotaurus,Minotaure,牛头怪
MINOTAUR_DESC,+1 Dungeon,+1 к Темнице,+1 до Темниці,+1 do Lochu,+1 Hule,+1 Verlies,+1 Donjon,地下城 +1
ELVEN_SCOUT,Elven Scout,Эльфы-Скауты,Ельфи-Скаути,Elfowie Zwiadowcy,Elver Spejder,Elbenscout,Éclaireur elfe,精灵斥候
ELVEN_SCOUT_DESC,"Draw 1 card, Discard 1 card, Play again","Взять 1 карту, Сбросить 1 карту, Играем снова","Взяти 1 карту, Скинути 1 карту, Граємо знову","Weź 1 kartę, odrzuć 1 kartę, zagraj ponownie","Træk 1 kort, Kasser 1 kort, Spil igen","Ziehe 1 Karte, wirf 1 Karte ab, Noch einmal spielen","Piochez 1 carte, Défaussez 1 carte, Jouez à nouveau",摸 1 张牌，弃 1 张牌，再出一张
GOBLIN_MOB,Goblin Mob,Толпа гоблинов,Натовп гоблінів,Tłum goblinów,Goblin Hob,Koboldhorde,Foule de gobelins,哥布林群
GOBLIN_MOB_DESC,"6 Damage, You take 3 damage","6 урона, Вы получаете 3 урона","6 шкоди, Ви отримуєте 3 шкоди","6 obrażeń, otrzymujesz 3 obrażenia","6 Skade, Du tage 3 skade","6 Schaden, Du erleidest 3 Schaden","6 Dégâts, Vous subissez 3 dégâts",造成 6 点伤害，己方受到 3 点伤害
GOBLIN_ARCHERS,Goblin Archers,Гоблины-Лучники,Гобліни-Лучники,Gobliny Łucznicy,Goblin Byeskyttere,Koboldbogenschützen,Archers gobelins,哥布林弓手
GOBLIN_ARCHERS_DESC,"3 Damage to enemy tower, You take 1 damage","3 урона Башне врага, Вы получаете 1 урон","3 шкоди вежі ворога, ви отримуєте 1 шкоди","3 obrażenia wrogiej wieży, otrzymujesz 1 obrażenie","3 Skade til modstander tårn, Du tager 1 skade","3 Schaden am feindlichen Turm, Du erleidest 1 Schaden","3 Dégâts à la tour ennemie, Vous subissez 1 dégât",对敌方塔造成 3 点伤害，己方受到 1 点伤害
SHADOW_FAERIE,Shadow Faerie,Призрачная фея,Примарна фея,Widmowa wróżka,Skygge Fe,Schattenfee,Fée de l'ombre,暗影小精灵
SHADOW_FAERIE_DESC,"2 Damage to enemy tower, Play again","2 урона Башне врага, Играем снова","2 утрати вежі ворога, граємо знову","2 obrażenia wrogiej wieży, zagraj ponownie","2 Skade til modstander tårn, Spil igen","2 Schaden am feindlichen Turm, Noch einmal spielen","2 Dégâts à la tour ennemie, Jouez à nouveau",对敌方塔造成 2 点伤害，再出一张
ORC,Orc,Орк,Орк,Ork,Ork,Ork,Orc,兽人
ORC_DESC,5 Damage,5 урона,5 шкоди,5 obrażeń,5 Skade,5 Schaden,5 Dégâts,造成 5 点伤害
DWARVES,Dwarves,Дворфы,Дворфи,Krasnoludy,Dværge,Zwerge,Nains,矮人
DWARVES_DESC,"4 Damage, +3 Wall","4 урона, +3 к Стене","4 шкоди, +3 до стіни","4 obrażenia, +3 do muru","4 Skade, +3 Mur","4 Schaden, +3 Mauer","4 Dégâts, +3 Mur",造成 4 点伤害，墙 +3
LITTLE_SNAKES,Little Snakes,Змеёныши,Маленькі Змійки,Małe Węże,Små Slanger,Kleine Schlangen,Petits serpents,小蛇群
LITTLE_SNAKES_DESC,4 Damage to enemy tower,4 урона Башне врага,4 шкоди вежі ворога,4 obrażenia wrogiej wieży,4 Skade til modstander tårn,4 Schaden am feindlichen Turm,4 Dégâts à la tour ennemie,对敌方塔造成 4 点伤害
TROLL_TRAINER,Troll Trainer,Тренер троллей,Тренер тролей,Trener trolli,Troldetræner,Trolltrainer,Entraîneur de trolls,巨魔教官
TROLL_TRAINER_DESC,+2 Dungeon,+2 Темницы,+2 темниці,+2 do lochu,+2 Hule,+2 Verlies,+2 Donjon,地下城 +2
TOWER_GREMLIN,Tower Gremlin,Башня гремлинов,Вежа Гремлінів,Wieża Gremlinów,Tårn Gremlin,Turmgrimmlin,Gremlin de la tour,塔上精怪
TOWER_GREMLIN_DESC,"2 Damage, +4 Wall, +2 Tower","2 урона, +4 к Стене, +2 к Башне","2 шкоди, + 4 до стіни, +2 до вежі","2 obrażenia, +4 do muru, +2 do wieży","2 Skade, +4 Mur, +2 Tårn","2 Schaden, +4 Mauer, +2 Turm","2 Dégâts, +4 Mur, +2 Tour",造成 2 点伤害，墙 +4，塔 +2
FULL_MOON,Full Moon,Полнолуние,Повний місяць,Pełnia księżyca,Fuldmåne,Vollmond,Pleine lune,满月
FULL_MOON_DESC,"+1 to all player's Dungeon, You gain 3 recruits","+1 к Темницам всех игроков, Вы получаете 3 зверя","+1 до темниць всіх гравців, ви отримуєте 3 звіра","+1 do lochów wszystkich graczy, otrzymujesz 3 zwierzęta","+1 til alle spillers Hule, Du modtager 3 rekrutter","+1 zu allen Verliesen der Spieler, du erhältst 3 Rekruten","+1 au donjon de tous les joueurs, Vous gagnez 3 recrues",所有玩家地下城 +1，己方获得 3 兵员
SLASHER,Slasher,Слэшер,Слешер,Cięciwa,Skærer,Schlächter,Balafreur,砍刀手
SLASHER_DESC,6 Damage,6 урона,6 шкоди,6 obrażeń,6 Skade,6 Schaden,6 Dégâts,造成 6 点伤害
OGRE,Ogre,Огр,Огр,Ogr,Ogre,Oger,Ogre,食人魔
OGRE_DESC,7 Damage,7 урона,7 урона,7 obrażeń,7 Skade,7 Schaden,7 Dégâts,造成 7 点伤害
RABID_SHEEP,Rabid Sheep,Бешеная оцва,Шалена вівця,Szalejąca owca,Gale Får,Tollwütige Schafe,Moutons enragés,疯羊
RABID_SHEEP_DESC,"6 Damage, Enemy loses 3 recruits","6 урона, Враг теряет 3 зверя","6 шкоди, ворог втрачає 3 звіра","6 obrażeń, wróg traci 3 zwierzęta","6 Skade, Modstander mister 3 rekrutter","6 Schaden, Feind verliert 3 Rekruten","6 Dégâts, L'ennemi perd 3 recrues",造成 6 点伤害，敌方失去 3 兵员
IMP,Imp,Бес,Бісеня,Diabełek,Imp,Kobold,Diablotin,小恶魔
IMP_DESC,"6 Damage. All players lose 5 bricks, gems and recruits","6 урона, Все игроки теряют по 5 кирпичей, зверей и самоцветов","6 шкоди, всі гравці втрачають по 5 цеглин, звірів і самоцвітів","6 obrażeń, wszyscy gracze tracą po 5 cegieł, zwierząt i klejnotów","6 Skade. Alle spillere mister 5 byggesten, ædelstene og rekrutter","6 Schaden. Alle Spieler verlieren 5 Ziegel, Edelsteine und Rekruten","6 Dégâts. Tous les joueurs perdent 5 briques, gemmes et recrues",造成 6 点伤害；所有玩家各失去 5 砖块、5 宝石与 5 兵员
SPIZZER,Spizzer,Жучара,Шпіцер,Niszczyciel,Spizzer,Spizzer,Spizzer,尖刺虫
SPIZZER_DESC,"If enemy wall = 0 then 10 damage, Else 6 damage","Если стена врага = 0, то 10 урона, Иначе 6 урона","Якщо стіна ворога = 0, то 10 шкоди, інакше 6 шкоди","Jeśli mur wroga = 0, to 10 obrażeń, w przeciwnym razie 6 obrażeń","Hvis modstander mur = 0, 10 skade, Ellers 6 skade","Wenn feindliche Mauer = 0, dann 10 Schaden, sonst 6 Schaden","Si mur ennemi = 0 alors 10 dégâts, Sinon 6 dégâts",若敌方墙为 0，造成 10 点伤害；否则造成 6 点伤害
WEREWOLF,Werewolf,Оборотень,Перевертень,Wilkołak,Varulv,Werwolf,Loup-garou,狼人
WEREWOLF_DESC,9 Damage,9 урона,9 шкоди,9 obrażeń,9 Skade,9 Schaden,9 Dégâts,造成 9 点伤害
CORROSION_CLOUD,Corrosion Cloud,Едкое облако,Хмара корозії,Chmura korozji,Korroderende Sky,Korrosionswolke,Nuage de corrosion,腐蚀云
CORROSION_CLOUD_DESC,"If enemy wall > 0 then 10 damage, Else 7 Damage","Если стена врага > 0, то 10 урона, Иначе 7 урона","Якщо стіна ворога > 0, то 10 шкоди, інакше 7 шкоди","Jeśli mur wroga > 0, to 10 obrażeń, w przeciwnym razie 7 obrażeń","Hvis modstander mur > 0, 10 skade, ellers 7 skade","Wenn feindliche Mauer > 0, dann 10 Schaden, sonst 7 Schaden","Si mur ennemi > 0 alors 10 dégâts, Sinon 7 Dégâts",若敌方墙大于 0，造成 10 点伤害；否则造成 7 点伤害
UNICORN,Unicorn,Единорог,Єдиноріг,Jednorożec,Enhjørning,Einhorn,Licorne,独角兽
UNICORN_DESC,"If magic > enemy magic then 12 Damage, Else 8 Damage","Если Магия > Магии врага, то 12 урона, Иначе 8 урона","Якщо Магія > магії ворога, то 12 шкоди, інакше 8 шкоди","Jeśli Magia > magii wroga, to 12 obrażeń, w przeciwnym razie 8 obrażeń","Hvis magi > modstander magi, 12 Skade, ellers 8 Skade","Wenn Magie > feindliche Magie, dann 12 Schaden, sonst 8 Schaden","Si magie > magie ennemie alors 12 Dégâts, Sinon 8 Dégâts",若己方魔法高于敌方，造成 12 点伤害；否则造成 8 点伤害
ELVEN_ARCHERS,Elven Archers,Эльфы-Лучники,Ельфійські лучники,Elfowie łucznicy,Elver Byeskyttere,Elbenbogenschützen,Archers elfes,精灵弓手
ELVEN_ARCHERS_DESC,"If wall > enemy wall then 6 Damage to enemy Tower, Else 8 Damage","Если Стена > Стены врага, то 6 урона Башне врага, Иначе 6 урона","Якщо стіна > стіни ворога, то 6 шкоди вежі ворога, інакше 6 шкоди","Jeśli mur > muru wroga, to 6 obrażeń wrogiej wieży, w przeciwnym razie 6 obrażeń","Hvis mur > modstander mur, 6 Skade til modstander Tårn, ellers 6 Skade","Wenn Mauer > feindliche Mauer, dann 6 Schaden am feindlichen Turm, sonst 8 Schaden","Si mur > mur ennemi alors 6 Dégâts à la tour ennemie, Sinon 8 Dégâts",若己方墙高于敌方墙，对敌方塔造成 6 点伤害；否则造成 8 点伤害
SUCCUBUS,Succubus,Суккубы,Суккуб,Sukkub,Succubus,Sukkubus,Succube,魅魔
SUCCUBUS_DESC,"5 Damage to enemy tower, enemy loses 8 recruits.","5 урона Башне врага, враг теряет 8 зверей","5 шкоди вежі ворога, ворог втрачає 8 звірів","5 obrażeń wrogiej wieży, wróg traci 8 zwierząt","5 Skade til modstander tårn, modstander mister 8 rekrutter","5 Schaden am feindlichen Turm, Feind verliert 8 Rekruten.","5 Dégâts à la tour ennemie, l'ennemi perd 8 recrues",对敌方塔造成 5 点伤害，敌方失去 8 兵员
ROCK_STOMPERS,Rock Stompers,Камнееды,Кам'яні топтуни,Kamienne tancerze,Sten Trampere,Felsenstampfer,Écrase-rochers,踏石怪
ROCK_STOMPERS_DESC,"8 Damage, -1 Enemy quarry","8 урона, -1 карьер врага","8 шкоди, -1 кар'єр ворога","8 obrażeń, -1 kamieniołom wroga","8 Skade, -1 Modstander stenbrud","8 Schaden, -1 feindlicher Steinbruch","8 Dégâts, -1 Carrière ennemie",造成 8 点伤害，敌方采石场 -1
THIEF,Thief,Вор,Крадій,Złodziej,Tyv,Dieb,Voleur,盗贼
THIEF_DESC,"Enemy loses 10 gems, 5 bricks, you gain 1/2 amt. round up","Враг теряет 10 самоцветов, 5 кирпичей, Вы получаете половину от этого","Ворог втрачає 10 самоцвітів, 5 цегли, Ви отримуєте половину від цього","Wróg traci 10 klejnotów, 5 cegieł, otrzymujesz połowę z tego","Modstander mister 10 ædelstene, 5 byggesten, du modtager 1/2 mængde rundet op","Feind verliert 10 Edelsteine, 5 Ziegel, du erhältst 1/2 Menge, aufgerundet","L'ennemi perd 10 gemmes, 5 briques, vous gagnez 1/2 quantité arrondie",敌方失去 10 宝石与 5 砖块，己方获得其半数（向上取整）
STONE_GIANT,Stone Giant,Каменный гигант,Кам'яний гігант,Kamienny gigant,Stor Kæmpe,Steinriese,Géant de pierre,石巨人
STONE_GIANT_DESC,"10 Damage, +4 Wall","10 урона, +4 к Стене","10 шкоди, +4 до стіни","10 obrażeń, +4 do muru","10 Skade, +4 Mur","10 Schaden, +4 Mauer","10 Dégâts, +4 Mur",造成 10 点伤害，墙 +4
VAMPIRE,Vampire,Вампир,Вампір,Wampir,Vampyr,Vampir,Vampire,吸血鬼
VAMPIRE_DESC,"10 Damage, Enemy loses 5 recruits, -1 enemy Dungeon","10 урона, враг теряет 5 зверей, -1 к его Темнице","10 шкоди , ворог втрачає 5 звірів, -1 до його темниці","10 obrażeń, wróg traci 5 zwierząt, -1 do jego lochu","10 Skade, Modstander mister 5 rekrutter, -1 modstander Hule","10 Schaden, Feind verliert 5 Rekruten, -1 feindliches Verlies","10 Dégâts, L'ennemi perd 5 recrues, -1 Donjon ennemi",造成 10 点伤害，敌方失去 5 兵员，敌方地下城 -1
DRAGON,Dragon,Дракон,Дракон,Smok,Drage,Drache,Dragon,巨龙
DRAGON_DESC,"20 Damage, Enemy loses 10 gems, -1 enemy Dungeon","20 урона, враг теряет 10 самоцветов, -1 к его Темнице","20 шкоди , ворог втрачає 10 звірів, -1 до його темниці","20 obrażeń, wróg traci 10 zwierząt, -1 do jego lochu","20 Skade, Modstander mister 10 ædelstene, -1 modstander hule","20 Schaden, Feind verliert 10 Edelsteine, -1 feindliches Verlies","20 Dégâts, L'ennemi perd 10 gemmes, -1 Donjon ennemi",造成 20 点伤害，敌方失去 10 宝石，敌方地下城 -1
SPEARMAN,Spearman,Копейщик,Списоносець,Włócznik,Spydmand,Speerträger,Lancier Pégase,长矛兵
SPEARMAN_DESC,"If wall > enemy Wall do 3 Damage, Else do 2 Damage","Если Стена > Стены врага, то 3 урона, Иначе 2 урона","Якщо стіна > стіни ворога, то 3 шкоди, інакше 2 шкоди","Jeśli mur > muru wroga, to 3 obrażenia, w przeciwnym razie 2 obrażenia","Hvis mur > modstander mur, gør 3 Skade, ellers gør 2 Skade","Wenn Mauer > feindliche Mauer, dann 3 Schaden, sonst 2 Schaden","Si mur > mur ennemi infligez 3 Dégâts, Sinon infligez 2 Dégâts",若己方墙高于敌方墙，造成 3 点伤害；否则造成 2 点伤害
GNOME,Gnome,Гном,Гном,Krasnolud,Gnom,Gnom,Gnome,侏儒
GNOME_DESC,"3 Damage, +1 Gem","3 урона, +1 самоцвет","3 шкоди, +1 самоцвіт","3 obrażenia, +1 klejnot","3 Skade, +1 Ædelsten","3 Schaden, +1 Edelstein","3 Dégâts, +1 Gemme",造成 3 点伤害，宝石 +1
BERSERKER,Berserker,Берсеркер,Берсерк,Berserker,Berserker,Berserker,Berserker,狂战士
BERSERKER_DESC,"8 Damage, 3 Damage to your Tower","8 урона, 3 урона вашей Башне","8 шкоди, 3 шкоди вашій вежі","8 obrażeń, 3 obrażenia twojej wieży","8 Skade, 3 Skade til dit Tårn","8 Schaden, 3 Schaden an deinem Turm","8 Dégâts, 3 Dégâts à votre Tour",造成 8 点伤害，己方塔受到 3 点伤害
WARLORD,Warlord,Военачальник,Воєначальник,Wojownik,Krigsherre,Kriegsherr,Seigneur de guerre,军阀
WARLORD_DESC,"13 Damage, You lose 3 gems","13 урона, Вы теряете 3 самоцвета","13 шкоди, ви втрачаєте 3 самоцвіту","13 obrażeń, tracisz 3 klejnoty","13 Skade, Du mister 3 Ædelstene","13 Schaden, Du verlierst 3 Edelsteine","13 Dégâts, Vous perdez 3 gemmes",造成 13 点伤害，失去 3 宝石
PEGASUS_LANCER,Pegasus Lancer,Наездник на пегасе,Наїзник на пегасі,Jeździec na pegazie,Pegasus Lansener,Pegasuslanze,Lancier Pégase,飞马骑士
PEGASUS_LANCER_DESC,12 Damage to enemy tower,12 урона Башне врага,12 шкоди вежі ворога,12 obrażeń wrogiej wieży,12 Skade til modstander tårn,12 Schaden am feindlichen Turm,12 Dégâts à la tour ennemie,对敌方塔造成 12 点伤害
`,Hr=`id,en,ru,uk,pl,da,de,fr
START_GAME,Start Game,Начать игру,Почати гру,Rozpocząć grę,Nyt Spil,Spiel starten,Démarrer le jeu
SETTINGS,Settings,Настройки,Налаштування,Konfiguracja,Indstillinger,Einstellungen,Paramètres
LEADERBOARD,Leaderboard,Таблица лидеров,Таблиця лідерів,Tabela Liderów,Point Tavle,Bestenliste,Classement
CREDITS,Credits,Титры,Титр,Napis,Credits,Impressum,Crédits
EXIT,Exit,Выход,Вихід,Wyjście,Afslut,Beenden,Quitter
BRICKS,bricks,кирпичи,цегла,cegły,Byggesten,Ziegel,Briques
GEMS,gems,самоцветы,самоцвіти,klejnoty,Ædelstene,Edelsteine,Gemmes
RECRUITS,recruits,звери,звірі,rekrutów,Rekrutter,Rekruten,Recrues
COMPUTER,COMPUTER,ИИ,Штучний інтелект,Sztuczna inteligencja,Computer,COMPUTER,ORDINATEUR
WINDOW_SETTINGS,Window Settings,Настройки окна,Налаштування вікна,Ustawienia Okna,Vindue Indstillinger,Fenstereinstellungen,Paramètres de la fenêtre
SOUND_SETTINGS,Sound Settings,Настройки звука,Налаштування звуку,Ustawienia Dźwięku,Lyd Indstillinger,Toneinstellungen,Paramètres audio
STARTING_CONDITIONS,Starting Conditions,Стартовые настройки,Початкові налаштування,Ustawienia początkowe,Begyndelses Vilkår,Startbedingungen,Conditions de départ
PLAY_CONDITIONS,Play Conditions,Игровые настройки,Ігрові налаштування,Ustawienia gry,Spilleregler,Spielbedingungen,Conditions de jeu
VICTORY_CONDITIONS,Victory Conditions,Условия победы,Умови перемоги,Warunki zwycięstwa,Sejr Vilkår,Siegbedingungen,Conditions de victoire
TAVERN_PRESETS,Tavern Presets,Выбор таверны,Вибір таверни,Wybór tawerny,Kro Indstillinger,Taverne-Voreinstellungen,Préréglages de la taverne
FULLSCREEN,Fullscreen:,Полноэкранный:,Повноекранний:,Pelnoekranowy:,Fuld Skærm:,Vollbild:,Plein écran :
BORDERLESS,Borderless:,Безрамочный:,Безрамковий:,Bezramkowy:,Ingen Border:,Randlos:,Sans bordure :
WINDOW_WIDTH,Window Width:,Ширина окна:,Ширина вікна:,Szerokość okna:,Vinduesbredde:,Fensterbreite:,Largeur de la fenêtre :
WINDOW_HEIGHT,Height:,Высота:,Висота:,Wysokość:,Vindueshøjde:,Höhe:,Hauteur :
VSYNC,VSync:,VSync:,VSync:,VSync:,VSync:,VSync:,VSync :
INTRO_SKIP,Intro skip:,Пропуск интро:,Пропуск інтро:,Intro skip:,Intro Skip:,Intro überspringen:,Passer l'intro :
MASTER,Master:,Общий:,Загальний:,Generał:,Master:,Haupt:,Principal :
MUSIC,Music:,Музыка:,Музика:,Muzyka:,Musik:,Musik:,Musique :
SOUNDS,Sounds:,Звуки:,Звуки:,Dźwięk:,Lyd:,Geräusche:,Sons :
MUTE_SOUND,Mute Sound,Заглушить звук,Заглушити звук,Zagłuszyć dźwięk,Lydløs,Stummschalten,Muet
SINGLEPLAYER,Single Player,Одиночная игра,Одиночна гра,Gra pojedyncza,Singleplayer,Einzelspieler,Joueur unique
MULTIPLAYER,Multi Player,Сетевая игра,Багатокористувацька,Multiplayer,Multiplayer,Mehrspieler,Multijoueur
SINGLE_CLICK_MODE,Single Click Mode,Одиночный клик,Режим одиночного клацання,Tryb Pojedynczego Kliknięcia,Enkelt Klik Instilling,Ein-Klick-Modus,Mode à un clic
TOWER_LEVELS,Tower Levels:,Высота башни,Висота вежі:,Wysokość wieży:,Tårn Niveau:,Turmebenen:,Niveaux de la tour :
WALL_LEVELS,Wall Levels:,Высота стены,Висота стіни:,Wysokość ściany:,Mur Niveau:,Wandstufen:,Niveaux des murs :
QUARRY_LEVELS,Quarry Levels:,Карьеры,Рівні кар’єру:,Poziomy kariery:,Stenbrud Niveau:,Steinbruchstufen:,Niveaux de la carrière :
MAGIC_LEVELS,Magic Levels:,Магия,Рівні магії:,Poziomy magii:,Magi Niveau:,Magie-Ebenen:,Niveaux de magie :
DUNGEON_LEVELS,Dungeon Levels:,Темницы,Рівні підземелля:,Poziomy lochów:,Hule Niveau:,Verliesstufen:,Niveaux du donjon :
BRICK_QUANTITIES,Brick Quantities:,Кирпичи,Кількість цегли:,Ilość cegieł:,Byggesten Mængde:,Ziegelmengen:,Quantités de briques :
GEM_QUANTITIES,Gem Quantities:,Самоцветы,Кількість самоцвітів:,Ilość klejnotów:,Ædelsten Mængde:,Edelsteinmengen:,Quantités de gemmes :
RECRUIT_QUANTITIES,Recruit Quantities:,Звери,Кількість звірів:,Liczba rekrutów:,Rekrut Mængde:,Rekrutenzahlen:,Quantités de recrues :
AUTOGET_BRICKS,Auto Get Number of Bricks:,Авто получение кирпичей:,Автоматично отримати кількість цегли:,Automatycznie uzyskaj liczbę cegieł:,Auto Skaf Antal af Byggesten:,Automatisch Anzahl Ziegel erhalten:,Obtenir automatiquement le nombre de briques :
AUTOGET_GEMS,Auto Get Number of Gems:,Авто получение самоцветов:,Автоматично отримати кількість самоцвітів:,Automatycznie uzyskaj liczbę klejnotów:,Auto Skaf Antal af Ædelstene:,Automatisch Anzahl Edelsteine erhalten:,Obtenir automatiquement le nombre de gemmes :
AUTOGET_RECRUITS,Auto Get Number of Recruits:,Авто получение зверей:,Автоматично отримати кількість звірів:,Automatycznie uzyskać Ilość rekrutów:,Auto Skaf Antal af Rekrutter:,Automatisch Anzahl Rekruten erhalten:,Obtenir automatiquement le nombre de recrues :
CARDS_IN_HAND,Number of Cards in Hand:,Количество карт в руке,Кількість карт в руці:,Liczba kart w ręku:,Antal Kort i Hånden:,Anzahl der Karten in der Hand:,Nombre de cartes en main :
AI_LEVEL,Computer AI to play Against:,Стиль игры компьютера,Стиль гри комп'ютера:,Styl gry komputerowej:,Antal Computer AI modstandere:,Computer-KI zum Spielen:,IA à affronter :
AI_AUTO,Auto,Автоматический,Автоматичний,Automatyczny,Auto,Auto,Auto
AI_ATTACK,Attack,Атака,Напад,Atak,Angreb,Angriff,Attaque
AI_DEFENCE,Defence,Защита,Оборона,obronność,Forsvar,Verteidigung,Défense
AI_RANDOM,Random,Случайный,Випадковий,Przypadkowy,Random,Zufällig,Aléatoire
TOWER_VICTORY,Tower Victory:,Выстроить башню:,Перемога вежі:,Zwycięstwo wieży:,Tårn Sejr:,Turmsieg:,Victoire de la tour :
RESOURCE_VICTORY,Resource Victory:,Собрать ресурсов:,Зібрати ресурсів:,Zbierz zasoby:,Ressource Sejr:,Ressourcensieg:,Victoire des ressources :
TAVERN,Tavern:,Таверна:,Таверна:,Tawerna:,Kro:,Taverne:,Taverne :
NONE,None,Нет,Немає,Nie,Ingen:,Keine,Aucune
TAVERN_HARMONDALE,On the House,За счет заведения,У будинку,Na koszt zakładu,On the House,Auf dem Haus,Sur la maison
TAVERN_ERATHIA,Griffin's Rest,Покой грифона,Покої грифона,Odpoczynek Gryfona,Griffin's Rest,Griffins Ruhestätte,Repos du Griffon
TAVERN_TULAREAN_FOREST,Emerald Inn,Изумрудный двор,Смарагдовий двір,Szmaragdowy dziedziniec,Emerald Inn,Smaragdgaststätte,Auberge d'Émeraude
TAVERN_DEYJA,Snobbish Goblin,Снобисткий гоблин,Снобістський гоблін,Goblin Snobistyczny,Snobbish Goblin,Snobistischer Goblin,Gobelin Snob
TAVERN_TATALIA,The Loyal Mercenary,Верный наемник,Вірний найманець,Wierny najemnik,Den Trofaste Lejesoldat,Der Treue Söldner,Le Mercenaire Loyal
TAVERN_BRACADA_DESERT,Familiar Place,Знакомое местечко,Знайоме містечко,Znane miasteczko,Familiar Place,Vertrauter Ort,Lieu familier
TAVERN_CELESTE,The Blessed Brew,Благословённое варево,Благословенне вариво,Cudowny napar,The Blessed Brew,Der gesegnete Trunk,La bière bénie
TAVERN_PIT,The Vamyre Lounge,Бар Вампира,Бар Вампіра,Bar Wampirów,The Vamyre Lounge,Die Vamyre Lounge,Le salon Vamyre
TAVERN_EVERMORN_ISLAND,The Laughing Monk,Смеющийся монах,Сміюся монах,Roześmiany mnich,The Laughing Monk,Der lachende Mönch,Le Moine Rieur
TAVERN_NIGHON,Fortune's Folly,Причуды фортуны,Примхи фортуни,Dziwactwa fortuny,Fortune's Folly,Das Schicksalsspiel,La Folie de la Fortune
TAVERN_BARROW_DOWNS,Miner's Only,Шахтерская,Шахтарська,Górniczy,Miner's Only,Nur für Bergleute,Réservé aux Mineurs
TAVERN_TIDEWATER,The Loyal Mercenary,Лояльный наёмник,Лояльний найманець,Lojalny najemnik,The Loyal Mercenary,Der loyale Söldner,Le Mercenaire Loyal
TAVERN_AVLEE,The Potted Pixie,Пьяные пикси,Піксі в горщиках,Pixie w doniczkach,The Potted Pixie,Die eingetopfte Fee,La Fée en Pot
TAVERN_STONE_CITY,Grogg's Grog,Грог Грогга,Грог грогі,Grogg's Grog,Grogg's Grog,Groggs Grog,Le Grog de Grogg
TAVERN_DAGGER_WOUND_ISLAND,The Grog and Grub,Грог и Закусь,Грог і закуска,Grog i zakąska,Grog og snack,Grog und Bissen,Grog et amuse-gueule
TAVERN_RAVENSHORE_KANTINA,Kessel's Kantina,Закусочная Кесселя,Закусочна Кесселя,Kantyna Kessela,Kessels Kantine,Kessels Kantine,Cantine de Kessel
TAVERN_RAVENSHORE_OGRE,The Dancing Ogre,Танцующий Огр,Танцюючий огр,Tańczący ogr,Den Dansende Trold,Der Tanzende Oger,L'Ogre Dansant
TAVERN_GARROTE_GORGE,Dragon's Blood Inn,На Драконьей Крови,На Драконячій Крові,Na Smoczej Krwi,På Drageblodet,Zum Drachenblut,Au Sang de Dragon
TAVERN_ALVAR_MIHO,Miho's Roadhouse,Дом на Перекрестке,Дім на перехресті,Dom na rozdrożu,Huset ved Korsvejen,Haus am Scheideweg,Maison au carrefour
TAVERN_ALVAR_PROFIT,Profit House,Доходный Дом,Прибутковий дім,Dom zysków,Profit Huset,Profit-Haus,Maison du Profit
TAVERN_IRONSAND_DESERT,Parched Throat,Пересохшая глотка,Пересохле горло,Suche gardło,Tør Hals,Trockene Kehle,Gorge Sèche
TAVERN_RAVAGE_ROAMING,Bull's Eye Inn,Гостиница «Яблочко»,Готель «Влучне око»,Gospoda „Celny Strzał”,"Kroen ""Bullseye""",Gasthaus „Ins Schwarze”,"Auberge ""Dans le Mille"""
TAVERN_SHADOWSPIRE,Black Company,Черный отряд,Чорний загін,Czarna Kompania,Sorte Kompagni,Schwarze Kompanie,Compagnie Noire
TAVERN_MURMURWOODS,Traveler's Rest,Отдых путника,Відпочинок мандрівника,Odpoczynek Podróżnika,Rejsendes Hvile,Rast des Reisenden,Repos du Voyageur
TAVERN_REGNA,Pirate's Rest,Пиратский притон,Піратський притон,Piracka Nora,Piraternes Tilholdssted,Piratenunterschlupf,Repère des Pirates
RESTORE_DEFAULTS,Reset to defaults,Сбросить настройки,Повернути стандартні значення,Zwróć standardowe wartości,Nulstil Alt,Auf Standardeinstellungen zurücksetzen,Réinitialiser aux valeurs par défaut
SAVE_AND_CLOSE,Save and Close,Сохранить и закрыть,Зберегти та закрити,Zapisz i zamknij,Gem og Luk,Speichern und schließen,Enregistrer et fermer
WINNER_IS,THE WINNER IS:,ПОБЕДИЛ:,ПЕРЕМОЖЕЦЬ:,ZWYCIĘZCA:,VINDEREN ER:,DER GEWINNER IST:,LE GAGNANT EST :
TOWER_VICTORY_MSG,BY A TOWER BUILDING VICTORY!!!,СТРОИТЕЛЬСТВОМ БАШНИ,ПЕРЕМОГА БУДІВНИЦТВА ВЕЖИ !!!,WYGRAJ BUDOWĘ WIEŻY!!!,VIA TÅRN BYGGESEJR!!!,DURCH EINEN TURMBAU-SIEG!!!,PAR UNE VICTOIRE DE CONSTRUCTION DE TOUR !!!
TOWER_DESTROY_MSG,BY A TOWER DESTRUCTION VICTORY!!!,УНИЧТОЖЕНИЕМ БАШНИ,ПЕРЕМОГА ЗНИЩЕННЯ БАШТИ !!!,ZWYCIĘSTWO ZNISZCZENIA WIEŻY!!!,VIA TÅRN NEDLÆGNINGSSEJR!!!,DURCH EINEN TURMZERSTÖRUNGS-SIEG!!!,PAR UNE VICTOIRE DE DESTRUCTION DE TOUR !!!
RESOURCE_VICTORY_MSG,BY A RESOURCE VICTORY!!!,СБОРОМ РЕСУРСОВ,РЕСУРСНА ПЕРЕМОГА!!!,ZWYCIĘSTWO ZASOBÓW!!!,VIA RESSOURCESEJR!!!,DURCH EINEN RESSOURCEN-SIEG!!!,PAR UNE VICTOIRE DES RESSOURCES !!!
OPPONENT_LEFT_MSG,BECAUSE THE OPPONENT LEFT!!!,СОПЕРНИК ПОКИНУЛ МАТЧ!!!,СУПЕРНИК ЗАЛИШИВ МАТЧ!!!,PRZECIWNIK OPUŚCIŁ MECZ!!!,FORDI MODSTANDEREN FORLOD!!!,WEIL DER GEGNER VERLASSEN HAT!!!,PARCE QUE L'ADVERSAIRE EST PARTI !!!
TESTING,TESTING:,ТЕСТИРОВАНИЕ:,ТЕСТУВАННЯ:,TESTOWANIE:,TESTER:,TESTEN:,TEST :
NEXT,Next,Далее,Далі,Dalej,Næste,Weiter,Suivant
LANGUAGE_SETTINGS,Language Settings,Настройки языка,Налаштування мови,Ustawienia języka,Sprog Instillinger,Spracheneinstellungen,Paramètres de langue
LANGUAGE,Language:,Язык:,Мова:,Język:,Sprog:,Sprache:,Langue :
APPLY,Apply,Применить,Використати,Zastosować,Tilføj,Anwenden,Appliquer
TIME,TIME:,ВРЕМЯ:,ЧАС:,CZAS:,TID:,ZEIT:,TEMPS :
START_GAME_TOOLTIP,Starts a new game with the current settings.,Начинает новую игру с текущими настройками.,Начинає нову гру з актуальними настройками.,Rozpoczyna nową grę z bieżącymi ustawieniami.,Start nyt spil med nuværende indstillinger.,Startet ein neues Spiel mit den aktuellen Einstellungen.,Commence un nouveau jeu avec les paramètres actuels.
SETTINGS_TOOLTIP,Allows you to customize the rules of the game.,Позволяет настроить правила игры.,Дозволяє настроїти правила гри.,Pozwala ustalać zasady gry.,Tillader dig at rette på spillets regler.,Ermöglicht es Ihnen,die Regeln des Spiels anzupassen.
LEADERBOARD_TOOLTIP,Opens the leaderboard.,Открывает доску лидеров.,Відкриває дошку лідерів.,Otwiera tablicę liderów.,Åbner point tavle,Öffnet die Bestenliste.,Ouvre le classement.
CREDITS_TOOLTIP,Opens credits.,Открывает титры.,Відкриває титри.,Otwiera kredyty.,Åbner credits.,Öffnet das Impressum.,Ouvre les crédits.
EXIT_TOOLTIP,Quit the game.,Выйти из игры.,Вийти з гри.,Wyjdź z gry.,Afslutter spillet.,Spiel beenden.,Quitter le jeu.
WORK_IN_PROGRESS,Work in progress...,Работа в процессе...,Робота в процесі...,Praca w toku...,Under udvikling...,Arbeit in Bearbeitung...,Travail en cours...
SETTINGS_WARNING,Some settings may not be avalible or not working correctly for now.,Некоторые настройки сейчас могут быть недоступны или работать некорректно.,Деякі установки зараз можуть бути недоступні або працювати некоректно.,Niektóre ustawienia mogą być teraz niedostępne lub działać poprawnie.,Nogle indstillinger er muligvis ikke tilgængelig eller virker ikke ordenligt lige nu.,Einige Einstellungen sind möglicherweise derzeit nicht verfügbar oder funktionieren nicht korrekt.,Certaines options peuvent ne pas être disponibles ou ne pas fonctionner correctement pour le moment.
TRANSLATION_MAY_CONTAIN_ERRORS,Translation may contain errors.,Перевод может содержать ошибки.,Переклад може містити помилки.,Tłumaczenie może zawierać błędy.,Oversættelse kan indeholde fejl.,Übersetzung kann Fehler enthalten.,La traduction peut contenir des erreurs.
DISCARDED,DISCARDED,СБРОШЕНА,СКИНУТА,RESETOWANIE,Kasseret,VERWORFEN,REJETÉ
THANKS_FOR_TRANSLATION,Thanks for translation:,Спасибо за перевод:,Дякую за переклад:,Dzięki za tłumaczenie:,Tak for oversættelsen:,Danke für die Übersetzung:,Merci pour la traduction :
PLAYER_SETTINGS,Player Settings,Настройки игрока,Налаштування гравця,Ustawienia odtwarzacza,Spiller Instillinger:,Spielereinstellungen,Paramètres du joueur
NICKNAME,Nickname:,Никнейм:,Псевдонім:,Przezwisko:,Kaldenavn:,Spitzname:,Surnom :
GAME_IS_PAUSED,Game is paused,Игра на паузе,Гра на паузі,Wstrzymaj grę,Spillet er på pause,Spiel ist pausiert,Le jeu est en pause
RESUME,Resume,Продолжить,Продовжити,Przystępować,Fortsæt,Fortsetzen,Reprendre
STATS,Stats,Статистика,Статистика,Statystyka,Statistikker,Statistiken,Statistiques
MULTIPLAYER_GAME,Multiplayer Game,Мультиплеер,Мультіплеєр,Gra Wieloosobowa,Multiplayer Spil,Mehrspieler-Spiel,Jeu multijoueur
CREATE_SERVER,Create Server,Создать сервер,Створити сервер,Utwórz serwer,Lav Server,Server erstellen,Créer un serveur
JOIN_SERVER,Join Server,Присоединиться,Приєднатися,Przystąp,Deltag Server,Server beitreten,Rejoindre le serveur
ENTER_IP_ADDRESS,Enter IP Address,Введите IP адрес сервера,Введіть IP-адресу сервера,Wpisz adres IP serwera,Indtast IP Adresse,IP-Adresse eingeben,Entrez l'adresse IP
IP_ADDRESS_NOT_FOUND,IP Address not found!,IP адрес не найден!,IP адрес не знайдений!,Nie znaleziono adresu IP!,IP Adresse ikke fundet!,IP-Adresse nicht gefunden!,Adresse IP introuvable !
CANCEL,Cancel,Отмена,Відміна,Zniesienie,Afbryd,Abbrechen,Annuler
MULTIPLAYER_GAME_TOOLTIP,Opens multiplayer game creation and connection screen.,Открывает экран создания и подключения многопользовательской игры.,Відкриває екран створення і підключення багатокористувацької гри.,Otwiera ekran tworzenia i łączenia gry wieloosobowej.,Åbner multiplayer oprettelses- og forbindelsesskærm,Öffnet den Bildschirm zur Erstellung und Verbindung von Mehrspieler-Spielen.,Ouvre l'écran de création et de connexion de jeu multijoueur.
READY,Ready,Готов,Готовий,Gotowy,Klar,Bereit,Prêt
LOBBY,Lobby,Лобби,Лобі,Hol,Lobby,Vorraum,Salon
CONNECTION,Connection,Подключение,Підключення,Połączenie,Forbindelse,Verbindung,Connexion
PLAYERS,Players,Игроки,Гравці,Gracze,Spillere,Spieler,Joueurs
STATUS,Status,Статус,Статус,Status,Status,Status,Statut
NOT_READY,Not Ready,Не готов,Не готовий,Niegotowy,Ikke klar,Nicht bereit,Pas prêt
DEV_TOOLS,Developer Tools,Инструменты разработчика,Інструменти розробника,Narzędzia deweloperskie,Udviklerværktøjer,Entwicklerwerkzeuge,Outils développeur
DEV_TOOLS_TOOLTIP,Open developer tools.,Открывает инструменты разработчика.,Відкриває інструменти розробника.,Otwiera narzędzia deweloperskie.,Åbner udviklerværktøjer.,Entwicklerwerkzeuge öffnen.,Ouvrir les outils de développement.
`,Fr=`id,en,ru,uk,pl,da,de,fr
FIND_MATCH,Find Match,Найти игру,Знайти гру,Znajdź mecz,Find kamp,Partie finden,Trouver une partie
CREATE_ROOM,Create Room,Создать комнату,Створити кімнату,Utwórz pokój,Opret rum,Raum erstellen,Créer une salle
JOIN_ROOM,Join Room,Войти в комнату,Увійти в кімнату,Dołącz do pokoju,Deltag rum,Raum beitreten,Rejoindre une salle
ROOM_CODE,Room code,Код комнаты,Код кімнати,Kod pokoju,Rumkode,Raumcode,Code de salle
RANKED,Ranked,Рейтинг,Рейтинг,Ranking,Ranglistet,Rangliste,Classé
MODE_1V1,1v1,1 на 1,1 на 1,1v1,1v1,1v1,1v1
MODE_FFA,Free for all (3-4),Каждый за себя (3-4),Кожен сам за себе (3-4),Każdy na każdego (3-4),Alle mod alle (3-4),Jeder gegen jeden (3-4),Chacun pour soi (3-4)
MODE_2V2,2v2,2 на 2,2 на 2,2v2,2v2,2v2,2v2
ONLINE_CONNECTED,Online ready,Онлайн готов,Онлайн готовий,Online gotowy,Online klar,Online bereit,En ligne
ONLINE_SEARCHING,Searching for a match...,Поиск матча...,Пошук матчу...,Szukanie meczu...,Søger efter kamp...,Suche nach einer Partie...,Recherche d'une partie...
ONLINE_MATCHED,Match found,Матч найден,Матч знайдено,Znaleziono mecz,Kamp fundet,Partie gefunden,Partie trouvée
ONLINE_ROOM,Room ready,Комната готова,Кімната готова,Pokój gotowy,Raum bereit,Raum bereit,Salle prête
ONLINE_DEDICATED,Dedicated host running,Выделенный сервер запущен,Виділений сервер запущено,Serwer dedykowany działa,Dedikeret vært kører,Dedizierter Host läuft,Hôte dédié en cours
ONLINE_UNAVAILABLE,Online unavailable,Онлайн недоступен,Онлайн недоступний,Online niedostępny,Online utilgængelig,Online nicht verfügbar,Hors ligne
ONLINE_JOIN_FAILED,Could not join room,Не удалось войти в комнату,Не вдалося увійти до кімнати,Nie udało się dołączyć do pokoju,Kunne ikke deltage i rum,Raumbeitritt fehlgeschlagen,Impossible de rejoindre la salle
TAB_ONLINE,Online,Онлайн,Онлайн,Online,Online,Online,En ligne
TAB_LAN,LAN,LAN,LAN,LAN,LAN,LAN,LAN
RETRY,Retry,Повторить,Повторити,Ponów,Prøv igen,Wiederholen,Réessayer
COPY,Copy,Копировать,Копіювати,Kopiuj,Kopiér,Kopieren,Copier
COPIED,Copied,Скопировано,Скопійовано,Skopiowano,Kopieret,Kopiert,Copié
LEAVE_LOBBY,Leave,Выйти,Вийти,Wyjdź,Forlad,Verlassen,Quitter
YOUR_LAN_ADDRESS,Your address,Ваш адрес,Ваша адреса,Twój adres,Din adresse,Deine Adresse,Votre adresse
WAITING_FOR_PLAYERS,Waiting for players...,Ожидание игроков...,Очікування гравців...,Oczekiwanie na graczy...,Venter på spillere...,Warten auf Spieler...,En attente de joueurs...
PLAYER_LEFT,A player left the room,Игрок вышел из комнаты,Гравець вийшов з кімнати,Gracz opuścił pokój,En spiller forlod rummet,Ein Spieler hat den Raum verlassen,Un joueur a quitté la salle
CHAT_PLACEHOLDER,Chat...,Чат...,Чат...,Czat...,Chat...,Chat...,Chat...
`,xr=`name: Classic Taverns I
description: Classic tavern presets, volume one
taverns:
  - id: TAVERN_TULAREAN_FOREST
    name: "Emerald Inn"
    startingTower: 20
    startingWall: 5
    startingQuarry: 2
    startingMagic: 2
    startingDungeon: 2
    startingBricks: 5
    startingGems: 5
    startingBeasts: 5
    winningTower: 50
    winningResources: 150
  - id: TAVERN_ERATHIA
    name: "Griffin's Rest"
    startingTower: 20
    startingWall: 5
    startingQuarry: 2
    startingMagic: 2
    startingDungeon: 2
    startingBricks: 5
    startingGems: 5
    startingBeasts: 5
    winningTower: 50
    winningResources: 100
  - id: TAVERN_HARMONDALE
    name: "On the House"
    startingTower: 15
    startingWall: 5
    startingQuarry: 2
    startingMagic: 2
    startingDungeon: 2
    startingBricks: 10
    startingGems: 10
    startingBeasts: 10
    winningTower: 30
    winningResources: 100
  - id: TAVERN_AVLEE
    name: "The Potted Pixie"
    startingTower: 10
    startingWall: 20
    startingQuarry: 3
    startingMagic: 1
    startingDungeon: 2
    startingBricks: 15
    startingGems: 5
    startingBeasts: 10
    winningTower: 125
    winningResources: 350
  - id: TAVERN_DEYJA
    name: "Snobbish Goblin"
    startingTower: 25
    startingWall: 10
    startingQuarry: 3
    startingMagic: 3
    startingDungeon: 3
    startingBricks: 5
    startingGems: 5
    startingBeasts: 5
    winningTower: 75
    winningResources: 200
  - id: TAVERN_TATALIA
    name: "The Loyal Mercenary"
    startingTower: 10
    startingWall: 20
    startingQuarry: 3
    startingMagic: 1
    startingDungeon: 2
    startingBricks: 15
    startingGems: 5
    startingBeasts: 10
    winningTower: 125
    winningResources: 350
  - id: TAVERN_BRACADA_DESERT
    name: "Familiar Place"
    startingTower: 20
    startingWall: 10
    startingQuarry: 3
    startingMagic: 3
    startingDungeon: 3
    startingBricks: 5
    startingGems: 5
    startingBeasts: 5
    winningTower: 75
    winningResources: 200
  - id: TAVERN_BARROW_DOWNS
    name: "Miner's Only"
    startingTower: 20
    startingWall: 50
    startingQuarry: 1
    startingMagic: 1
    startingDungeon: 5
    startingBricks: 5
    startingGems: 5
    startingBeasts: 25
    winningTower: 100
    winningResources: 300
  - id: TAVERN_STONE_CITY
    name: "Grogg's Grog"
    startingTower: 50
    startingWall: 50
    startingQuarry: 5
    startingMagic: 3
    startingDungeon: 5
    startingBricks: 20
    startingGems: 10
    startingBeasts: 20
    winningTower: 100
    winningResources: 300
  - id: TAVERN_EVERMORN_ISLAND
    name: "The Laughing Monk"
    startingTower: 20
    startingWall: 10
    startingQuarry: 5
    startingMagic: 5
    startingDungeon: 5
    startingBricks: 25
    startingGems: 25
    startingBeasts: 25
    winningTower: 150
    winningResources: 400
  - id: TAVERN_CELESTE
    name: "The Blessed Brew"
    startingTower: 30
    startingWall: 15
    startingQuarry: 4
    startingMagic: 4
    startingDungeon: 4
    startingBricks: 10
    startingGems: 10
    startingBeasts: 10
    winningTower: 100
    winningResources: 300
  - id: TAVERN_NIGHON
    name: "Fortune's Folly"
    startingTower: 20
    startingWall: 10
    startingQuarry: 1
    startingMagic: 1
    startingDungeon: 1
    startingBricks: 15
    startingGems: 15
    startingBeasts: 15
    winningTower: 200
    winningResources: 500
  - id: TAVERN_PIT
    name: "The Vamyre Lounge"
    startingTower: 30
    startingWall: 15
    startingQuarry: 4
    startingMagic: 4
    startingDungeon: 4
    startingBricks: 10
    startingGems: 10
    startingBeasts: 10
    winningTower: 100
    winningResources: 300`,jr=`name: Classic Taverns II
description: Classic tavern presets, volume two
taverns:
  - id: TAVERN_DAGGER_WOUND_ISLAND
    name: "The Grog and Grub"
    startingTower: 15
    startingWall: 5
    startingQuarry: 2
    startingMagic: 2
    startingDungeon: 2
    startingBricks: 10
    startingGems: 10
    startingBeasts: 10
    winningTower: 30
    winningResources: 100
  - id: TAVERN_RAVENSHORE_KANTINA
    name: "Kessel's Kantina"
    startingTower: 20
    startingWall: 5
    startingQuarry: 2
    startingMagic: 2
    startingDungeon: 2
    startingBricks: 5
    startingGems: 5
    startingBeasts: 5
    winningTower: 50
    winningResources: 150
  - id: TAVERN_RAVENSHORE_OGRE
    name: "The Dancing Ogre"
    startingTower: 20
    startingWall: 50
    startingQuarry: 1
    startingMagic: 1
    startingDungeon: 5
    startingBricks: 5
    startingGems: 5
    startingBeasts: 25
    winningTower: 100
    winningResources: 300
  - id: TAVERN_GARROTE_GORGE
    name: "Dragon's Blood Inn"
    startingTower: 25
    startingWall: 10
    startingQuarry: 3
    startingMagic: 3
    startingDungeon: 3
    startingBricks: 5
    startingGems: 5
    startingBeasts: 5
    winningTower: 75
    winningResources: 200
  - id: TAVERN_ALVAR_MIHO
    name: "Miho's Roadhouse"
    startingTower: 10
    startingWall: 20
    startingQuarry: 3
    startingMagic: 1
    startingDungeon: 2
    startingBricks: 15
    startingGems: 5
    startingBeasts: 10
    winningTower: 125
    winningResources: 350
  - id: TAVERN_ALVAR_PROFIT
    name: "Profit House"
    startingTower: 20
    startingWall: 5
    startingQuarry: 2
    startingMagic: 2
    startingDungeon: 2
    startingBricks: 5
    startingGems: 5
    startingBeasts: 5
    winningTower: 50
    winningResources: 150
  - id: TAVERN_IRONSAND_DESERT
    name: "Parched Throat"
    startingTower: 25
    startingWall: 10
    startingQuarry: 3
    startingMagic: 3
    startingDungeon: 3
    startingBricks: 5
    startingGems: 5
    startingBeasts: 5
    winningTower: 75
    winningResources: 200
  - id: TAVERN_RAVAGE_ROAMING
    name: "Bull's Eye Inn"
    startingTower: 20
    startingWall: 10
    startingQuarry: 5
    startingMagic: 5
    startingDungeon: 5
    startingBricks: 25
    startingGems: 25
    startingBeasts: 25
    winningTower: 150
    winningResources: 400
  - id: TAVERN_SHADOWSPIRE
    name: "Black Company"
    startingTower: 30
    startingWall: 15
    startingQuarry: 4
    startingMagic: 4
    startingDungeon: 4
    startingBricks: 10
    startingGems: 10
    startingBeasts: 10
    winningTower: 100
    winningResources: 300
  - id: TAVERN_MURMURWOODS
    name: "Traveler's Rest"
    startingTower: 30
    startingWall: 15
    startingQuarry: 4
    startingMagic: 4
    startingDungeon: 4
    startingBricks: 10
    startingGems: 10
    startingBeasts: 10
    winningTower: 100
    winningResources: 300
  - id: TAVERN_REGNA
    name: "Pirate's Rest"
    startingTower: 20
    startingWall: 10
    startingQuarry: 1
    startingMagic: 1
    startingDungeon: 1
    startingBricks: 15
    startingGems: 15
    startingBeasts: 15
    winningTower: 200
    winningResources: 500`,es=Symbol.for("yaml.alias"),Hn=Symbol.for("yaml.document"),nt=Symbol.for("yaml.map"),ni=Symbol.for("yaml.pair"),He=Symbol.for("yaml.scalar"),It=Symbol.for("yaml.seq"),Me=Symbol.for("yaml.node.type"),Rt=s=>!!s&&typeof s=="object"&&s[Me]===es,gn=s=>!!s&&typeof s=="object"&&s[Me]===Hn,Ft=s=>!!s&&typeof s=="object"&&s[Me]===nt,ge=s=>!!s&&typeof s=="object"&&s[Me]===ni,re=s=>!!s&&typeof s=="object"&&s[Me]===He,xt=s=>!!s&&typeof s=="object"&&s[Me]===It;function fe(s){if(s&&typeof s=="object")switch(s[Me]){case nt:case It:return!0}return!1}function pe(s){if(s&&typeof s=="object")switch(s[Me]){case es:case nt:case He:case It:return!0}return!1}const si=s=>(re(s)||fe(s))&&!!s.anchor,rt=Symbol("break visit"),qr=Symbol("skip children"),Gt=Symbol("remove node");function vt(s,e){const t=Yr(e);gn(s)?yt(null,s.contents,t,Object.freeze([s]))===Gt&&(s.contents=null):yt(null,s,t,Object.freeze([]))}vt.BREAK=rt;vt.SKIP=qr;vt.REMOVE=Gt;function yt(s,e,t,n){const i=Qr(s,e,t,n);if(pe(i)||ge(i))return Jr(s,n,i),yt(s,i,t,n);if(typeof i!="symbol"){if(fe(e)){n=Object.freeze(n.concat(e));for(let r=0;r<e.items.length;++r){const a=yt(r,e.items[r],t,n);if(typeof a=="number")r=a-1;else{if(a===rt)return rt;a===Gt&&(e.items.splice(r,1),r-=1)}}}else if(ge(e)){n=Object.freeze(n.concat(e));const r=yt("key",e.key,t,n);if(r===rt)return rt;r===Gt&&(e.key=null);const a=yt("value",e.value,t,n);if(a===rt)return rt;a===Gt&&(e.value=null)}}return i}function Yr(s){return typeof s=="object"&&(s.Collection||s.Node||s.Value)?Object.assign({Alias:s.Node,Map:s.Node,Scalar:s.Node,Seq:s.Node},s.Value&&{Map:s.Value,Scalar:s.Value,Seq:s.Value},s.Collection&&{Map:s.Collection,Seq:s.Collection},s):s}function Qr(s,e,t,n){if(typeof t=="function")return t(s,e,n);if(Ft(e))return t.Map?.(s,e,n);if(xt(e))return t.Seq?.(s,e,n);if(ge(e))return t.Pair?.(s,e,n);if(re(e))return t.Scalar?.(s,e,n);if(Rt(e))return t.Alias?.(s,e,n)}function Jr(s,e,t){const n=e[e.length-1];if(fe(n))n.items[s]=t;else if(ge(n))s==="key"?n.key=t:n.value=t;else if(gn(n))n.contents=t;else{const i=Rt(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${i} parent`)}}const Zr={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Xr=s=>s.replace(/[!,[\]{}]/g,e=>Zr[e]);class Re{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Re.defaultYaml,e),this.tags=Object.assign({},Re.defaultTags,t)}clone(){const e=new Re(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new Re(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Re.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Re.defaultTags);break}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:Re.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Re.defaultTags),this.atNextDocument=!1);const n=e.trim().split(/[ \t]+/),i=n.shift();switch(i){case"%TAG":{if(n.length!==2&&(t(0,"%TAG directive should contain exactly two parts"),n.length<2))return!1;const[r,a]=n;return this.tags[r]=a,!0}case"%YAML":{if(this.yaml.explicit=!0,n.length!==1)return t(0,"%YAML directive should contain exactly one part"),!1;const[r]=n;if(r==="1.1"||r==="1.2")return this.yaml.version=r,!0;{const a=/^\d+\.\d+$/.test(r);return t(6,`Unsupported YAML version ${r}`,a),!1}}default:return t(0,`Unknown directive ${i}`,!0),!1}}tagName(e,t){if(e==="!")return"!";if(e[0]!=="!")return t(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const a=e.slice(2,-1);return a==="!"||a==="!!"?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&t("Verbatim tags must end with a >"),a)}const[,n,i]=e.match(/^(.*!)([^!]*)$/s);i||t(`The ${e} tag has no suffix`);const r=this.tags[n];if(r)try{return r+decodeURIComponent(i)}catch(a){return t(String(a)),null}return n==="!"?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,n]of Object.entries(this.tags))if(e.startsWith(n))return t+Xr(e.substring(n.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],n=Object.entries(this.tags);let i;if(e&&n.length>0&&pe(e.contents)){const r={};vt(e.contents,(a,o)=>{pe(o)&&o.tag&&(r[o.tag]=!0)}),i=Object.keys(r)}else i=[];for(const[r,a]of n)r==="!!"&&a==="tag:yaml.org,2002:"||(!e||i.some(o=>o.startsWith(a)))&&t.push(`%TAG ${r} ${a}`);return t.join(`
`)}}Re.defaultYaml={explicit:!1,version:"1.2"};Re.defaultTags={"!!":"tag:yaml.org,2002:"};function ii(s){if(/[\x00-\x19\s,[\]{}]/.test(s)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(s)}`;throw new Error(t)}return!0}function ri(s){const e=new Set;return vt(s,{Value(t,n){n.anchor&&e.add(n.anchor)}}),e}function ai(s,e){for(let t=1;;++t){const n=`${s}${t}`;if(!e.has(n))return n}}function ea(s,e){const t=[],n=new Map;let i=null;return{onAnchor:r=>{t.push(r),i??(i=ri(s));const a=ai(e,i);return i.add(a),a},setAnchors:()=>{for(const r of t){const a=n.get(r);if(typeof a=="object"&&a.anchor&&(re(a.node)||fe(a.node)))a.node.anchor=a.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=r,o}}},sourceObjects:n}}function _t(s,e,t,n){if(n&&typeof n=="object")if(Array.isArray(n))for(let i=0,r=n.length;i<r;++i){const a=n[i],o=_t(s,n,String(i),a);o===void 0?delete n[i]:o!==a&&(n[i]=o)}else if(n instanceof Map)for(const i of Array.from(n.keys())){const r=n.get(i),a=_t(s,n,i,r);a===void 0?n.delete(i):a!==r&&n.set(i,a)}else if(n instanceof Set)for(const i of Array.from(n)){const r=_t(s,n,i,i);r===void 0?n.delete(i):r!==i&&(n.delete(i),n.add(r))}else for(const[i,r]of Object.entries(n)){const a=_t(s,n,i,r);a===void 0?delete n[i]:a!==r&&(n[i]=a)}return s.call(e,t,n)}function Oe(s,e,t){if(Array.isArray(s))return s.map((n,i)=>Oe(n,String(i),t));if(s&&typeof s.toJSON=="function"){if(!t||!si(s))return s.toJSON(e,t);const n={aliasCount:0,count:1,res:void 0};t.anchors.set(s,n),t.onCreate=r=>{n.res=r,delete t.onCreate};const i=s.toJSON(e,t);return t.onCreate&&t.onCreate(i),i}return typeof s=="bigint"&&!t?.keep?Number(s):s}class ts{constructor(e){Object.defineProperty(this,Me,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:n,onAnchor:i,reviver:r}={}){if(!gn(e))throw new TypeError("A document argument is required");const a={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof n=="number"?n:100},o=Oe(this,"",a);if(typeof i=="function")for(const{count:l,res:c}of a.anchors.values())i(c,l);return typeof r=="function"?_t(r,{"":o},"",o):o}}class ns extends ts{constructor(e){super(es),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){if(t?.maxAliasCount===0)throw new ReferenceError("Alias resolution is disabled");let n;t?.aliasResolveCache?n=t.aliasResolveCache:(n=[],vt(e,{Node:(r,a)=>{(Rt(a)||si(a))&&n.push(a)}}),t&&(t.aliasResolveCache=n));let i;for(const r of n){if(r===this)break;r.anchor===this.source&&(i=r)}return i}toJSON(e,t){if(!t)return{source:this.source};const{anchors:n,doc:i,maxAliasCount:r}=t,a=this.resolve(i,t);if(!a){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let o=n.get(a);if(o||(Oe(a,null,t),o=n.get(a)),o?.res===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(r>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=tn(i,a,n)),o.count*o.aliasCount>r)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return o.res}toString(e,t,n){const i=`*${this.source}`;if(e){if(ii(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const r=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(r)}if(e.implicitKey)return`${i} `}return i}}function tn(s,e,t){if(Rt(e)){const n=e.resolve(s),i=t&&n&&t.get(n);return i?i.count*i.aliasCount:0}else if(fe(e)){let n=0;for(const i of e.items){const r=tn(s,i,t);r>n&&(n=r)}return n}else if(ge(e)){const n=tn(s,e.key,t),i=tn(s,e.value,t);return Math.max(n,i)}return 1}const oi=s=>!s||typeof s!="function"&&typeof s!="object";class H extends ts{constructor(e){super(He),this.value=e}toJSON(e,t){return t?.keep?this.value:Oe(this.value,e,t)}toString(){return String(this.value)}}H.BLOCK_FOLDED="BLOCK_FOLDED";H.BLOCK_LITERAL="BLOCK_LITERAL";H.PLAIN="PLAIN";H.QUOTE_DOUBLE="QUOTE_DOUBLE";H.QUOTE_SINGLE="QUOTE_SINGLE";const ta="tag:yaml.org,2002:";function na(s,e,t){if(e){const n=t.filter(r=>r.tag===e),i=n.find(r=>!r.format)??n[0];if(!i)throw new Error(`Tag ${e} not found`);return i}return t.find(n=>n.identify?.(s)&&!n.format)}function zt(s,e,t){if(gn(s)&&(s=s.contents),pe(s))return s;if(ge(s)){const d=t.schema[nt].createNode?.(t.schema,null,t);return d.items.push(s),d}(s instanceof String||s instanceof Number||s instanceof Boolean||typeof BigInt<"u"&&s instanceof BigInt)&&(s=s.valueOf());const{aliasDuplicateObjects:n,onAnchor:i,onTagObj:r,schema:a,sourceObjects:o}=t;let l;if(n&&s&&typeof s=="object"){if(l=o.get(s),l)return l.anchor??(l.anchor=i(s)),new ns(l.anchor);l={anchor:null,node:null},o.set(s,l)}e?.startsWith("!!")&&(e=ta+e.slice(2));let c=na(s,e,a.tags);if(!c){if(s&&typeof s.toJSON=="function"&&(s=s.toJSON()),!s||typeof s!="object"){const d=new H(s);return l&&(l.node=d),d}c=s instanceof Map?a[nt]:Symbol.iterator in Object(s)?a[It]:a[nt]}r&&(r(c),delete t.onTagObj);const h=c?.createNode?c.createNode(t.schema,s,t):typeof c?.nodeClass?.from=="function"?c.nodeClass.from(t.schema,s,t):new H(s);return e?h.tag=e:c.default||(h.tag=c.tag),l&&(l.node=h),h}function cn(s,e,t){let n=t;for(let i=e.length-1;i>=0;--i){const r=e[i];if(typeof r=="number"&&Number.isInteger(r)&&r>=0){const a=[];a[r]=n,n=a}else n=new Map([[r,n]])}return zt(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:s,sourceObjects:new Map})}const Wt=s=>s==null||typeof s=="object"&&!!s[Symbol.iterator]().next().done;class li extends ts{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(n=>pe(n)||ge(n)?n.clone(e):n),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(Wt(e))this.add(t);else{const[n,...i]=e,r=this.get(n,!0);if(fe(r))r.addIn(i,t);else if(r===void 0&&this.schema)this.set(n,cn(this.schema,i,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${i}`)}}deleteIn(e){const[t,...n]=e;if(n.length===0)return this.delete(t);const i=this.get(t,!0);if(fe(i))return i.deleteIn(n);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)}getIn(e,t){const[n,...i]=e,r=this.get(n,!0);return i.length===0?!t&&re(r)?r.value:r:fe(r)?r.getIn(i,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!ge(t))return!1;const n=t.value;return n==null||e&&re(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){const[t,...n]=e;if(n.length===0)return this.has(t);const i=this.get(t,!0);return fe(i)?i.hasIn(n):!1}setIn(e,t){const[n,...i]=e;if(i.length===0)this.set(n,t);else{const r=this.get(n,!0);if(fe(r))r.setIn(i,t);else if(r===void 0&&this.schema)this.set(n,cn(this.schema,i,t));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${i}`)}}}const sa=s=>s.replace(/^(?!$)(?: $)?/gm,"#");function Je(s,e){return/^\n+$/.test(s)?s.substring(1):e?s.replace(/^(?! *$)/gm,e):s}const at=(s,e,t)=>s.endsWith(`
`)?Je(t,e):t.includes(`
`)?`
`+Je(t,e):(s.endsWith(" ")?"":" ")+t,ci="flow",Fn="block",nn="quoted";function mn(s,e,t="flow",{indentAtStart:n,lineWidth:i=80,minContentWidth:r=20,onFold:a,onOverflow:o}={}){if(!i||i<0)return s;i<r&&(r=0);const l=Math.max(1+r,1+i-e.length);if(s.length<=l)return s;const c=[],h={};let d=i-e.length;typeof n=="number"&&(n>i-Math.max(2,r)?c.push(0):d=i-n);let p,w,E=!1,y=-1,T=-1,N=-1;t===Fn&&(y=bs(s,y,e.length),y!==-1&&(d=y+l));for(let O;O=s[y+=1];){if(t===nn&&O==="\\"){switch(T=y,s[y+1]){case"x":y+=3;break;case"u":y+=5;break;case"U":y+=9;break;default:y+=1}N=y}if(O===`
`)t===Fn&&(y=bs(s,y,e.length)),d=y+e.length+l,p=void 0;else{if(O===" "&&w&&w!==" "&&w!==`
`&&w!=="	"){const M=s[y+1];M&&M!==" "&&M!==`
`&&M!=="	"&&(p=y)}if(y>=d)if(p)c.push(p),d=p+l,p=void 0;else if(t===nn){for(;w===" "||w==="	";)w=O,O=s[y+=1],E=!0;const M=y>N+1?y-2:T-1;if(h[M])return s;c.push(M),h[M]=!0,d=M+l,p=void 0}else E=!0}w=O}if(E&&o&&o(),c.length===0)return s;a&&a();let D=s.slice(0,c[0]);for(let O=0;O<c.length;++O){const M=c[O],G=c[O+1]||s.length;M===0?D=`
${e}${s.slice(0,G)}`:(t===nn&&h[M]&&(D+=`${s[M]}\\`),D+=`
${e}${s.slice(M+1,G)}`)}return D}function bs(s,e,t){let n=e,i=e+1,r=s[i];for(;r===" "||r==="	";)if(e<i+t)r=s[++e];else{do r=s[++e];while(r&&r!==`
`);n=e,i=e+1,r=s[i]}return n}const yn=(s,e)=>({indentAtStart:e?s.indent.length:s.indentAtStart,lineWidth:s.options.lineWidth,minContentWidth:s.options.minContentWidth}),_n=s=>/^(%|---|\.\.\.)/m.test(s);function ia(s,e,t){if(!e||e<0)return!1;const n=e-t,i=s.length;if(i<=n)return!1;for(let r=0,a=0;r<i;++r)if(s[r]===`
`){if(r-a>n)return!0;if(a=r+1,i-a<=n)return!1}return!0}function Bt(s,e){const t=JSON.stringify(s);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:n}=e,i=e.options.doubleQuotedMinMultiLineLength,r=e.indent||(_n(s)?"  ":"");let a="",o=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(a+=t.slice(o,l)+"\\ ",l+=1,o=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{a+=t.slice(o,l);const h=t.substr(l+2,4);switch(h){case"0000":a+="\\0";break;case"0007":a+="\\a";break;case"000b":a+="\\v";break;case"001b":a+="\\e";break;case"0085":a+="\\N";break;case"00a0":a+="\\_";break;case"2028":a+="\\L";break;case"2029":a+="\\P";break;default:h.substr(0,2)==="00"?a+="\\x"+h.substr(2):a+=t.substr(l,6)}l+=5,o=l+1}break;case"n":if(n||t[l+2]==='"'||t.length<i)l+=1;else{for(a+=t.slice(o,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)a+=`
`,l+=2;a+=r,t[l+2]===" "&&(a+="\\"),l+=1,o=l+1}break;default:l+=1}return a=o?a+t.slice(o):t,n?a:mn(a,r,nn,yn(e,!1))}function xn(s,e){if(e.options.singleQuote===!1||e.implicitKey&&s.includes(`
`)||/[ \t]\n|\n[ \t]/.test(s))return Bt(s,e);const t=e.indent||(_n(s)?"  ":""),n="'"+s.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?n:mn(n,t,ci,yn(e,!1))}function wt(s,e){const{singleQuote:t}=e.options;let n;if(t===!1)n=Bt;else{const i=s.includes('"'),r=s.includes("'");i&&!r?n=xn:r&&!i?n=Bt:n=t?xn:Bt}return n(s,e)}let jn;try{jn=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{jn=/\n+(?!\n|$)/g}function sn({comment:s,type:e,value:t},n,i,r){const{blockQuote:a,commentString:o,lineWidth:l}=n.options;if(!a||/\n[\t ]+$/.test(t))return wt(t,n);const c=n.indent||(n.forceBlockIndent||_n(t)?"  ":""),h=a==="literal"?!0:a==="folded"||e===H.BLOCK_FOLDED?!1:e===H.BLOCK_LITERAL?!0:!ia(t,l,c.length);if(!t)return h?`|
`:`>
`;let d,p;for(p=t.length;p>0;--p){const G=t[p-1];if(G!==`
`&&G!=="	"&&G!==" ")break}let w=t.substring(p);const E=w.indexOf(`
`);E===-1?d="-":t===w||E!==w.length-1?(d="+",r&&r()):d="",w&&(t=t.slice(0,-w.length),w[w.length-1]===`
`&&(w=w.slice(0,-1)),w=w.replace(jn,`$&${c}`));let y=!1,T,N=-1;for(T=0;T<t.length;++T){const G=t[T];if(G===" ")y=!0;else if(G===`
`)N=T;else break}let D=t.substring(0,N<T?N+1:T);D&&(t=t.substring(D.length),D=D.replace(/\n+/g,`$&${c}`));let M=(y?c?"2":"1":"")+d;if(s&&(M+=" "+o(s.replace(/ ?[\r\n]+/g," ")),i&&i()),!h){const G=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let L=!1;const W=yn(n,!0);a!=="folded"&&e!==H.BLOCK_FOLDED&&(W.onOverflow=()=>{L=!0});const u=mn(`${D}${G}${w}`,c,Fn,W);if(!L)return`>${M}
${c}${u}`}return t=t.replace(/\n+/g,`$&${c}`),`|${M}
${c}${D}${t}${w}`}function ra(s,e,t,n){const{type:i,value:r}=s,{actualString:a,implicitKey:o,indent:l,indentStep:c,inFlow:h}=e;if(o&&r.includes(`
`)||h&&/[[\]{},]/.test(r))return wt(r,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))return o||h||!r.includes(`
`)?wt(r,e):sn(s,e,t,n);if(!o&&!h&&i!==H.PLAIN&&r.includes(`
`))return sn(s,e,t,n);if(_n(r)){if(l==="")return e.forceBlockIndent=!0,sn(s,e,t,n);if(o&&l===c)return wt(r,e)}const d=r.replace(/\n+/g,`$&
${l}`);if(a){const p=y=>y.default&&y.tag!=="tag:yaml.org,2002:str"&&y.test?.test(d),{compat:w,tags:E}=e.doc.schema;if(E.some(p)||w?.some(p))return wt(r,e)}return o?d:mn(d,l,ci,yn(e,!1))}function ss(s,e,t,n){const{implicitKey:i,inFlow:r}=e,a=typeof s.value=="string"?s:Object.assign({},s,{value:String(s.value)});let{type:o}=s;o!==H.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value)&&(o=H.QUOTE_DOUBLE);const l=h=>{switch(h){case H.BLOCK_FOLDED:case H.BLOCK_LITERAL:return i||r?wt(a.value,e):sn(a,e,t,n);case H.QUOTE_DOUBLE:return Bt(a.value,e);case H.QUOTE_SINGLE:return xn(a.value,e);case H.PLAIN:return ra(a,e,t,n);default:return null}};let c=l(o);if(c===null){const{defaultKeyType:h,defaultStringType:d}=e.options,p=i&&h||d;if(c=l(p),c===null)throw new Error(`Unsupported default string type ${p}`)}return c}function ui(s,e){const t=Object.assign({blockQuote:!0,commentString:sa,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},s.schema.toStringOptions,e);let n;switch(t.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:s,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:n,options:t}}function aa(s,e){if(e.tag){const i=s.filter(r=>r.tag===e.tag);if(i.length>0)return i.find(r=>r.format===e.format)??i[0]}let t,n;if(re(e)){n=e.value;let i=s.filter(r=>r.identify?.(n));if(i.length>1){const r=i.filter(a=>a.test);r.length>0&&(i=r)}t=i.find(r=>r.format===e.format)??i.find(r=>!r.format)}else n=e,t=s.find(i=>i.nodeClass&&n instanceof i.nodeClass);if(!t){const i=n?.constructor?.name??(n===null?"null":typeof n);throw new Error(`Tag not resolved for ${i} value`)}return t}function oa(s,e,{anchors:t,doc:n}){if(!n.directives)return"";const i=[],r=(re(s)||fe(s))&&s.anchor;r&&ii(r)&&(t.add(r),i.push(`&${r}`));const a=s.tag??(e.default?null:e.tag);return a&&i.push(n.directives.tagString(a)),i.join(" ")}function bt(s,e,t,n){if(ge(s))return s.toString(e,t,n);if(Rt(s)){if(e.doc.directives)return s.toString(e);if(e.resolvedAliases?.has(s))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(s):e.resolvedAliases=new Set([s]),s=s.resolve(e.doc)}let i;const r=pe(s)?s:e.doc.createNode(s,{onTagObj:l=>i=l});i??(i=aa(e.doc.schema.tags,r));const a=oa(r,i,e);a.length>0&&(e.indentAtStart=(e.indentAtStart??0)+a.length+1);const o=typeof i.stringify=="function"?i.stringify(r,e,t,n):re(r)?ss(r,e,t,n):r.toString(e,t,n);return a?re(r)||o[0]==="{"||o[0]==="["?`${a} ${o}`:`${a}
${e.indent}${o}`:o}function la({key:s,value:e},t,n,i){const{allNullValues:r,doc:a,indent:o,indentStep:l,options:{commentString:c,indentSeq:h,simpleKeys:d}}=t;let p=pe(s)&&s.comment||null;if(d){if(p)throw new Error("With simple keys, key nodes cannot have comments");if(fe(s)||!pe(s)&&typeof s=="object"){const W="With simple keys, collection cannot be used as a key value";throw new Error(W)}}let w=!d&&(!s||p&&e==null&&!t.inFlow||fe(s)||(re(s)?s.type===H.BLOCK_FOLDED||s.type===H.BLOCK_LITERAL:typeof s=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!w&&(d||!r),indent:o+l});let E=!1,y=!1,T=bt(s,t,()=>E=!0,()=>y=!0);if(!w&&!t.inFlow&&T.length>1024){if(d)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");w=!0}if(t.inFlow){if(r||e==null)return E&&n&&n(),T===""?"?":w?`? ${T}`:T}else if(r&&!d||e==null&&w)return T=`? ${T}`,p&&!E?T+=at(T,t.indent,c(p)):y&&i&&i(),T;E&&(p=null),w?(p&&(T+=at(T,t.indent,c(p))),T=`? ${T}
${o}:`):(T=`${T}:`,p&&(T+=at(T,t.indent,c(p))));let N,D,O;pe(e)?(N=!!e.spaceBefore,D=e.commentBefore,O=e.comment):(N=!1,D=null,O=null,e&&typeof e=="object"&&(e=a.createNode(e))),t.implicitKey=!1,!w&&!p&&re(e)&&(t.indentAtStart=T.length+1),y=!1,!h&&l.length>=2&&!t.inFlow&&!w&&xt(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let M=!1;const G=bt(e,t,()=>M=!0,()=>y=!0);let L=" ";if(p||N||D){if(L=N?`
`:"",D){const W=c(D);L+=`
${Je(W,t.indent)}`}G===""&&!t.inFlow?L===`
`&&O&&(L=`

`):L+=`
${t.indent}`}else if(!w&&fe(e)){const W=G[0],u=G.indexOf(`
`),f=u!==-1,S=t.inFlow??e.flow??e.items.length===0;if(f||!S){let R=!1;if(f&&(W==="&"||W==="!")){let b=G.indexOf(" ");W==="&"&&b!==-1&&b<u&&G[b+1]==="!"&&(b=G.indexOf(" ",b+1)),(b===-1||u<b)&&(R=!0)}R||(L=`
${t.indent}`)}}else(G===""||G[0]===`
`)&&(L="");return T+=L+G,t.inFlow?M&&n&&n():O&&!M?T+=at(T,t.indent,c(O)):y&&i&&i(),T}function di(s,e){(s==="debug"||s==="warn")&&console.warn(e)}const Yt="<<",Ze={identify:s=>s===Yt||typeof s=="symbol"&&s.description===Yt,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new H(Symbol(Yt)),{addToJSMap:hi}),stringify:()=>Yt},ca=(s,e)=>(Ze.identify(e)||re(e)&&(!e.type||e.type===H.PLAIN)&&Ze.identify(e.value))&&s?.doc.schema.tags.some(t=>t.tag===Ze.tag&&t.default);function hi(s,e,t){const n=fi(s,t);if(xt(n))for(const i of n.items)Dn(s,e,i);else if(Array.isArray(n))for(const i of n)Dn(s,e,i);else Dn(s,e,n)}function Dn(s,e,t){const n=fi(s,t);if(!Ft(n))throw new Error("Merge sources must be maps or map aliases");const i=n.toJSON(null,s,Map);for(const[r,a]of i)e instanceof Map?e.has(r)||e.set(r,a):e instanceof Set?e.add(r):Object.prototype.hasOwnProperty.call(e,r)||Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0});return e}function fi(s,e){return s&&Rt(e)?e.resolve(s.doc,s):e}function pi(s,e,{key:t,value:n}){if(pe(t)&&t.addToJSMap)t.addToJSMap(s,e,n);else if(ca(s,t))hi(s,e,n);else{const i=Oe(t,"",s);if(e instanceof Map)e.set(i,Oe(n,i,s));else if(e instanceof Set)e.add(i);else{const r=ua(t,i,s),a=Oe(n,r,s);r in e?Object.defineProperty(e,r,{value:a,writable:!0,enumerable:!0,configurable:!0}):e[r]=a}}return e}function ua(s,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(pe(s)&&t?.doc){const n=ui(t.doc,{});n.anchors=new Set;for(const r of t.anchors.keys())n.anchors.add(r.anchor);n.inFlow=!0,n.inStringifyKey=!0;const i=s.toString(n);if(!t.mapKeyWarned){let r=JSON.stringify(i);r.length>40&&(r=r.substring(0,36)+'..."'),di(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return i}return JSON.stringify(e)}function is(s,e,t){const n=zt(s,void 0,t),i=zt(e,void 0,t);return new ve(n,i)}class ve{constructor(e,t=null){Object.defineProperty(this,Me,{value:ni}),this.key=e,this.value=t}clone(e){let{key:t,value:n}=this;return pe(t)&&(t=t.clone(e)),pe(n)&&(n=n.clone(e)),new ve(t,n)}toJSON(e,t){const n=t?.mapAsMap?new Map:{};return pi(t,n,this)}toString(e,t,n){return e?.doc?la(this,e,t,n):JSON.stringify(this)}}function gi(s,e,t){return(e.inFlow??s.flow?ha:da)(s,e,t)}function da({comment:s,items:e},t,{blockItemPrefix:n,flowChars:i,itemIndent:r,onChompKeep:a,onComment:o}){const{indent:l,options:{commentString:c}}=t,h=Object.assign({},t,{indent:r,type:null});let d=!1;const p=[];for(let E=0;E<e.length;++E){const y=e[E];let T=null;if(pe(y))!d&&y.spaceBefore&&p.push(""),un(t,p,y.commentBefore,d),y.comment&&(T=y.comment);else if(ge(y)){const D=pe(y.key)?y.key:null;D&&(!d&&D.spaceBefore&&p.push(""),un(t,p,D.commentBefore,d))}d=!1;let N=bt(y,h,()=>T=null,()=>d=!0);T&&(N+=at(N,r,c(T))),d&&T&&(d=!1),p.push(n+N)}let w;if(p.length===0)w=i.start+i.end;else{w=p[0];for(let E=1;E<p.length;++E){const y=p[E];w+=y?`
${l}${y}`:`
`}}return s?(w+=`
`+Je(c(s),l),o&&o()):d&&a&&a(),w}function ha({items:s},e,{flowChars:t,itemIndent:n}){const{indent:i,indentStep:r,flowCollectionPadding:a,options:{commentString:o}}=e;n+=r;const l=Object.assign({},e,{indent:n,inFlow:!0,type:null});let c=!1,h=0;const d=[];for(let E=0;E<s.length;++E){const y=s[E];let T=null;if(pe(y))y.spaceBefore&&d.push(""),un(e,d,y.commentBefore,!1),y.comment&&(T=y.comment);else if(ge(y)){const D=pe(y.key)?y.key:null;D&&(D.spaceBefore&&d.push(""),un(e,d,D.commentBefore,!1),D.comment&&(c=!0));const O=pe(y.value)?y.value:null;O?(O.comment&&(T=O.comment),O.commentBefore&&(c=!0)):y.value==null&&D?.comment&&(T=D.comment)}T&&(c=!0);let N=bt(y,l,()=>T=null);c||(c=d.length>h||N.includes(`
`)),E<s.length-1?N+=",":e.options.trailingComma&&(e.options.lineWidth>0&&(c||(c=d.reduce((D,O)=>D+O.length+2,2)+(N.length+2)>e.options.lineWidth)),c&&(N+=",")),T&&(N+=at(N,n,o(T))),d.push(N),h=d.length}const{start:p,end:w}=t;if(d.length===0)return p+w;if(!c){const E=d.reduce((y,T)=>y+T.length+2,2);c=e.options.lineWidth>0&&E>e.options.lineWidth}if(c){let E=p;for(const y of d)E+=y?`
${r}${i}${y}`:`
`;return`${E}
${i}${w}`}else return`${p}${a}${d.join(" ")}${a}${w}`}function un({indent:s,options:{commentString:e}},t,n,i){if(n&&i&&(n=n.replace(/^\n+/,"")),n){const r=Je(e(n),s);t.push(r.trimStart())}}function ot(s,e){const t=re(e)?e.value:e;for(const n of s)if(ge(n)&&(n.key===e||n.key===t||re(n.key)&&n.key.value===t))return n}class Ce extends li{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(nt,e),this.items=[]}static from(e,t,n){const{keepUndefined:i,replacer:r}=n,a=new this(e),o=(l,c)=>{if(typeof r=="function")c=r.call(t,l,c);else if(Array.isArray(r)&&!r.includes(l))return;(c!==void 0||i)&&a.items.push(is(l,c,n))};if(t instanceof Map)for(const[l,c]of t)o(l,c);else if(t&&typeof t=="object")for(const l of Object.keys(t))o(l,t[l]);return typeof e.sortMapEntries=="function"&&a.items.sort(e.sortMapEntries),a}add(e,t){let n;ge(e)?n=e:!e||typeof e!="object"||!("key"in e)?n=new ve(e,e?.value):n=new ve(e.key,e.value);const i=ot(this.items,n.key),r=this.schema?.sortMapEntries;if(i){if(!t)throw new Error(`Key ${n.key} already set`);re(i.value)&&oi(n.value)?i.value.value=n.value:i.value=n.value}else if(r){const a=this.items.findIndex(o=>r(n,o)<0);a===-1?this.items.push(n):this.items.splice(a,0,n)}else this.items.push(n)}delete(e){const t=ot(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const i=ot(this.items,e)?.value;return(!t&&re(i)?i.value:i)??void 0}has(e){return!!ot(this.items,e)}set(e,t){this.add(new ve(e,t),!0)}toJSON(e,t,n){const i=n?new n:t?.mapAsMap?new Map:{};t?.onCreate&&t.onCreate(i);for(const r of this.items)pi(t,i,r);return i}toString(e,t,n){if(!e)return JSON.stringify(this);for(const i of this.items)if(!ge(i))throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),gi(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:n,onComment:t})}}const Nt={collection:"map",default:!0,nodeClass:Ce,tag:"tag:yaml.org,2002:map",resolve(s,e){return Ft(s)||e("Expected a mapping for this tag"),s},createNode:(s,e,t)=>Ce.from(s,e,t)};class lt extends li{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(It,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=Qt(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const n=Qt(e);if(typeof n!="number")return;const i=this.items[n];return!t&&re(i)?i.value:i}has(e){const t=Qt(e);return typeof t=="number"&&t<this.items.length}set(e,t){const n=Qt(e);if(typeof n!="number")throw new Error(`Expected a valid index, not ${e}.`);const i=this.items[n];re(i)&&oi(t)?i.value=t:this.items[n]=t}toJSON(e,t){const n=[];t?.onCreate&&t.onCreate(n);let i=0;for(const r of this.items)n.push(Oe(r,String(i++),t));return n}toString(e,t,n){return e?gi(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:n,onComment:t}):JSON.stringify(this)}static from(e,t,n){const{replacer:i}=n,r=new this(e);if(t&&Symbol.iterator in Object(t)){let a=0;for(let o of t){if(typeof i=="function"){const l=t instanceof Set?o:String(a++);o=i.call(t,l,o)}r.items.push(zt(o,void 0,n))}}return r}}function Qt(s){let e=re(s)?s.value:s;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const Dt={collection:"seq",default:!0,nodeClass:lt,tag:"tag:yaml.org,2002:seq",resolve(s,e){return xt(s)||e("Expected a sequence for this tag"),s},createNode:(s,e,t)=>lt.from(s,e,t)},wn={identify:s=>typeof s=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:s=>s,stringify(s,e,t,n){return e=Object.assign({actualString:!0},e),ss(s,e,t,n)}},Sn={identify:s=>s==null,createNode:()=>new H(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new H(null),stringify:({source:s},e)=>typeof s=="string"&&Sn.test.test(s)?s:e.options.nullStr},rs={identify:s=>typeof s=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:s=>new H(s[0]==="t"||s[0]==="T"),stringify({source:s,value:e},t){if(s&&rs.test.test(s)){const n=s[0]==="t"||s[0]==="T";if(e===n)return s}return e?t.options.trueStr:t.options.falseStr}};function Be({format:s,minFractionDigits:e,tag:t,value:n}){if(typeof n=="bigint")return String(n);const i=typeof n=="number"?n:Number(n);if(!isFinite(i))return isNaN(i)?".nan":i<0?"-.inf":".inf";let r=Object.is(n,-0)?"-0":JSON.stringify(n);if(!s&&e&&(!t||t==="tag:yaml.org,2002:float")&&/^-?\d/.test(r)&&!r.includes("e")){let a=r.indexOf(".");a<0&&(a=r.length,r+=".");let o=e-(r.length-a-1);for(;o-- >0;)r+="0"}return r}const mi={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:s=>s.slice(-3).toLowerCase()==="nan"?NaN:s[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Be},yi={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:s=>parseFloat(s),stringify(s){const e=Number(s.value);return isFinite(e)?e.toExponential():Be(s)}},_i={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(s){const e=new H(parseFloat(s)),t=s.indexOf(".");return t!==-1&&s[s.length-1]==="0"&&(e.minFractionDigits=s.length-t-1),e},stringify:Be},Tn=s=>typeof s=="bigint"||Number.isInteger(s),as=(s,e,t,{intAsBigInt:n})=>n?BigInt(s):parseInt(s.substring(e),t);function wi(s,e,t){const{value:n}=s;return Tn(n)&&n>=0?t+n.toString(e):Be(s)}const Si={identify:s=>Tn(s)&&s>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(s,e,t)=>as(s,2,8,t),stringify:s=>wi(s,8,"0o")},Ti={identify:Tn,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(s,e,t)=>as(s,0,10,t),stringify:Be},Ei={identify:s=>Tn(s)&&s>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(s,e,t)=>as(s,2,16,t),stringify:s=>wi(s,16,"0x")},fa=[Nt,Dt,wn,Sn,rs,Si,Ti,Ei,mi,yi,_i];function ks(s){return typeof s=="bigint"||Number.isInteger(s)}const Jt=({value:s})=>JSON.stringify(s),pa=[{identify:s=>typeof s=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:s=>s,stringify:Jt},{identify:s=>s==null,createNode:()=>new H(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Jt},{identify:s=>typeof s=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:s=>s==="true",stringify:Jt},{identify:ks,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(s,e,{intAsBigInt:t})=>t?BigInt(s):parseInt(s,10),stringify:({value:s})=>ks(s)?s.toString():JSON.stringify(s)},{identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:s=>parseFloat(s),stringify:Jt}],ga={default:!0,tag:"",test:/^/,resolve(s,e){return e(`Unresolved plain scalar ${JSON.stringify(s)}`),s}},ma=[Nt,Dt].concat(pa,ga),os={identify:s=>s instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(s,e){if(typeof atob=="function"){const t=atob(s.replace(/[\n\r]/g,"")),n=new Uint8Array(t.length);for(let i=0;i<t.length;++i)n[i]=t.charCodeAt(i);return n}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),s},stringify({comment:s,type:e,value:t},n,i,r){if(!t)return"";const a=t;let o;if(typeof btoa=="function"){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);o=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=H.BLOCK_LITERAL),e!==H.QUOTE_DOUBLE){const l=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),c=Math.ceil(o.length/l),h=new Array(c);for(let d=0,p=0;d<c;++d,p+=l)h[d]=o.substr(p,l);o=h.join(e===H.BLOCK_LITERAL?`
`:" ")}return ss({comment:s,type:e,value:o},n,i,r)}};function bi(s,e){if(xt(s))for(let t=0;t<s.items.length;++t){let n=s.items[t];if(!ge(n)){if(Ft(n)){n.items.length>1&&e("Each pair must have its own sequence indicator");const i=n.items[0]||new ve(new H(null));if(n.commentBefore&&(i.key.commentBefore=i.key.commentBefore?`${n.commentBefore}
${i.key.commentBefore}`:n.commentBefore),n.comment){const r=i.value??i.key;r.comment=r.comment?`${n.comment}
${r.comment}`:n.comment}n=i}s.items[t]=ge(n)?n:new ve(n)}}else e("Expected a sequence for this tag");return s}function ki(s,e,t){const{replacer:n}=t,i=new lt(s);i.tag="tag:yaml.org,2002:pairs";let r=0;if(e&&Symbol.iterator in Object(e))for(let a of e){typeof n=="function"&&(a=n.call(e,String(r++),a));let o,l;if(Array.isArray(a))if(a.length===2)o=a[0],l=a[1];else throw new TypeError(`Expected [key, value] tuple: ${a}`);else if(a&&a instanceof Object){const c=Object.keys(a);if(c.length===1)o=c[0],l=a[o];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else o=a;i.items.push(is(o,l,t))}return i}const ls={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:bi,createNode:ki};class St extends lt{constructor(){super(),this.add=Ce.prototype.add.bind(this),this.delete=Ce.prototype.delete.bind(this),this.get=Ce.prototype.get.bind(this),this.has=Ce.prototype.has.bind(this),this.set=Ce.prototype.set.bind(this),this.tag=St.tag}toJSON(e,t){if(!t)return super.toJSON(e);const n=new Map;t?.onCreate&&t.onCreate(n);for(const i of this.items){let r,a;if(ge(i)?(r=Oe(i.key,"",t),a=Oe(i.value,r,t)):r=Oe(i,"",t),n.has(r))throw new Error("Ordered maps must not include duplicate keys");n.set(r,a)}return n}static from(e,t,n){const i=ki(e,t,n),r=new this;return r.items=i.items,r}}St.tag="tag:yaml.org,2002:omap";const cs={collection:"seq",identify:s=>s instanceof Map,nodeClass:St,default:!1,tag:"tag:yaml.org,2002:omap",resolve(s,e){const t=bi(s,e),n=[];for(const{key:i}of t.items)re(i)&&(n.includes(i.value)?e(`Ordered maps must not include duplicate keys: ${i.value}`):n.push(i.value));return Object.assign(new St,t)},createNode:(s,e,t)=>St.from(s,e,t)};function Ai({value:s,source:e},t){return e&&(s?Ii:Ri).test.test(e)?e:s?t.options.trueStr:t.options.falseStr}const Ii={identify:s=>s===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new H(!0),stringify:Ai},Ri={identify:s=>s===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new H(!1),stringify:Ai},ya={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:s=>s.slice(-3).toLowerCase()==="nan"?NaN:s[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Be},_a={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:s=>parseFloat(s.replace(/_/g,"")),stringify(s){const e=Number(s.value);return isFinite(e)?e.toExponential():Be(s)}},wa={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(s){const e=new H(parseFloat(s.replace(/_/g,""))),t=s.indexOf(".");if(t!==-1){const n=s.substring(t+1).replace(/_/g,"");n[n.length-1]==="0"&&(e.minFractionDigits=n.length)}return e},stringify:Be},jt=s=>typeof s=="bigint"||Number.isInteger(s);function En(s,e,t,{intAsBigInt:n}){const i=s[0];if((i==="-"||i==="+")&&(e+=1),s=s.substring(e).replace(/_/g,""),n){switch(t){case 2:s=`0b${s}`;break;case 8:s=`0o${s}`;break;case 16:s=`0x${s}`;break}const a=BigInt(s);return i==="-"?BigInt(-1)*a:a}const r=parseInt(s,t);return i==="-"?-1*r:r}function us(s,e,t){const{value:n}=s;if(jt(n)){const i=n.toString(e);return n<0?"-"+t+i.substr(1):t+i}return Be(s)}const Sa={identify:jt,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(s,e,t)=>En(s,2,2,t),stringify:s=>us(s,2,"0b")},Ta={identify:jt,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(s,e,t)=>En(s,1,8,t),stringify:s=>us(s,8,"0")},Ea={identify:jt,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(s,e,t)=>En(s,0,10,t),stringify:Be},ba={identify:jt,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(s,e,t)=>En(s,2,16,t),stringify:s=>us(s,16,"0x")};class Tt extends Ce{constructor(e){super(e),this.tag=Tt.tag}add(e){let t;ge(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new ve(e.key,null):t=new ve(e,null),ot(this.items,t.key)||this.items.push(t)}get(e,t){const n=ot(this.items,e);return!t&&ge(n)?re(n.key)?n.key.value:n.key:n}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const n=ot(this.items,e);n&&!t?this.items.splice(this.items.indexOf(n),1):!n&&t&&this.items.push(new ve(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,n);throw new Error("Set items must all have null values")}static from(e,t,n){const{replacer:i}=n,r=new this(e);if(t&&Symbol.iterator in Object(t))for(let a of t)typeof i=="function"&&(a=i.call(t,a,a)),r.items.push(is(a,null,n));return r}}Tt.tag="tag:yaml.org,2002:set";const ds={collection:"map",identify:s=>s instanceof Set,nodeClass:Tt,default:!1,tag:"tag:yaml.org,2002:set",createNode:(s,e,t)=>Tt.from(s,e,t),resolve(s,e){if(Ft(s)){if(s.hasAllNullValues(!0))return Object.assign(new Tt,s);e("Set items must all have null values")}else e("Expected a mapping for this tag");return s}};function hs(s,e){const t=s[0],n=t==="-"||t==="+"?s.substring(1):s,i=a=>e?BigInt(a):Number(a),r=n.replace(/_/g,"").split(":").reduce((a,o)=>a*i(60)+i(o),i(0));return t==="-"?i(-1)*r:r}function vi(s){let{value:e}=s,t=a=>a;if(typeof e=="bigint")t=a=>BigInt(a);else if(isNaN(e)||!isFinite(e))return Be(s);let n="";e<0&&(n="-",e*=t(-1));const i=t(60),r=[e%i];return e<60?r.unshift(0):(e=(e-r[0])/i,r.unshift(e%i),e>=60&&(e=(e-r[0])/i,r.unshift(e))),n+r.map(a=>String(a).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Ni={identify:s=>typeof s=="bigint"||Number.isInteger(s),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(s,e,{intAsBigInt:t})=>hs(s,t),stringify:vi},Di={identify:s=>typeof s=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:s=>hs(s,!1),stringify:vi},bn={identify:s=>s instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(s){const e=s.match(bn.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,t,n,i,r,a,o]=e.map(Number),l=e[7]?Number((e[7]+"00").substr(1,3)):0;let c=Date.UTC(t,n-1,i,r||0,a||0,o||0,l);const h=e[8];if(h&&h!=="Z"){let d=hs(h,!1);Math.abs(d)<30&&(d*=60),c-=6e4*d}return new Date(c)},stringify:({value:s})=>s?.toISOString().replace(/(T00:00:00)?\.000Z$/,"")??""},As=[Nt,Dt,wn,Sn,Ii,Ri,Sa,Ta,Ea,ba,ya,_a,wa,os,Ze,cs,ls,ds,Ni,Di,bn],Is=new Map([["core",fa],["failsafe",[Nt,Dt,wn]],["json",ma],["yaml11",As],["yaml-1.1",As]]),Rs={binary:os,bool:rs,float:_i,floatExp:yi,floatNaN:mi,floatTime:Di,int:Ti,intHex:Ei,intOct:Si,intTime:Ni,map:Nt,merge:Ze,null:Sn,omap:cs,pairs:ls,seq:Dt,set:ds,timestamp:bn},ka={"tag:yaml.org,2002:binary":os,"tag:yaml.org,2002:merge":Ze,"tag:yaml.org,2002:omap":cs,"tag:yaml.org,2002:pairs":ls,"tag:yaml.org,2002:set":ds,"tag:yaml.org,2002:timestamp":bn};function Cn(s,e,t){const n=Is.get(e);if(n&&!s)return t&&!n.includes(Ze)?n.concat(Ze):n.slice();let i=n;if(!i)if(Array.isArray(s))i=[];else{const r=Array.from(Is.keys()).filter(a=>a!=="yaml11").map(a=>JSON.stringify(a)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${r} or define customTags array`)}if(Array.isArray(s))for(const r of s)i=i.concat(r);else typeof s=="function"&&(i=s(i.slice()));return t&&(i=i.concat(Ze)),i.reduce((r,a)=>{const o=typeof a=="string"?Rs[a]:a;if(!o){const l=JSON.stringify(a),c=Object.keys(Rs).map(h=>JSON.stringify(h)).join(", ");throw new Error(`Unknown custom tag ${l}; use one of ${c}`)}return r.includes(o)||r.push(o),r},[])}const Aa=(s,e)=>s.key<e.key?-1:s.key>e.key?1:0;class fs{constructor({compat:e,customTags:t,merge:n,resolveKnownTags:i,schema:r,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?Cn(e,"compat"):e?Cn(null,e):null,this.name=typeof r=="string"&&r||"core",this.knownTags=i?ka:{},this.tags=Cn(t,this.name,n),this.toStringOptions=o??null,Object.defineProperty(this,nt,{value:Nt}),Object.defineProperty(this,He,{value:wn}),Object.defineProperty(this,It,{value:Dt}),this.sortMapEntries=typeof a=="function"?a:a===!0?Aa:null}clone(){const e=Object.create(fs.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function Ia(s,e){const t=[];let n=e.directives===!0;if(e.directives!==!1&&s.directives){const l=s.directives.toString(s);l?(t.push(l),n=!0):s.directives.docStart&&(n=!0)}n&&t.push("---");const i=ui(s,e),{commentString:r}=i.options;if(s.commentBefore){t.length!==1&&t.unshift("");const l=r(s.commentBefore);t.unshift(Je(l,""))}let a=!1,o=null;if(s.contents){if(pe(s.contents)){if(s.contents.spaceBefore&&n&&t.push(""),s.contents.commentBefore){const h=r(s.contents.commentBefore);t.push(Je(h,""))}i.forceBlockIndent=!!s.comment,o=s.contents.comment}const l=o?void 0:()=>a=!0;let c=bt(s.contents,i,()=>o=null,l);o&&(c+=at(c,"",r(o))),(c[0]==="|"||c[0]===">")&&t[t.length-1]==="---"?t[t.length-1]=`--- ${c}`:t.push(c)}else t.push(bt(s.contents,i));if(s.directives?.docEnd)if(s.comment){const l=r(s.comment);l.includes(`
`)?(t.push("..."),t.push(Je(l,""))):t.push(`... ${l}`)}else t.push("...");else{let l=s.comment;l&&a&&(l=l.replace(/^\n+/,"")),l&&((!a||o)&&t[t.length-1]!==""&&t.push(""),t.push(Je(r(l),"")))}return t.join(`
`)+`
`}class kn{constructor(e,t,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Me,{value:Hn});let i=null;typeof t=="function"||Array.isArray(t)?i=t:n===void 0&&t&&(n=t,t=void 0);const r=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},n);this.options=r;let{version:a}=r;n?._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new Re({version:a}),this.setSchema(a,n),this.contents=e===void 0?null:this.createNode(e,i,n)}clone(){const e=Object.create(kn.prototype,{[Me]:{value:Hn}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=pe(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){ut(this.contents)&&this.contents.add(e)}addIn(e,t){ut(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const n=ri(this);e.anchor=!t||n.has(t)?ai(t||"a",n):t}return new ns(e.anchor)}createNode(e,t,n){let i;if(typeof t=="function")e=t.call({"":e},"",e),i=t;else if(Array.isArray(t)){const T=D=>typeof D=="number"||D instanceof String||D instanceof Number,N=t.filter(T).map(String);N.length>0&&(t=t.concat(N)),i=t}else n===void 0&&t&&(n=t,t=void 0);const{aliasDuplicateObjects:r,anchorPrefix:a,flow:o,keepUndefined:l,onTagObj:c,tag:h}=n??{},{onAnchor:d,setAnchors:p,sourceObjects:w}=ea(this,a||"a"),E={aliasDuplicateObjects:r??!0,keepUndefined:l??!1,onAnchor:d,onTagObj:c,replacer:i,schema:this.schema,sourceObjects:w},y=zt(e,h,E);return o&&fe(y)&&(y.flow=!0),p(),y}createPair(e,t,n={}){const i=this.createNode(e,null,n),r=this.createNode(t,null,n);return new ve(i,r)}delete(e){return ut(this.contents)?this.contents.delete(e):!1}deleteIn(e){return Wt(e)?this.contents==null?!1:(this.contents=null,!0):ut(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return fe(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return Wt(e)?!t&&re(this.contents)?this.contents.value:this.contents:fe(this.contents)?this.contents.getIn(e,t):void 0}has(e){return fe(this.contents)?this.contents.has(e):!1}hasIn(e){return Wt(e)?this.contents!==void 0:fe(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=cn(this.schema,[e],t):ut(this.contents)&&this.contents.set(e,t)}setIn(e,t){Wt(e)?this.contents=t:this.contents==null?this.contents=cn(this.schema,Array.from(e),t):ut(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e=="number"&&(e=String(e));let n;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Re({version:"1.1"}),n={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new Re({version:e}),n={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,n=null;break;default:{const i=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(n)this.schema=new fs(Object.assign(n,t));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:t,mapAsMap:n,maxAliasCount:i,onAnchor:r,reviver:a}={}){const o={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},l=Oe(this.contents,t??"",o);if(typeof r=="function")for(const{count:c,res:h}of o.anchors.values())r(h,c);return typeof a=="function"?_t(a,{"":l},"",l):l}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return Ia(this,e)}}function ut(s){if(fe(s))return!0;throw new Error("Expected a YAML collection as document contents")}class Ci extends Error{constructor(e,t,n,i){super(),this.name=e,this.code=n,this.message=i,this.pos=t}}class Pt extends Ci{constructor(e,t,n){super("YAMLParseError",e,t,n)}}class Ra extends Ci{constructor(e,t,n){super("YAMLWarning",e,t,n)}}const vs=(s,e)=>t=>{if(t.pos[0]===-1)return;t.linePos=t.pos.map(o=>e.linePos(o));const{line:n,col:i}=t.linePos[0];t.message+=` at line ${n}, column ${i}`;let r=i-1,a=s.substring(e.lineStarts[n-1],e.lineStarts[n]).replace(/[\n\r]+$/,"");if(r>=60&&a.length>80){const o=Math.min(r-39,a.length-79);a="…"+a.substring(o),r-=o-1}if(a.length>80&&(a=a.substring(0,79)+"…"),n>1&&/^ *$/.test(a.substring(0,r))){let o=s.substring(e.lineStarts[n-2],e.lineStarts[n-1]);o.length>80&&(o=o.substring(0,79)+`…
`),a=o+a}if(/[^ ]/.test(a)){let o=1;const l=t.linePos[1];l?.line===n&&l.col>i&&(o=Math.max(1,Math.min(l.col-i,80-r)));const c=" ".repeat(r)+"^".repeat(o);t.message+=`:

${a}
${c}
`}};function kt(s,{flow:e,indicator:t,next:n,offset:i,onError:r,parentIndent:a,startOnNewline:o}){let l=!1,c=o,h=o,d="",p="",w=!1,E=!1,y=null,T=null,N=null,D=null,O=null,M=null,G=null;for(const u of s)switch(E&&(u.type!=="space"&&u.type!=="newline"&&u.type!=="comma"&&r(u.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),E=!1),y&&(c&&u.type!=="comment"&&u.type!=="newline"&&r(y,"TAB_AS_INDENT","Tabs are not allowed as indentation"),y=null),u.type){case"space":!e&&(t!=="doc-start"||n?.type!=="flow-collection")&&u.source.includes("	")&&(y=u),h=!0;break;case"comment":{h||r(u,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const f=u.source.substring(1)||" ";d?d+=p+f:d=f,p="",c=!1;break}case"newline":c?d?d+=u.source:(!M||t!=="seq-item-ind")&&(l=!0):p+=u.source,c=!0,w=!0,(T||N)&&(D=u),h=!0;break;case"anchor":T&&r(u,"MULTIPLE_ANCHORS","A node can have at most one anchor"),u.source.endsWith(":")&&r(u.offset+u.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),T=u,G??(G=u.offset),c=!1,h=!1,E=!0;break;case"tag":{N&&r(u,"MULTIPLE_TAGS","A node can have at most one tag"),N=u,G??(G=u.offset),c=!1,h=!1,E=!0;break}case t:(T||N)&&r(u,"BAD_PROP_ORDER",`Anchors and tags must be after the ${u.source} indicator`),M&&r(u,"UNEXPECTED_TOKEN",`Unexpected ${u.source} in ${e??"collection"}`),M=u,c=t==="seq-item-ind"||t==="explicit-key-ind",h=!1;break;case"comma":if(e){O&&r(u,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),O=u,c=!1,h=!1;break}default:r(u,"UNEXPECTED_TOKEN",`Unexpected ${u.type} token`),c=!1,h=!1}const L=s[s.length-1],W=L?L.offset+L.source.length:i;return E&&n&&n.type!=="space"&&n.type!=="newline"&&n.type!=="comma"&&(n.type!=="scalar"||n.source!=="")&&r(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),y&&(c&&y.indent<=a||n?.type==="block-map"||n?.type==="block-seq")&&r(y,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:O,found:M,spaceBefore:l,comment:d,hasNewline:w,anchor:T,tag:N,newlineAfterProp:D,end:W,start:G??W}}function Ut(s){if(!s)return null;switch(s.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(s.source.includes(`
`))return!0;if(s.end){for(const e of s.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of s.items){for(const t of e.start)if(t.type==="newline")return!0;if(e.sep){for(const t of e.sep)if(t.type==="newline")return!0}if(Ut(e.key)||Ut(e.value))return!0}return!1;default:return!0}}function qn(s,e,t){if(e?.type==="flow-collection"){const n=e.end[0];n.indent===s&&(n.source==="]"||n.source==="}")&&Ut(e)&&t(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Oi(s,e,t){const{uniqueKeys:n}=s.options;if(n===!1)return!1;const i=typeof n=="function"?n:(r,a)=>r===a||re(r)&&re(a)&&r.value===a.value;return e.some(r=>i(r.key,t))}const Ns="All mapping items must start at the same column";function va({composeNode:s,composeEmptyNode:e},t,n,i,r){const a=r?.nodeClass??Ce,o=new a(t.schema);t.atRoot&&(t.atRoot=!1);let l=n.offset,c=null;for(const h of n.items){const{start:d,key:p,sep:w,value:E}=h,y=kt(d,{indicator:"explicit-key-ind",next:p??w?.[0],offset:l,onError:i,parentIndent:n.indent,startOnNewline:!0}),T=!y.found;if(T){if(p&&(p.type==="block-seq"?i(l,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in p&&p.indent!==n.indent&&i(l,"BAD_INDENT",Ns)),!y.anchor&&!y.tag&&!w){c=y.end,y.comment&&(o.comment?o.comment+=`
`+y.comment:o.comment=y.comment);continue}(y.newlineAfterProp||Ut(p))&&i(p??d[d.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else y.found?.indent!==n.indent&&i(l,"BAD_INDENT",Ns);t.atKey=!0;const N=y.end,D=p?s(t,p,y,i):e(t,N,d,null,y,i);t.schema.compat&&qn(n.indent,p,i),t.atKey=!1,Oi(t,o.items,D)&&i(N,"DUPLICATE_KEY","Map keys must be unique");const O=kt(w??[],{indicator:"map-value-ind",next:E,offset:D.range[2],onError:i,parentIndent:n.indent,startOnNewline:!p||p.type==="block-scalar"});if(l=O.end,O.found){T&&(E?.type==="block-map"&&!O.hasNewline&&i(l,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),t.options.strict&&y.start<O.found.offset-1024&&i(D.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const M=E?s(t,E,O,i):e(t,l,w,null,O,i);t.schema.compat&&qn(n.indent,E,i),l=M.range[2];const G=new ve(D,M);t.options.keepSourceTokens&&(G.srcToken=h),o.items.push(G)}else{T&&i(D.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),O.comment&&(D.comment?D.comment+=`
`+O.comment:D.comment=O.comment);const M=new ve(D);t.options.keepSourceTokens&&(M.srcToken=h),o.items.push(M)}}return c&&c<l&&i(c,"IMPOSSIBLE","Map comment with trailing content"),o.range=[n.offset,l,c??l],o}function Na({composeNode:s,composeEmptyNode:e},t,n,i,r){const a=r?.nodeClass??lt,o=new a(t.schema);t.atRoot&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let l=n.offset,c=null;for(const{start:h,value:d}of n.items){const p=kt(h,{indicator:"seq-item-ind",next:d,offset:l,onError:i,parentIndent:n.indent,startOnNewline:!0});if(!p.found)if(p.anchor||p.tag||d)d?.type==="block-seq"?i(p.end,"BAD_INDENT","All sequence items must start at the same column"):i(l,"MISSING_CHAR","Sequence item without - indicator");else{c=p.end,p.comment&&(o.comment=p.comment);continue}const w=d?s(t,d,p,i):e(t,p.end,h,null,p,i);t.schema.compat&&qn(n.indent,d,i),l=w.range[2],o.items.push(w)}return o.range=[n.offset,l,c??l],o}function qt(s,e,t,n){let i="";if(s){let r=!1,a="";for(const o of s){const{source:l,type:c}=o;switch(c){case"space":r=!0;break;case"comment":{t&&!r&&n(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const h=l.substring(1)||" ";i?i+=a+h:i=h,a="";break}case"newline":i&&(a+=l),r=!0;break;default:n(o,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}e+=l.length}}return{comment:i,offset:e}}const On="Block collections are not allowed within flow collections",Mn=s=>s&&(s.type==="block-map"||s.type==="block-seq");function Da({composeNode:s,composeEmptyNode:e},t,n,i,r){const a=n.start.source==="{",o=a?"flow map":"flow sequence",l=r?.nodeClass??(a?Ce:lt),c=new l(t.schema);c.flow=!0;const h=t.atRoot;h&&(t.atRoot=!1),t.atKey&&(t.atKey=!1);let d=n.offset+n.start.source.length;for(let T=0;T<n.items.length;++T){const N=n.items[T],{start:D,key:O,sep:M,value:G}=N,L=kt(D,{flow:o,indicator:"explicit-key-ind",next:O??M?.[0],offset:d,onError:i,parentIndent:n.indent,startOnNewline:!1});if(!L.found){if(!L.anchor&&!L.tag&&!M&&!G){T===0&&L.comma?i(L.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`):T<n.items.length-1&&i(L.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${o}`),L.comment&&(c.comment?c.comment+=`
`+L.comment:c.comment=L.comment),d=L.end;continue}!a&&t.options.strict&&Ut(O)&&i(O,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(T===0)L.comma&&i(L.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${o}`);else if(L.comma||i(L.start,"MISSING_CHAR",`Missing , between ${o} items`),L.comment){let W="";e:for(const u of D)switch(u.type){case"comma":case"space":break;case"comment":W=u.source.substring(1);break e;default:break e}if(W){let u=c.items[c.items.length-1];ge(u)&&(u=u.value??u.key),u.comment?u.comment+=`
`+W:u.comment=W,L.comment=L.comment.substring(W.length+1)}}if(!a&&!M&&!L.found){const W=G?s(t,G,L,i):e(t,L.end,M,null,L,i);c.items.push(W),d=W.range[2],Mn(G)&&i(W.range,"BLOCK_IN_FLOW",On)}else{t.atKey=!0;const W=L.end,u=O?s(t,O,L,i):e(t,W,D,null,L,i);Mn(O)&&i(u.range,"BLOCK_IN_FLOW",On),t.atKey=!1;const f=kt(M??[],{flow:o,indicator:"map-value-ind",next:G,offset:u.range[2],onError:i,parentIndent:n.indent,startOnNewline:!1});if(f.found){if(!a&&!L.found&&t.options.strict){if(M)for(const b of M){if(b===f.found)break;if(b.type==="newline"){i(b,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}L.start<f.found.offset-1024&&i(f.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else G&&("source"in G&&G.source?.[0]===":"?i(G,"MISSING_CHAR",`Missing space after : in ${o}`):i(f.start,"MISSING_CHAR",`Missing , or : between ${o} items`));const S=G?s(t,G,f,i):f.found?e(t,f.end,M,null,f,i):null;S?Mn(G)&&i(S.range,"BLOCK_IN_FLOW",On):f.comment&&(u.comment?u.comment+=`
`+f.comment:u.comment=f.comment);const R=new ve(u,S);if(t.options.keepSourceTokens&&(R.srcToken=N),a){const b=c;Oi(t,b.items,u)&&i(W,"DUPLICATE_KEY","Map keys must be unique"),b.items.push(R)}else{const b=new Ce(t.schema);b.flow=!0,b.items.push(R);const $=(S??u).range;b.range=[u.range[0],$[1],$[2]],c.items.push(b)}d=S?S.range[2]:f.end}}const p=a?"}":"]",[w,...E]=n.end;let y=d;if(w?.source===p)y=w.offset+w.source.length;else{const T=o[0].toUpperCase()+o.substring(1),N=h?`${T} must end with a ${p}`:`${T} in block collection must be sufficiently indented and end with a ${p}`;i(d,h?"MISSING_CHAR":"BAD_INDENT",N),w&&w.source.length!==1&&E.unshift(w)}if(E.length>0){const T=qt(E,y,t.options.strict,i);T.comment&&(c.comment?c.comment+=`
`+T.comment:c.comment=T.comment),c.range=[n.offset,y,T.offset]}else c.range=[n.offset,y,y];return c}function Ln(s,e,t,n,i,r){const a=t.type==="block-map"?va(s,e,t,n,r):t.type==="block-seq"?Na(s,e,t,n,r):Da(s,e,t,n,r),o=a.constructor;return i==="!"||i===o.tagName?(a.tag=o.tagName,a):(i&&(a.tag=i),a)}function Ca(s,e,t,n,i){const r=n.tag,a=r?e.directives.tagName(r.source,p=>i(r,"TAG_RESOLVE_FAILED",p)):null;if(t.type==="block-seq"){const{anchor:p,newlineAfterProp:w}=n,E=p&&r?p.offset>r.offset?p:r:p??r;E&&(!w||w.offset<E.offset)&&i(E,"MISSING_CHAR","Missing newline after block sequence props")}const o=t.type==="block-map"?"map":t.type==="block-seq"?"seq":t.start.source==="{"?"map":"seq";if(!r||!a||a==="!"||a===Ce.tagName&&o==="map"||a===lt.tagName&&o==="seq")return Ln(s,e,t,i,a);let l=e.schema.tags.find(p=>p.tag===a&&p.collection===o);if(!l){const p=e.schema.knownTags[a];if(p?.collection===o)e.schema.tags.push(Object.assign({},p,{default:!1})),l=p;else return p?i(r,"BAD_COLLECTION_TYPE",`${p.tag} used for ${o} collection, but expects ${p.collection??"scalar"}`,!0):i(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,!0),Ln(s,e,t,i,a)}const c=Ln(s,e,t,i,a,l),h=l.resolve?.(c,p=>i(r,"TAG_RESOLVE_FAILED",p),e.options)??c,d=pe(h)?h:new H(h);return d.range=c.range,d.tag=a,l?.format&&(d.format=l.format),d}function Oa(s,e,t){const n=e.offset,i=Ma(e,s.options.strict,t);if(!i)return{value:"",type:null,comment:"",range:[n,n,n]};const r=i.mode===">"?H.BLOCK_FOLDED:H.BLOCK_LITERAL,a=e.source?La(e.source):[];let o=a.length;for(let y=a.length-1;y>=0;--y){const T=a[y][1];if(T===""||T==="\r")o=y;else break}if(o===0){const y=i.chomp==="+"&&a.length>0?`
`.repeat(Math.max(1,a.length-1)):"";let T=n+i.length;return e.source&&(T+=e.source.length),{value:y,type:r,comment:i.comment,range:[n,T,T]}}let l=e.indent+i.indent,c=e.offset+i.length,h=0;for(let y=0;y<o;++y){const[T,N]=a[y];if(N===""||N==="\r")i.indent===0&&T.length>l&&(l=T.length);else{T.length<l&&t(c+T.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),i.indent===0&&(l=T.length),h=y,l===0&&!s.atRoot&&t(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=T.length+N.length+1}for(let y=a.length-1;y>=o;--y)a[y][0].length>l&&(o=y+1);let d="",p="",w=!1;for(let y=0;y<h;++y)d+=a[y][0].slice(l)+`
`;for(let y=h;y<o;++y){let[T,N]=a[y];c+=T.length+N.length+1;const D=N[N.length-1]==="\r";if(D&&(N=N.slice(0,-1)),N&&T.length<l){const M=`Block scalar lines must not be less indented than their ${i.indent?"explicit indentation indicator":"first line"}`;t(c-N.length-(D?2:1),"BAD_INDENT",M),T=""}r===H.BLOCK_LITERAL?(d+=p+T.slice(l)+N,p=`
`):T.length>l||N[0]==="	"?(p===" "?p=`
`:!w&&p===`
`&&(p=`

`),d+=p+T.slice(l)+N,p=`
`,w=!0):N===""?p===`
`?d+=`
`:p=`
`:(d+=p+N,p=" ",w=!1)}switch(i.chomp){case"-":break;case"+":for(let y=o;y<a.length;++y)d+=`
`+a[y][0].slice(l);d[d.length-1]!==`
`&&(d+=`
`);break;default:d+=`
`}const E=n+i.length+e.source.length;return{value:d,type:r,comment:i.comment,range:[n,E,E]}}function Ma({offset:s,props:e},t,n){if(e[0].type!=="block-scalar-header")return n(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:i}=e[0],r=i[0];let a=0,o="",l=-1;for(let p=1;p<i.length;++p){const w=i[p];if(!o&&(w==="-"||w==="+"))o=w;else{const E=Number(w);!a&&E?a=E:l===-1&&(l=s+p)}}l!==-1&&n(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${i}`);let c=!1,h="",d=i.length;for(let p=1;p<e.length;++p){const w=e[p];switch(w.type){case"space":c=!0;case"newline":d+=w.source.length;break;case"comment":t&&!c&&n(w,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),d+=w.source.length,h=w.source.substring(1);break;case"error":n(w,"UNEXPECTED_TOKEN",w.message),d+=w.source.length;break;default:{const E=`Unexpected token in block scalar header: ${w.type}`;n(w,"UNEXPECTED_TOKEN",E);const y=w.source;y&&typeof y=="string"&&(d+=y.length)}}}return{mode:r,indent:a,chomp:o,comment:h,length:d}}function La(s){const e=s.split(/\n( *)/),t=e[0],n=t.match(/^( *)/),r=[n?.[1]?[n[1],t.slice(n[1].length)]:["",t]];for(let a=1;a<e.length;a+=2)r.push([e[a],e[a+1]]);return r}function Wa(s,e,t){const{offset:n,type:i,source:r,end:a}=s;let o,l;const c=(p,w,E)=>t(n+p,w,E);switch(i){case"scalar":o=H.PLAIN,l=Pa(r,c);break;case"single-quoted-scalar":o=H.QUOTE_SINGLE,l=Ga(r,c);break;case"double-quoted-scalar":o=H.QUOTE_DOUBLE,l=Ba(r,c);break;default:return t(s,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${i}`),{value:"",type:null,comment:"",range:[n,n+r.length,n+r.length]}}const h=n+r.length,d=qt(a,h,e,t);return{value:l,type:o,comment:d.comment,range:[n,h,d.offset]}}function Pa(s,e){let t="";switch(s[0]){case"	":t="a tab character";break;case",":t="flow indicator character ,";break;case"%":t="directive indicator character %";break;case"|":case">":{t=`block scalar indicator ${s[0]}`;break}case"@":case"`":{t=`reserved character ${s[0]}`;break}}return t&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${t}`),Mi(s)}function Ga(s,e){return(s[s.length-1]!=="'"||s.length===1)&&e(s.length,"MISSING_CHAR","Missing closing 'quote"),Mi(s.slice(1,-1)).replace(/''/g,"'")}function Mi(s){let e,t;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),t=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,t=/[ \t]*(.*?)[ \t]*\r?\n/sy}let n=e.exec(s);if(!n)return s;let i=n[1],r=" ",a=e.lastIndex;for(t.lastIndex=a;n=t.exec(s);)n[1]===""?r===`
`?i+=r:r=`
`:(i+=r+n[1],r=" "),a=t.lastIndex;const o=/[ \t]*(.*)/sy;return o.lastIndex=a,n=o.exec(s),i+r+(n?.[1]??"")}function Ba(s,e){let t="";for(let n=1;n<s.length-1;++n){const i=s[n];if(!(i==="\r"&&s[n+1]===`
`))if(i===`
`){const{fold:r,offset:a}=$a(s,n);t+=r,n=a}else if(i==="\\"){let r=s[++n];const a=za[r];if(a)t+=a;else if(r===`
`)for(r=s[n+1];r===" "||r==="	";)r=s[++n+1];else if(r==="\r"&&s[n+1]===`
`)for(r=s[++n+1];r===" "||r==="	";)r=s[++n+1];else if(r==="x"||r==="u"||r==="U"){const o=r==="x"?2:r==="u"?4:8;t+=Ua(s,n+1,o,e),n+=o}else{const o=s.substr(n-1,2);e(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),t+=o}}else if(i===" "||i==="	"){const r=n;let a=s[n+1];for(;a===" "||a==="	";)a=s[++n+1];a!==`
`&&!(a==="\r"&&s[n+2]===`
`)&&(t+=n>r?s.slice(r,n+1):i)}else t+=i}return(s[s.length-1]!=='"'||s.length===1)&&e(s.length,"MISSING_CHAR",'Missing closing "quote'),t}function $a(s,e){let t="",n=s[e+1];for(;(n===" "||n==="	"||n===`
`||n==="\r")&&!(n==="\r"&&s[e+2]!==`
`);)n===`
`&&(t+=`
`),e+=1,n=s[e+1];return t||(t=" "),{fold:t,offset:e}}const za={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Ua(s,e,t,n){const i=s.substr(e,t),a=i.length===t&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;try{return String.fromCodePoint(a)}catch{const o=s.substr(e-2,t+2);return n(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}}function Li(s,e,t,n){const{value:i,type:r,comment:a,range:o}=e.type==="block-scalar"?Oa(s,e,n):Wa(e,s.options.strict,n),l=t?s.directives.tagName(t.source,d=>n(t,"TAG_RESOLVE_FAILED",d)):null;let c;s.options.stringKeys&&s.atKey?c=s.schema[He]:l?c=Va(s.schema,i,l,t,n):e.type==="scalar"?c=Ka(s,i,e,n):c=s.schema[He];let h;try{const d=c.resolve(i,p=>n(t??e,"TAG_RESOLVE_FAILED",p),s.options);h=re(d)?d:new H(d)}catch(d){const p=d instanceof Error?d.message:String(d);n(t??e,"TAG_RESOLVE_FAILED",p),h=new H(i)}return h.range=o,h.source=i,r&&(h.type=r),l&&(h.tag=l),c.format&&(h.format=c.format),a&&(h.comment=a),h}function Va(s,e,t,n,i){if(t==="!")return s[He];const r=[];for(const o of s.tags)if(!o.collection&&o.tag===t)if(o.default&&o.test)r.push(o);else return o;for(const o of r)if(o.test?.test(e))return o;const a=s.knownTags[t];return a&&!a.collection?(s.tags.push(Object.assign({},a,{default:!1,test:void 0})),a):(i(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${t}`,t!=="tag:yaml.org,2002:str"),s[He])}function Ka({atKey:s,directives:e,schema:t},n,i,r){const a=t.tags.find(o=>(o.default===!0||s&&o.default==="key")&&o.test?.test(n))||t[He];if(t.compat){const o=t.compat.find(l=>l.default&&l.test?.test(n))??t[He];if(a.tag!==o.tag){const l=e.tagString(a.tag),c=e.tagString(o.tag),h=`Value may be parsed as either ${l} or ${c}`;r(i,"TAG_RESOLVE_FAILED",h,!0)}}return a}function Ha(s,e,t){if(e){t??(t=e.length);for(let n=t-1;n>=0;--n){let i=e[n];switch(i.type){case"space":case"comment":case"newline":s-=i.source.length;continue}for(i=e[++n];i?.type==="space";)s+=i.source.length,i=e[++n];break}}return s}const Fa={composeNode:Wi,composeEmptyNode:ps};function Wi(s,e,t,n){const i=s.atKey,{spaceBefore:r,comment:a,anchor:o,tag:l}=t;let c,h=!0;switch(e.type){case"alias":c=xa(s,e,n),(o||l)&&n(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=Li(s,e,l,n),o&&(c.anchor=o.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{c=Ca(Fa,s,e,t,n),o&&(c.anchor=o.source.substring(1))}catch(d){const p=d instanceof Error?d.message:String(d);n(e,"RESOURCE_EXHAUSTION",p)}break;default:{const d=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;n(e,"UNEXPECTED_TOKEN",d),h=!1}}return c??(c=ps(s,e.offset,void 0,null,t,n)),o&&c.anchor===""&&n(o,"BAD_ALIAS","Anchor cannot be an empty string"),i&&s.options.stringKeys&&(!re(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&n(l??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),r&&(c.spaceBefore=!0),a&&(e.type==="scalar"&&e.source===""?c.comment=a:c.commentBefore=a),s.options.keepSourceTokens&&h&&(c.srcToken=e),c}function ps(s,e,t,n,{spaceBefore:i,comment:r,anchor:a,tag:o,end:l},c){const h={type:"scalar",offset:Ha(e,t,n),indent:-1,source:""},d=Li(s,h,o,c);return a&&(d.anchor=a.source.substring(1),d.anchor===""&&c(a,"BAD_ALIAS","Anchor cannot be an empty string")),i&&(d.spaceBefore=!0),r&&(d.comment=r,d.range[2]=l),d}function xa({options:s},{offset:e,source:t,end:n},i){const r=new ns(t.substring(1));r.source===""&&i(e,"BAD_ALIAS","Alias cannot be an empty string"),r.source.endsWith(":")&&i(e+t.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const a=e+t.length,o=qt(n,a,s.strict,i);return r.range=[e,a,o.offset],o.comment&&(r.comment=o.comment),r}function ja(s,e,{offset:t,start:n,value:i,end:r},a){const o=Object.assign({_directives:e},s),l=new kn(void 0,o),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},h=kt(n,{indicator:"doc-start",next:i??r?.[0],offset:t,onError:a,parentIndent:0,startOnNewline:!0});h.found&&(l.directives.docStart=!0,i&&(i.type==="block-map"||i.type==="block-seq")&&!h.hasNewline&&a(h.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=i?Wi(c,i,h,a):ps(c,h.end,n,null,h,a);const d=l.contents.range[2],p=qt(r,d,!1,a);return p.comment&&(l.comment=p.comment),l.range=[t,d,p.offset],l}function Mt(s){if(typeof s=="number")return[s,s+1];if(Array.isArray(s))return s.length===2?s:[s[0],s[1]];const{offset:e,source:t}=s;return[e,e+(typeof t=="string"?t.length:1)]}function Ds(s){let e="",t=!1,n=!1;for(let i=0;i<s.length;++i){const r=s[i];switch(r[0]){case"#":e+=(e===""?"":n?`

`:`
`)+(r.substring(1)||" "),t=!0,n=!1;break;case"%":s[i+1]?.[0]!=="#"&&(i+=1),t=!1;break;default:t||(n=!0),t=!1}}return{comment:e,afterEmptyLine:n}}class qa{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(t,n,i,r)=>{const a=Mt(t);r?this.warnings.push(new Ra(a,n,i)):this.errors.push(new Pt(a,n,i))},this.directives=new Re({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:n,afterEmptyLine:i}=Ds(this.prelude);if(n){const r=e.contents;if(t)e.comment=e.comment?`${e.comment}
${n}`:n;else if(i||e.directives.docStart||!r)e.commentBefore=n;else if(fe(r)&&!r.flow&&r.items.length>0){let a=r.items[0];ge(a)&&(a=a.key);const o=a.commentBefore;a.commentBefore=o?`${n}
${o}`:n}else{const a=r.commentBefore;r.commentBefore=a?`${n}
${a}`:n}}if(t){for(let r=0;r<this.errors.length;++r)e.errors.push(this.errors[r]);for(let r=0;r<this.warnings.length;++r)e.warnings.push(this.warnings[r])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:Ds(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,n=-1){for(const i of e)yield*this.next(i);yield*this.end(t,n)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,n,i)=>{const r=Mt(e);r[0]+=t,this.onError(r,"BAD_DIRECTIVE",n,i)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=ja(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new Pt(Mt(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case"doc-end":{if(!this.doc){const n="Unexpected doc-end without preceding document";this.errors.push(new Pt(Mt(e),"UNEXPECTED_TOKEN",n));break}this.doc.directives.docEnd=!0;const t=qt(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const n=this.doc.comment;this.doc.comment=n?`${n}
${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new Pt(Mt(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const n=Object.assign({_directives:this.directives},this.options),i=new kn(void 0,n);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,t,t],this.decorate(i,!1),yield i}}}const Pi="\uFEFF",Gi="",Bi="",Yn="";function Ya(s){switch(s){case Pi:return"byte-order-mark";case Gi:return"doc-mode";case Bi:return"flow-error-end";case Yn:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(s[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function We(s){switch(s){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const Cs=new Set("0123456789ABCDEFabcdef"),Qa=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Zt=new Set(",[]{}"),Ja=new Set(` ,[]{}
\r	`),Wn=s=>!s||Ja.has(s);class Za{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let n=this.next??"stream";for(;n&&(t||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===" "||t==="	";)t=this.buffer[++e];return!t||t==="#"||t===`
`?!0:t==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let n=0;for(;t===" ";)t=this.buffer[++n+e];if(t==="\r"){const i=this.buffer[n+e+1];if(i===`
`||!i&&!this.atEnd)return e+n+1}return t===`
`||n>=this.indentNext||!t&&!this.atEnd?e+n:-1}if(t==="-"||t==="."){const n=this.buffer.substr(e,3);if((n==="---"||n==="...")&&We(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===Pi&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let t=e.length,n=e.indexOf("#");for(;n!==-1;){const r=e[n-1];if(r===" "||r==="	"){t=n-1;break}else n=e.indexOf("#",n+1)}for(;;){const r=e[t-1];if(r===" "||r==="	")t-=1;else break}const i=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-i),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield Gi,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const t=this.peek(3);if((t==="---"||t==="...")&&We(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,t==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!We(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&We(t)){const n=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=n,"block-start"}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Wn),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,n=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=n=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);const i=this.getLine();if(i===null)return this.setNext("flow");if((n!==-1&&n<this.indentNext&&i[0]!=="#"||n===0&&(i.startsWith("---")||i.startsWith("..."))&&We(i[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(i[0]==="]"||i[0]==="}")))return this.flowLevel=0,yield Bi,yield*this.parseLineStart();let r=0;for(;i[r]===",";)r+=yield*this.pushCount(1),r+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(r+=yield*this.pushIndicators(),i[r]){case void 0:return"flow";case"#":return yield*this.pushCount(i.length-r),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Wn),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const a=this.charAt(1);if(this.flowKey||We(a)||a===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;t!==-1&&this.buffer[t+1]==="'";)t=this.buffer.indexOf("'",t+2);else for(;t!==-1;){let r=0;for(;this.buffer[t-1-r]==="\\";)r+=1;if(r%2===0)break;t=this.buffer.indexOf('"',t+1)}const n=this.buffer.substring(0,t);let i=n.indexOf(`
`,this.pos);if(i!==-1){for(;i!==-1;){const r=this.continueScalar(i+1);if(r===-1)break;i=n.indexOf(`
`,r)}i!==-1&&(t=i-(n[i-1]==="\r"?2:1))}if(t===-1){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if(t==="+")this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if(t!=="-")break}return yield*this.pushUntil(t=>We(t)||t==="#")}*parseBlockScalar(){let e=this.pos-1,t=0,n;e:for(let r=this.pos;n=this.buffer[r];++r)switch(n){case" ":t+=1;break;case`
`:e=r,t=0;break;case"\r":{const a=this.buffer[r+1];if(!a&&!this.atEnd)return this.setNext("block-scalar");if(a===`
`)break}default:break e}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const r=this.continueScalar(e+1);if(r===-1)break;e=this.buffer.indexOf(`
`,r)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let i=e+1;for(n=this.buffer[i];n===" ";)n=this.buffer[++i];if(n==="	"){for(;n==="	"||n===" "||n==="\r"||n===`
`;)n=this.buffer[++i];e=i-1}else if(!this.blockScalarKeep)do{let r=e-1,a=this.buffer[r];a==="\r"&&(a=this.buffer[--r]);const o=r;for(;a===" ";)a=this.buffer[--r];if(a===`
`&&r>=this.pos&&r+1+t>o)e=r;else break}while(!0);return yield Yn,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t=this.pos-1,n=this.pos-1,i;for(;i=this.buffer[++n];)if(i===":"){const r=this.buffer[n+1];if(We(r)||e&&Zt.has(r))break;t=n}else if(We(i)){let r=this.buffer[n+1];if(i==="\r"&&(r===`
`?(n+=1,i=`
`,r=this.buffer[n+1]):t=n),r==="#"||e&&Zt.has(r))break;if(i===`
`){const a=this.continueScalar(n+1);if(a===-1)break;n=Math.max(n,a-2)}}else{if(e&&Zt.has(i))break;t=n}return!i&&!this.atEnd?this.setNext("plain-scalar"):(yield Yn,yield*this.pushToIndex(t+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(t&&(yield""),0)}*pushIndicators(){let e=0;e:for(;;){switch(this.charAt(0)){case"!":e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue e;case"&":e+=yield*this.pushUntil(Wn),e+=yield*this.pushSpaces(!0);continue e;case"-":case"?":case":":{const t=this.flowLevel>0,n=this.charAt(1);if(We(n)||t&&Zt.has(n)){t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue e}}}break e}return e}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,t=this.buffer[e];for(;!We(t)&&t!==">";)t=this.buffer[++e];return yield*this.pushToIndex(t===">"?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(Qa.has(t))t=this.buffer[++e];else if(t==="%"&&Cs.has(this.buffer[e+1])&&Cs.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,n;do n=this.buffer[++t];while(n===" "||e&&n==="	");const i=t-this.pos;return i>0&&(yield this.buffer.substr(this.pos,i),this.pos=t),i}*pushUntil(e){let t=this.pos,n=this.buffer[t];for(;!e(n);)n=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class Xa{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,n=this.lineStarts.length;for(;t<n;){const r=t+n>>1;this.lineStarts[r]<e?t=r+1:n=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};const i=this.lineStarts[t-1];return{line:t,col:e-i+1}}}}function tt(s,e){for(let t=0;t<s.length;++t)if(s[t].type===e)return!0;return!1}function Os(s){for(let e=0;e<s.length;++e)switch(s[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function $i(s){switch(s?.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Xt(s){switch(s.type){case"document":return s.start;case"block-map":{const e=s.items[s.items.length-1];return e.sep??e.start}case"block-seq":return s.items[s.items.length-1].start;default:return[]}}function dt(s){if(s.length===0)return[];let e=s.length;e:for(;--e>=0;)switch(s[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;s[++e]?.type==="space";);return s.splice(e,s.length)}function dn(s,e){if(e.length<1e5)Array.prototype.push.apply(s,e);else for(let t=0;t<e.length;++t)s.push(e[t])}function Ms(s){if(s.start.type==="flow-seq-start")for(const e of s.items)e.sep&&!e.value&&!tt(e.start,"explicit-key-ind")&&!tt(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,$i(e.value)?e.value.end?dn(e.value.end,e.sep):e.value.end=e.sep:dn(e.start,e.sep),delete e.sep)}let eo=class{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Za,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const n of this.lexer.lex(e,t))yield*this.next(n);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const t=Ya(e);if(t)if(t==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const n=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:n,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&e?.type!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(!t)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield t;else{const n=this.peek(1);switch(t.type==="block-scalar"?t.indent="indent"in n?n.indent:0:t.type==="flow-collection"&&n.type==="document"&&(t.indent=0),t.type==="flow-collection"&&Ms(t),n.type){case"document":n.value=t;break;case"block-scalar":n.props.push(t);break;case"block-map":{const i=n.items[n.items.length-1];if(i.value){n.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(i.sep)i.value=t;else{Object.assign(i,{key:t,sep:[]}),this.onKeyLine=!i.explicitKey;return}break}case"block-seq":{const i=n.items[n.items.length-1];i.value?n.items.push({start:[],value:t}):i.value=t;break}case"flow-collection":{const i=n.items[n.items.length-1];!i||i.value?n.items.push({start:[],key:t,sep:[]}):i.sep?i.value=t:Object.assign(i,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((n.type==="document"||n.type==="block-map"||n.type==="block-seq")&&(t.type==="block-map"||t.type==="block-seq")){const i=t.items[t.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&Os(i.start)===-1&&(t.indent===0||i.start.every(r=>r.type!=="comment"||r.indent<t.indent))&&(n.type==="document"?n.end=i.start:n.items.push({start:i.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{Os(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const t=Xt(this.peek(2)),n=dt(t);let i;e.end?(i=e.end,i.push(this.sourceToken),delete e.end):i=[this.sourceToken];const r={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const n="end"in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type==="comment"?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const i=e.items[e.items.length-2]?.value?.end;if(Array.isArray(i)){dn(i,t.start),i.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const n=!this.onKeyLine&&this.indent===e.indent,i=n&&(t.sep||t.explicitKey)&&this.type!=="seq-item-ind";let r=[];if(i&&t.sep&&!t.value){const a=[];for(let o=0;o<t.sep.length;++o){const l=t.sep[o];switch(l.type){case"newline":a.push(o);break;case"space":break;case"comment":l.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(r=t.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":i||t.value?(r.push(this.sourceToken),e.items.push({start:r}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"explicit-key-ind":!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):i||t.value?(r.push(this.sourceToken),e.items.push({start:r,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(tt(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]});else if($i(t.key)&&!tt(t.sep,"newline")){const a=dt(t.start),o=t.key,l=t.sep;l.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:o,sep:l}]})}else r.length>0?t.sep=t.sep.concat(r,this.sourceToken):t.sep.push(this.sourceToken);else if(tt(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const a=dt(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||i?e.items.push({start:r,key:null,sep:[this.sourceToken]}):tt(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);i||t.value?(e.items.push({start:r,key:a,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(a):(Object.assign(t,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(e);if(a){if(a.type==="block-seq"){if(!t.explicitKey&&t.sep&&!tt(t.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else n&&e.items.push({start:r});this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const n="end"in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type==="comment"?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const i=e.items[e.items.length-2]?.value?.end;if(Array.isArray(i)){dn(i,t.start),i.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;t.value||tt(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){const n=this.startBlockValue(e);if(n){this.stack.push(n);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if(this.type==="flow-error-end"){let n;do yield*this.pop(),n=this.peek(1);while(n?.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case"map-value-ind":!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:i,sep:[]}):t.sep?this.stack.push(i):Object.assign(t,{key:i,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{const n=this.peek(2);if(n.type==="block-map"&&(this.type==="map-value-ind"&&n.indent===e.indent||this.type==="newline"&&!n.items[n.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&n.type!=="flow-collection"){const i=Xt(n),r=dt(i);Ms(e);const a=e.end.splice(1,e.end.length);a.push(this.sourceToken);const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:r,key:e,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let t=this.source.indexOf(`
`)+1;for(;t!==0;)this.onNewLine(this.offset+t),t=this.source.indexOf(`
`,t)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=Xt(e),n=dt(t);return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=Xt(e),n=dt(t);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!=="comment"||this.indent<=t?!1:e.every(n=>n.type==="newline"||n.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}};function to(s){const e=s.prettyErrors!==!1;return{lineCounter:s.lineCounter||e&&new Xa||null,prettyErrors:e}}function no(s,e={}){const{lineCounter:t,prettyErrors:n}=to(e),i=new eo(t?.addNewLine),r=new qa(e);let a=null;for(const o of r.compose(i.parse(s),!0,s.length))if(!a)a=o;else if(a.options.logLevel!=="silent"){a.errors.push(new Pt(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return n&&t&&(a.errors.forEach(vs(s,t)),a.warnings.forEach(vs(s,t))),a}function zi(s,e,t){let n;const i=no(s,t);if(!i)return null;if(i.warnings.forEach(r=>di(i.options.logLevel,r)),i.errors.length>0){if(i.options.logLevel!=="silent")throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:n},t))}const so=["==","!=","<=",">="],io=["<",">","+","*"],ro=[".","(",")",",","[","]"];function ao(s){const e=[];let t=0;const n=a=>/[A-Za-z_]/.test(a),i=a=>/[A-Za-z0-9_]/.test(a),r=a=>a>="0"&&a<="9";for(;t<s.length;){const a=s[t];if(/\s/.test(a)){t++;continue}if(r(a)){const l=t;for(;t<s.length&&r(s[t]);)t++;e.push({type:"number",value:s.slice(l,t),pos:l});continue}if(n(a)){const l=t;for(;t<s.length&&i(s[t]);)t++;e.push({type:"ident",value:s.slice(l,t),pos:l});continue}const o=s.slice(t,t+2);if(so.includes(o)){e.push({type:"op",value:o,pos:t}),t+=2;continue}if(io.includes(a)){e.push({type:"op",value:a,pos:t}),t++;continue}if(ro.includes(a)){e.push({type:"punct",value:a,pos:t}),t++;continue}throw Qn(s,t,`Unexpected character '${a}'`)}return e}function Qn(s,e,t){let n=1,i=1;for(let a=0;a<e&&a<s.length;a++)s[a]===`
`?(n++,i=1):i++;const r=s.split(`
`)[n-1]?.trim()??s;return new Error(`DSL parse error at line ${n} col ${i}: ${t}
  in: ${r}`)}const oo=new Set(["==","!=","<=",">=","<",">"]);class lo{constructor(e,t){this.tokens=e,this.source=t}tokens;source;index=0;peek(){return this.tokens[this.index]}next(){const e=this.tokens[this.index];if(!e)throw Qn(this.source,this.source.length,"Unexpected end of input");return this.index++,e}errorAt(e,t){return Qn(this.source,e?.pos??this.source.length,t)}expectPunct(e){const t=this.next();if(t.type!=="punct"||t.value!==e)throw this.errorAt(t,`Expected '${e}' but found '${t.value}'`);return t}consumePunct(e){const t=this.peek();return t&&t.type==="punct"&&t.value===e?(this.index++,!0):!1}isKeyword(e){const t=this.peek();return t?.type==="ident"&&t.value===e}requireEnd(){const e=this.peek();if(e)throw this.errorAt(e,`Unexpected trailing token '${e.value}'`)}expectKeyword(e){const t=this.next();if(t.type!=="ident"||t.value!==e)throw this.errorAt(t,`Expected keyword '${e}' but found '${t.value}'`)}parseExpression(){const e=this.parseAdditive(),t=this.peek();if(t&&t.type==="op"&&oo.has(t.value)){this.next();const n=this.parseAdditive();return{kind:"binary",operator:t.value,left:e,right:n}}return e}parseAdditive(){let e=this.parseMultiplicative();for(;;){const t=this.peek();if(!t||t.type!=="op"||t.value!=="+")break;this.next();const n=this.parseMultiplicative();e={kind:"binary",operator:"+",left:e,right:n}}return e}parseMultiplicative(){let e=this.parseOperand();for(;;){const t=this.peek();if(!t||t.type!=="op"||t.value!=="*")break;this.next();const n=this.parseOperand();e={kind:"binary",operator:"*",left:e,right:n}}return e}parseOperand(){const e=this.next();if(e.type==="number")return{kind:"number",value:parseInt(e.value,10)};if(e.type==="punct"&&e.value==="("){const t=this.parseExpression();return this.expectPunct(")"),t}if(e.type==="ident"){const t=[e.value];for(;this.consumePunct(".");){const n=this.next();if(n.type!=="ident")throw this.errorAt(n,"Expected identifier after '.'");t.push(n.value)}return this.buildVariable(t,e)}throw this.errorAt(e,`Expected number, variable or '(' but found '${e.value}'`)}buildVariable(e,t){if(e.length===2)try{return{kind:"variable",target:ws(e[0]),resource:Rn(e[1])}}catch(n){throw this.errorAt(t,n.message)}if(e.length===1){let n;try{n=Rn(e[0])}catch(i){throw this.errorAt(t,i.message)}if(!rr(n))throw this.errorAt(t,`Expected aggregate resource, got '${e[0]}'`);return{kind:"aggregate",resource:n}}throw this.errorAt(t,"Expected variable in form target.resource or aggregateResource")}parseAction(){return this.isKeyword("if")?this.parseConditional():this.parseMethodCall()}parseConditional(){this.expectKeyword("if");const e=this.parseExpression();this.expectKeyword("then");const t=this.parseActionList();let n=[];return this.isKeyword("else")&&(this.next(),n=this.parseActionList()),{kind:"conditional",condition:e,thenActions:t,elseActions:n}}parseActionList(){const e=this.consumePunct("["),t=[];for(;;){const n=this.peek();if(!n||n.type==="punct"&&n.value==="]"||n.type==="ident"&&(n.value==="else"||n.value==="then")||(t.push(this.parseAction()),!this.consumePunct(",")))break}return e&&this.expectPunct("]"),t}parseMethodCall(){const e=this.next();if(e.type!=="ident")throw this.errorAt(e,`Expected action target but found '${e.value}'`);const t=[e.value];for(;this.consumePunct(".");){const c=this.next();if(c.type!=="ident")throw this.errorAt(c,"Expected identifier after '.'");t.push(c.value)}if(t.length<2)throw this.errorAt(e,"Expected at least two identifiers for method call");const n=t[t.length-1],i=t.slice(0,-1);let r,a=null;try{r=ws(i[0]),i.length===2&&(a=Rn(i[1]))}catch(c){throw this.errorAt(e,c.message)}if(i.length>2)throw this.errorAt(e,"Expected receiver in form target or target.resource");let o;try{o=or(n)}catch(c){throw this.errorAt(e,c.message)}this.expectPunct("(");const l=[];if(!(this.peek()?.type==="punct"&&this.peek()?.value===")"))for(l.push(this.parseExpression());this.consumePunct(",");)l.push(this.parseExpression());return this.expectPunct(")"),{kind:"method",target:r,resource:a,method:o,arguments:l}}}function Ui(s,e){const t=new lo(ao(s),s);return e(t)}function co(s){return Ui(s,e=>{const t=e.parseAction();return e.requireEnd(),t})}function uo(s){return Ui(s,e=>{const t=e.parseExpression();return e.requireEnd(),t})}function Ls(s,e=""){if(typeof s=="string")try{return co(s)}catch(t){throw new Error(`Failed to parse action "${s}"${e?` (${e})`:""}: ${t.message}`,{cause:t})}if(s&&typeof s=="object"&&!Array.isArray(s)){const t=s;if(typeof t.if=="string"){let n;try{n=uo(t.if)}catch(i){throw new Error(`Failed to parse condition "${t.if}"${e?` (${e})`:""}: ${i.message}`,{cause:i})}return{kind:"conditional",condition:n,thenActions:Jn(t.then,`${e} then`),elseActions:t.else===void 0?[]:Jn(t.else,`${e} else`)}}}throw new Error(`Unsupported action format${e?` (${e})`:""}: ${JSON.stringify(s)}`)}function Jn(s,e=""){return s==null?[]:Array.isArray(s)?s.map((t,n)=>Ls(t,`${e}[${n}]`)):[Ls(s,e)]}function ht(s,e,t){if(typeof s!="string")throw new Error(`Card "${t}" field "${e}" must be a string`);return s}function ho(s,e,t){if(typeof s!="number"||!Number.isFinite(s))throw new Error(`Card "${t}" field "${e}" must be a number, got ${JSON.stringify(s)}`);return s}function fo(s,e){if(!s||typeof s!="object"||Array.isArray(s))throw new Error(`Card at index ${e} must be a mapping`);const t=s,n=ht(t.id,"id",`index ${e}`);return{id:n,name:ht(t.name,"name",n),description:ht(t.description,"description",n),type:lr(ht(t.type,"type",n)),cost:ho(t.cost,"cost",n),pic:ht(t.pic,"pic",n),actions:Jn(t.actions,`card ${n}`),features:Array.isArray(t.features)?t.features.map(i=>cr(ht(i,"feature",n))):[]}}function po(s){const e=zi(s);if(!e||typeof e!="object")throw new Error("Deck YAML root must be a mapping");const t=Array.isArray(e.cards)?e.cards.map(fo):[];if(t.length===0)throw new Error("Deck contains no cards");return{name:typeof e.name=="string"?e.name:"",description:typeof e.description=="string"?e.description:"",cards:t}}const go=["startingTower","startingWall","startingQuarry","startingMagic","startingDungeon","startingBricks","startingGems","startingBeasts","winningTower","winningResources"];function Ws(s,e,t){if(typeof s!="string")throw new Error(`Tavern ${t} field "${e}" must be a string, got ${JSON.stringify(s)}`);return s}function mo(s,e){if(!s||typeof s!="object"||Array.isArray(s))throw new Error(`Tavern at index ${e} must be a mapping`);const t=s,n=Ws(t.id,"id",`index ${e}`),i={id:n,name:Ws(t.name,"name",n)};for(const r of go){const a=t[r];if(typeof a!="number"||!Number.isFinite(a))throw new Error(`Tavern "${n}" field "${r}" must be a number, got ${JSON.stringify(a)}`);i[r]=a}return i}function Ps(s){const e=zi(s);if(!e||typeof e!="object")throw new Error("Tavern pack YAML root must be a mapping");const t=Array.isArray(e.taverns)?e.taverns.map(mo):[];if(t.length===0)throw new Error("Tavern pack contains no taverns");return{name:typeof e.name=="string"?e.name:"",description:typeof e.description=="string"?e.description:"",taverns:t}}function yo(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var rn={exports:{}};var _o=rn.exports,Gs;function wo(){return Gs||(Gs=1,(function(s,e){((t,n)=>{s.exports=n()})(_o,function t(){var n=typeof self<"u"?self:typeof window<"u"?window:n!==void 0?n:{},i=!n.document&&!!n.postMessage,r=n.IS_PAPA_WORKER||!1,a={},o=0,l={};function c(u){return u.charCodeAt(0)===65279?u.slice(1):u}function h(u){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(f){var S=G(f);S.chunkSize=parseInt(S.chunkSize),f.step||f.chunk||(S.chunkSize=null),this._handle=new y(S),(this._handle.streamer=this)._config=S}).call(this,u),this.parseChunk=function(f,S){var R=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<R){let $=this._config.newline;$||(b=this._config.quoteChar||'"',$=this._handle.guessLineEndings(f,b)),f=[...f.split($).slice(R)].join($)}this.isFirstChunk&&W(this._config.beforeFirstChunk)&&(b=this._config.beforeFirstChunk(f))!==void 0&&(f=b),this.isFirstChunk=!1,this._halted=!1;var R=this._partialLine+f,b=(this._partialLine="",this._handle.parse(R,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(f=b.meta.cursor,R=(this._finished||(this._partialLine=R.substring(f-this._baseIndex),this._baseIndex=f),b&&b.data&&(this._rowCount+=b.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),r)n.postMessage({results:b,workerId:l.WORKER_ID,finished:R});else if(W(this._config.chunk)&&!S){if(this._config.chunk(b,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=b=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(b.data),this._completeResults.errors=this._completeResults.errors.concat(b.errors),this._completeResults.meta=b.meta),this._completed||!R||!W(this._config.complete)||b&&b.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),R||b&&b.meta.paused||this._nextChunk(),b}this._halted=!0},this._sendError=function(f){W(this._config.error)?this._config.error(f):r&&this._config.error&&n.postMessage({workerId:l.WORKER_ID,error:f,finished:!1})}}function d(u){var f;(u=u||{}).chunkSize||(u.chunkSize=l.RemoteChunkSize),h.call(this,u),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(S){this._input=S,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(f=new XMLHttpRequest,this._config.withCredentials&&(f.withCredentials=this._config.withCredentials),i||(f.onload=L(this._chunkLoaded,this),f.onerror=L(this._chunkError,this)),f.ontimeout=L(this._chunkTimeout,this),f.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadTimeout&&!i&&(f.timeout=this._config.downloadTimeout),this._config.downloadRequestHeaders){var S,R=this._config.downloadRequestHeaders;for(S in R)f.setRequestHeader(S,R[S])}var b;this._config.chunkSize&&(b=this._start+this._config.chunkSize-1,f.setRequestHeader("Range","bytes="+this._start+"-"+b));try{f.send(this._config.downloadRequestBody)}catch($){this._chunkError($.message)}i&&f.status===0&&this._chunkError()}},this._chunkLoaded=function(){f.readyState===4&&(f.status<200||400<=f.status?this._chunkError():(this._start+=this._config.chunkSize||f.responseText.length,this._finished=!this._config.chunkSize||this._start>=(S=>(S=S.getResponseHeader("Content-Range"))!==null?parseInt(S.substring(S.lastIndexOf("/")+1)):-1)(f),this.parseChunk(f.responseText)))},this._chunkError=function(S){S=f.statusText||S,this._sendError(new Error(S))},this._chunkTimeout=function(){this._chunkError("Request timed out after "+this._config.downloadTimeout+"ms")}}function p(u){(u=u||{}).chunkSize||(u.chunkSize=l.LocalChunkSize),h.call(this,u);var f,S,R=typeof FileReader<"u";this.stream=function(b){this._input=b,S=b.slice||b.webkitSlice||b.mozSlice,R?((f=new FileReader).onload=L(this._chunkLoaded,this),f.onerror=L(this._chunkError,this)):f=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var b=this._input,$=(this._config.chunkSize&&($=Math.min(this._start+this._config.chunkSize,this._input.size),b=S.call(b,this._start,$)),f.readAsText(b,this._config.encoding));R||this._chunkLoaded({target:{result:$}})},this._chunkLoaded=function(b){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(b.target.result)},this._chunkError=function(){this._sendError(f.error)}}function w(u){var f;h.call(this,u=u||{}),this.stream=function(S){return f=S,this._nextChunk()},this._nextChunk=function(){var S,R;if(!this._finished)return S=this._config.chunkSize,f=S?(R=f.substring(0,S),f.substring(S)):(R=f,""),this._finished=!f,this.parseChunk(R)}}function E(u){h.call(this,u=u||{});var f=[],S=!0,R=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(b){this._input=b,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){R&&f.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),f.length?this.parseChunk(f.shift()):S=!0},this._streamData=L(function(b){try{f.push(typeof b=="string"?b:b.toString(this._config.encoding)),S&&(S=!1,this._checkIsFinished(),this.parseChunk(f.shift()))}catch($){this._streamError($)}},this),this._streamError=L(function(b){this._streamCleanUp(),this._sendError(b)},this),this._streamEnd=L(function(){this._streamCleanUp(),R=!0,this._streamData("")},this),this._streamCleanUp=L(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function y(u){var f,S,R,b,$=Math.pow(2,53),ee=-$,Ne=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Le=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,ae=this,Te=0,V=0,me=!1,F=!1,Y=[],P={data:[],errors:[],meta:{}};function be(j){return u.skipEmptyLines==="greedy"?j.join("").trim()==="":j.length===1&&j[0].length===0}function ne(){if(P&&R&&(Ie("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),R=!1),u.skipEmptyLines&&(P.data=P.data.filter(function(k){return!be(k)})),le()){let k=function(z){Y.push(z)};if(P)if(Array.isArray(P.data[0])){for(var j=0;le()&&j<P.data.length;j++)P.data[j].forEach(k);P.data.splice(0,1)}else P.data.forEach(k)}function x(k,z){for(var B=u.header?{}:[],U=0;U<k.length;U++){var J=U,q=k[U],q=((ke,K)=>(se=>(u.dynamicTypingFunction&&u.dynamicTyping[se]===void 0&&(u.dynamicTyping[se]=u.dynamicTypingFunction(se)),(u.dynamicTyping[se]||u.dynamicTyping)===!0))(ke)?K==="true"||K==="TRUE"||K!=="false"&&K!=="FALSE"&&((se=>{if(Ne.test(se)&&(se=parseFloat(se),ee<se&&se<$))return 1})(K)?parseFloat(K):Le.test(K)?new Date(K):K===""?null:K):K)(J=u.header?U>=Y.length?"__parsed_extra":Y[U]:J,q=u.transform?u.transform(q,J):q);J==="__parsed_extra"?(B[J]=B[J]||[],B[J].push(q)):B[J]=q}return u.header&&(U>Y.length?Ie("FieldMismatch","TooManyFields","Too many fields: expected "+Y.length+" fields but parsed "+U,V+z):U<Y.length&&Ie("FieldMismatch","TooFewFields","Too few fields: expected "+Y.length+" fields but parsed "+U,V+z)),B}var I;P&&(u.header||u.dynamicTyping||u.transform)&&(I=1,!P.data.length||Array.isArray(P.data[0])?(P.data=P.data.map(x),I=P.data.length):P.data=x(P.data,0),u.header&&P.meta&&(P.meta.fields=Y),V+=I)}function le(){return u.header&&Y.length===0}function Ie(j,x,I,k){j={type:j,code:x,message:I},k!==void 0&&(j.row=k),P.errors.push(j)}W(u.step)&&(b=u.step,u.step=function(j){P=j,le()?ne():(ne(),P.data.length!==0&&(Te+=j.data.length,u.preview&&Te>u.preview?S.abort():(P.data=P.data[0],b(P,ae))))}),this.parse=function(j,x,I){var k=u.quoteChar||'"',k=(u.newline||(u.newline=this.guessLineEndings(j,k)),R=!1,u.delimiter?W(u.delimiter)&&(u.delimiter=u.delimiter(j),P.meta.delimiter=u.delimiter):((k=((z,B,U,J,q)=>{var ke,K,se,Fe;q=q||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var xe=0;xe<q.length;xe++){for(var ze,Ct=q[xe],Ee=0,Ue=0,we=0,De=(se=void 0,new N({comments:J,delimiter:Ct,newline:B,preview:10}).parse(z)),je=0;je<De.data.length;je++)U&&be(De.data[je])?we++:(ze=De.data[je].length,Ue+=ze,se===void 0?se=ze:0<ze&&(Ee+=Math.abs(ze-se),se=ze));0<De.data.length&&(Ue/=De.data.length-we),1.99<Ue&&(K===void 0||Ee<K||Ee===K&&Fe<Ue)&&(K=Ee,ke=Ct,Fe=Ue)}return{successful:!!(u.delimiter=ke),bestDelimiter:ke}})(j,u.newline,u.skipEmptyLines,u.comments,u.delimitersToGuess)).successful?u.delimiter=k.bestDelimiter:(R=!0,u.delimiter=l.DefaultDelimiter),P.meta.delimiter=u.delimiter),G(u));return k.header=le(),u.preview&&u.header&&k.preview++,f=j,S=new N(k),P=S.parse(f,x,I),ne(),me?{meta:{paused:!0}}:P||{meta:{paused:!1}}},this.paused=function(){return me},this.pause=function(){me=!0,S.abort(),f=W(u.chunk)?"":f.substring(S.getCharIndex())},this.resume=function(){ae.streamer._halted?(me=!1,ae.streamer.parseChunk(f,!0)):setTimeout(ae.resume,3)},this.aborted=function(){return F},this.abort=function(){F=!0,S.abort(),P.meta.aborted=!0,W(u.complete)&&u.complete(P),f=""},this.guessLineEndings=function(z,k){z=z.substring(0,1048576);var k=new RegExp(T(k)+"([^]*?)"+T(k),"gm"),I=(z=z.replace(k,"")).split("\r"),k=z.split(`
`),z=1<k.length&&k[0].length<I[0].length;if(I.length===1||z)return`
`;for(var B=0,U=0;U<I.length;U++)I[U][0]===`
`&&B++;return B>=I.length/2?`\r
`:"\r"}}function T(u){return u.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function N(u){var f=(u=u||{}).delimiter,S=u.newline,R=u.comments,b=u.step,$=u.preview,ee=u.fastMode,Ne=null,Le=!1,ae=u.quoteChar==null?'"':u.quoteChar,Te=ae;if(u.escapeChar!==void 0&&(Te=u.escapeChar),(typeof f!="string"||-1<l.BAD_DELIMITERS.indexOf(f))&&(f=","),R===f)throw new Error("Comment character same as delimiter");R===!0?R="#":(typeof R!="string"||-1<l.BAD_DELIMITERS.indexOf(R))&&(R=!1),S!==`
`&&S!=="\r"&&S!==`\r
`&&(S=`
`);var V=0,me=!1;this.parse=function(F,Y,P){if(typeof F!="string")throw new Error("Input must be a string");var be=F.length,ne=f.length,le=S.length,Ie=R.length,j=W(b),x=[],I=[],k=[],z=V=0;if(!F)return Ee();if(ee||ee!==!1&&F.indexOf(ae)===-1){for(var B=F.split(S),U=0;U<B.length;U++){if(k=B[U],V+=k.length,U!==B.length-1)V+=S.length;else if(P)return Ee();if(!R||k.substring(0,Ie)!==R){if(j){if(x=[],Fe(k.split(f)),Ue(),me)return Ee()}else Fe(k.split(f));if($&&$<=U)return x=x.slice(0,$),Ee(!0)}}return Ee()}for(var J=F.indexOf(f,V),q=F.indexOf(S,V),ke=new RegExp(T(Te)+T(ae),"g"),K=F.indexOf(ae,V);;)if(F[V]===ae)for(K=V,V++;;){if((K=F.indexOf(ae,K+1))===-1)return P||I.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:x.length,index:V}),ze();if(K===be-1)return ze(F.substring(V,K).replace(ke,ae));if(ae===Te&&F[K+1]===Te)K++;else if(ae===Te||K===0||F[K-1]!==Te){J!==-1&&J<K+1&&(J=F.indexOf(f,K+1));var se=xe((q=q!==-1&&q<K+1?F.indexOf(S,K+1):q)===-1?J:Math.min(J,q));if(F.substr(K+1+se,ne)===f){k.push(F.substring(V,K).replace(ke,ae)),F[V=K+1+se+ne]!==ae&&(K=F.indexOf(ae,V)),J=F.indexOf(f,V),q=F.indexOf(S,V);break}if(se=xe(q),F.substring(K+1+se,K+1+se+le)===S){if(k.push(F.substring(V,K).replace(ke,ae)),Ct(K+1+se+le),J=F.indexOf(f,V),K=F.indexOf(ae,V),j&&(Ue(),me))return Ee();if($&&x.length>=$)return Ee(!0);break}I.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:x.length,index:V}),K++}}else if(R&&k.length===0&&F.substring(V,V+Ie)===R){if(q===-1)return Ee();V=q+le,q=F.indexOf(S,V),J=F.indexOf(f,V)}else if(J!==-1&&(J<q||q===-1))k.push(F.substring(V,J)),V=J+ne,J=F.indexOf(f,V);else{if(q===-1)break;if(k.push(F.substring(V,q)),Ct(q+le),j&&(Ue(),me))return Ee();if($&&x.length>=$)return Ee(!0)}return ze();function Fe(we){x.push(we),z=V}function xe(we){var De=0;return De=we!==-1&&(we=F.substring(K+1,we))&&we.trim()===""?we.length:De}function ze(we){return P||(we===void 0&&(we=F.substring(V)),k.push(we),V=be,Fe(k),j&&Ue()),Ee()}function Ct(we){V=we,Fe(k),k=[],q=F.indexOf(S,V)}function Ee(we){if(u.header&&!Y&&x.length&&!Le){var De=x[0],je=Object.create(null),In=new Set(De);let ys=!1;for(let ct=0;ct<De.length;ct++){let Ve=c(De[ct]);if(je[Ve=W(u.transformHeader)?u.transformHeader(Ve,ct):Ve]){let Ot,_s=je[Ve];for(;Ot=Ve+"_"+_s,_s++,In.has(Ot););In.add(Ot),De[ct]=Ot,je[Ve]++,ys=!0,(Ne=Ne===null?{}:Ne)[Ot]=Ve}else je[Ve]=1,De[ct]=Ve;In.add(Ve)}ys&&console.warn("Duplicate headers found and renamed."),Le=!0}return{data:x,errors:I,meta:{delimiter:f,linebreak:S,aborted:me,truncated:!!we,cursor:z+(Y||0),renamedHeaders:Ne}}}function Ue(){b(Ee()),x=[],I=[]}},this.abort=function(){me=!0},this.getCharIndex=function(){return V}}function D(u){var f=u.data,S=a[f.workerId],R=!1;if(f.error)S.userError(f.error,f.file);else if(f.results&&f.results.data){var b={abort:function(){R=!0,O(f.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:M,resume:M};if(W(S.userStep)){for(var $=0;$<f.results.data.length&&(S.userStep({data:f.results.data[$],errors:f.results.errors,meta:f.results.meta},b),!R);$++);delete f.results}else W(S.userChunk)&&(S.userChunk(f.results,b,f.file),delete f.results)}f.finished&&!R&&O(f.workerId,f.results)}function O(u,f){var S=a[u];W(S.userComplete)&&S.userComplete(f),S.terminate(),delete a[u]}function M(){throw new Error("Not implemented.")}function G(u){if(typeof u!="object"||u===null)return u;var f,S=Array.isArray(u)?[]:{};for(f in u)S[f]=G(u[f]);return S}function L(u,f){return function(){u.apply(f,arguments)}}function W(u){return typeof u=="function"}return l.parse=function(u,f){var S=(f=f||{}).dynamicTyping||!1;if(W(S)&&(f.dynamicTypingFunction=S,S={}),f.dynamicTyping=S,f.transform=!!W(f.transform)&&f.transform,f.downloadTimeout!==void 0){var S=parseInt(f.downloadTimeout);if(isNaN(S))throw new Error("Config downloadTimeout value ("+f.downloadTimeout+") not parsable by parseInt(val).");f.downloadTimeout=S}if(!f.worker||!l.WORKERS_SUPPORTED)return S=null,l.NODE_STREAM_INPUT,typeof u=="string"?(u=c(u),S=new(f.download?d:w)(f)):u.readable===!0&&W(u.read)&&W(u.on)?S=new E(f):(n.File&&u instanceof File||u instanceof Object)&&(S=new p(f)),S.stream(u);(S=(()=>{var R;return!!l.WORKERS_SUPPORTED&&(R=(()=>{var b=n.URL||n.webkitURL||null,$=t.toString();return l.BLOB_URL||(l.BLOB_URL=b.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",$,")();"],{type:"text/javascript"})))})(),(R=new n.Worker(R)).onmessage=D,R.id=o++,a[R.id]=R)})()).userStep=f.step,S.userChunk=f.chunk,S.userComplete=f.complete,S.userError=f.error,f.step=W(f.step),f.chunk=W(f.chunk),f.complete=W(f.complete),f.error=W(f.error),delete f.worker,S.postMessage({input:u,config:f,workerId:S.id})},l.unparse=function(u,f){var S=!1,R=!0,b=",",$=`\r
`,ee='"',Ne=ee+ee,Le=!1,ae=null,Te=!1,V=((()=>{if(typeof f=="object"){if(typeof f.delimiter!="string"||l.BAD_DELIMITERS.filter(function(Y){return f.delimiter.indexOf(Y)!==-1}).length||(b=f.delimiter),typeof f.quotes!="boolean"&&typeof f.quotes!="function"&&!Array.isArray(f.quotes)||(S=f.quotes),typeof f.skipEmptyLines!="boolean"&&typeof f.skipEmptyLines!="string"||(Le=f.skipEmptyLines),typeof f.newline=="string"&&($=f.newline),typeof f.quoteChar=="string"&&(ee=f.quoteChar,Ne=ee+ee),typeof f.header=="boolean"&&(R=f.header),Array.isArray(f.columns)){if(f.columns.length===0)throw new Error("Option columns is empty");ae=f.columns}f.escapeChar!==void 0&&(Ne=f.escapeChar+ee),f.escapeFormulae instanceof RegExp?Te=f.escapeFormulae:typeof f.escapeFormulae=="boolean"&&f.escapeFormulae&&(Te=/^[=+\-@\t\r].*$/)}})(),new RegExp(T(ee),"g"));if(typeof u=="string"&&(u=JSON.parse(u)),Array.isArray(u)){if(!u.length||Array.isArray(u[0]))return me(null,u,Le);if(typeof u[0]=="object")return me(ae||Object.keys(u[0]),u,Le)}else if(typeof u=="object")return typeof u.data=="string"&&(u.data=JSON.parse(u.data)),Array.isArray(u.data)&&(u.fields||(u.fields=u.meta&&u.meta.fields||ae),u.fields||(u.fields=Array.isArray(u.data[0])?u.fields:typeof u.data[0]=="object"?Object.keys(u.data[0]):[]),Array.isArray(u.data[0])||typeof u.data[0]=="object"||(u.data=[u.data])),me(u.fields||[],u.data||[],Le);throw new Error("Unable to serialize unrecognized input");function me(Y,P,be){var ne="",le=(typeof Y=="string"&&(Y=JSON.parse(Y)),typeof P=="string"&&(P=JSON.parse(P)),Array.isArray(Y)&&0<Y.length),Ie=!Array.isArray(P[0]);if(le&&R){for(var j=0;j<Y.length;j++)0<j&&(ne+=b),ne+=F(Y[j],j);0<P.length&&(ne+=$)}for(var x=0;x<P.length;x++){var I=(le?Y:P[x]).length,k=!1,z=le?Object.keys(P[x]).length===0:P[x].length===0;if(be&&!le&&(k=be==="greedy"?P[x].join("").trim()==="":P[x].length===1&&P[x][0].length===0),be==="greedy"&&le){for(var B=[],U=0;U<I;U++){var J=Ie?Y[U]:U;B.push(P[x][J])}k=B.join("").trim()===""}if(!k){for(var q=0;q<I;q++){0<q&&!z&&(ne+=b);var ke=le&&Ie?Y[q]:q;ne+=F(P[x][ke],q)}x<P.length-1&&(!be||0<I&&!z)&&(ne+=$)}}return ne}function F(Y,P){var be,ne,le;return Y==null?"":Y.constructor===Date?isNaN(Y.getTime())?"":Y.toISOString():(le=!1,Te&&typeof Y=="string"&&Te.test(Y)&&(Y="'"+Y,le=!0),ne=(be=Y.toString()).replace(V,Ne),(le=le||S===!0||typeof S=="function"&&S(Y,P)||Array.isArray(S)&&S[P]||((Ie,j)=>{for(var x=0;x<j.length;x++)if(-1<Ie.indexOf(j[x]))return!0;return!1})(ne,l.BAD_DELIMITERS)||-1<ne.indexOf(b)||-1<be.indexOf(ee)||ne.charAt(0)===" "||ne.charAt(ne.length-1)===" ")?ee+ne+ee:ne)}},l.RECORD_SEP="",l.UNIT_SEP="",l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!i&&!!n.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=N,l.ParserHandle=y,l.NetworkStreamer=d,l.FileStreamer=p,l.StringStreamer=w,l.ReadableStreamStreamer=E,r&&(n.onmessage=function(u){u=u.data,l.WORKER_ID===void 0&&u&&(l.WORKER_ID=u.workerId),typeof u.input=="string"?n.postMessage({workerId:l.WORKER_ID,results:l.parse(u.input,u.config),finished:!0}):(n.File&&u.input instanceof File||u.input instanceof Object)&&(u=l.parse(u.input,u.config))&&n.postMessage({workerId:l.WORKER_ID,results:u,finished:!0})}),(d.prototype=Object.create(h.prototype)).constructor=d,(p.prototype=Object.create(h.prototype)).constructor=p,(w.prototype=Object.create(w.prototype)).constructor=w,(E.prototype=Object.create(h.prototype)).constructor=E,l})})(rn)),rn.exports}var So=wo();const To=yo(So);function Pn(s){const e=To.parse(s.trim(),{header:!0,skipEmptyLines:!0});if(e.errors.length>0){const r=e.errors[0];throw new Error(`CSV parse error at row ${r.row}: ${r.message}`)}const t=e.data,n=(e.meta.fields??[]).filter(r=>r!=="id"),i=new Map;for(const r of t){const a=r.id;a&&i.set(a,r)}return{languages:n,get(r,a){return i.get(r)?.[a]},hasLanguage(r){return n.includes(r)}}}const Bs=Object.assign({"../data/decks/MM8.yaml":Vr,"../data/locales/Cards.csv":Kr,"../data/locales/Interface.csv":Hr,"../data/locales/Online.csv":Fr,"../data/taverns/MM7.yaml":xr,"../data/taverns/MM8.yaml":jr});function ft(s){const e=Object.keys(Bs).find(t=>t.endsWith(s));if(!e)throw new Error(`[gameData] 数据文件缺失: ${s}（请先运行 copy:assets）`);return Bs[e]}const $s="en";function Eo(){const s=po(ft("decks/MM8.yaml")),e=[...Ps(ft("taverns/MM7.yaml")).taverns,...Ps(ft("taverns/MM8.yaml")).taverns],t=Pn(ft("locales/Cards.csv")),n=Pn(ft("locales/Interface.csv")),i=Pn(ft("locales/Online.csv"));function r(o,l,c){const h=o.toUpperCase();return t.get(h,l)??(l!==$s?t.get(h,$s):void 0)??c}const a=(o,l)=>({name:r(o.id,l,o.name),description:r(`${o.id}_desc`,l,o.description)});return{deck:s,taverns:e,cardsLocale:t,interfaceLocale:n,onlineLocale:i,languages:t.languages,cardText:a}}const Xe=At("gameData",()=>{const s=X(null),e=X(!1),t=X(null);function n(){if(!e.value)try{s.value=Eo(),e.value=!0}catch(d){t.value=d.message,console.error("[gameData] 加载失败:",d)}}const i=Q(()=>s.value?.deck.cards.length??0),r=Q(()=>s.value?.taverns.length??0),a=Q(()=>s.value?.languages??[]),o=Q(()=>s.value?.deck.name??"");function l(d){return s.value?.deck.cards.find(p=>p.id===d)}function c(d,p){return s.value?.cardText(d,p)??{name:d.name,description:d.description}}function h(d){return(s.value?.cardText(d,"zh").name??d.name).trim().charAt(0)||"?"}return{data:s,loaded:e,loadError:t,load:n,cardCount:i,tavernCount:r,languages:a,deckName:o,cardById:l,cardText:c,cardGlyph:h}});function bo(s){return{all:s=s||new Map,on:function(e,t){var n=s.get(e);n?n.push(t):s.set(e,[t])},off:function(e,t){var n=s.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):s.set(e,[]))},emit:function(e,t){var n=s.get(e);n&&n.slice().map(function(i){i(t)}),(n=s.get("*"))&&n.slice().map(function(i){i(e,t)})}}}function hn(s,e){switch(s.kind){case"number":return s.value;case"variable":{const t=e.resolveTargets(s.target)[0];return t?e.getValue(t,s.resource):0}case"aggregate":return e.aggregateValue(s.resource);case"binary":{const t=hn(s.left,e),n=hn(s.right,e);switch(s.operator){case"+":return t+n;case"-":return t-n;case"*":return t*n;case"/":return n===0?0:Math.trunc(t/n);case"==":return t===n?1:0;case"!=":return t!==n?1:0;case"<":return t<n?1:0;case">":return t>n?1:0;case"<=":return t<=n?1:0;case">=":return t>=n?1:0;default:return 0}}}}function Vi(s,e){for(const t of s)ko(t,e)}function ko(s,e){if(s.kind==="conditional"){const r=hn(s.condition,e)!==0;Vi(r?s.thenActions:s.elseActions,e);return}const t=e.resolveTargets(s.target);if(t.length===0)return;if(s.method==="damage"){const r=zs(s.arguments,0,e);for(const a of t)e.damage(a,r,s.resource);return}if(!s.resource)return;const n=s.resource,i=zs(s.arguments,0,e);switch(s.method){case"gain":for(const r of t)e.setValue(r,n,Math.max(0,e.getValue(r,n)+i));break;case"lose":for(const r of t)e.setValue(r,n,Math.max(0,e.getValue(r,n)-i));break;case"set":for(const r of t)e.setValue(r,n,i);break;case"swap":{const r=Ao(s.arguments,e);if(!r)return;const a=t[0],o=e.getValue(a,n),l=e.getValue(r.player,r.resource);e.setValue(a,n,l),e.setValue(r.player,r.resource,o);break}}}function zs(s,e,t){return e>=s.length?0:hn(s[e],t)}function Ao(s,e){const t=s[0];if(!t||t.kind!=="variable")return null;const n=e.resolveTargets(t.target)[0];return n?{player:n,resource:t.resource}:null}function Gn(s,e){switch(e){case v.Tower:return s.towerHp;case v.Wall:return s.wallHp;case v.Quarry:return s.quarries;case v.Magic:return s.magic;case v.Dungeon:return s.dungeons;case v.Bricks:return s.bricks;case v.Gems:return s.gems;case v.Recruits:return s.recruits;default:throw new Error(`Invalid resource type for player state: ${e}`)}}function Io(s,e,t){switch(e){case v.Tower:s.towerHp=t;return;case v.Wall:s.wallHp=t;return;case v.Quarry:s.quarries=t;return;case v.Magic:s.magic=t;return;case v.Dungeon:s.dungeons=t;return;case v.Bricks:s.bricks=t;return;case v.Gems:s.gems=t;return;case v.Recruits:s.recruits=t;return;default:throw new Error(`Invalid resource type for player state: ${e}`)}}const Ro={[v.HighestWall]:v.Wall,[v.LowestWall]:v.Wall,[v.HighestTower]:v.Tower,[v.LowestTower]:v.Tower,[v.HighestQuarry]:v.Quarry,[v.LowestQuarry]:v.Quarry,[v.HighestBricks]:v.Bricks,[v.LowestBricks]:v.Bricks,[v.HighestMagic]:v.Magic,[v.LowestMagic]:v.Magic,[v.HighestGems]:v.Gems,[v.LowestGems]:v.Gems,[v.HighestDungeon]:v.Dungeon,[v.LowestDungeon]:v.Dungeon,[v.HighestRecruits]:v.Recruits,[v.LowestRecruits]:v.Recruits};function vo(s,e,t){const n=Ro[s];if(!n||e.length===0)return 0;const i=e.map(r=>t(r,n));return s.startsWith("highest")?Math.max(...i):Math.min(...i)}function No(s,e,t){if(e<=0)return;if(t===v.Tower){s.towerHp=Math.max(0,s.towerHp-e);return}if(t===v.Wall){s.wallHp=Math.max(0,s.wallHp-e);return}const n=Math.min(s.wallHp,e);s.wallHp-=n;const i=e-n;s.towerHp=Math.max(0,s.towerHp-i)}const fn={handSize:6,startTower:50,startWall:50,startQuarry:5,startMagic:3,startDungeon:5,startBricks:20,startGems:10,startRecruits:20,winningTower:100,winningResources:300};function Do(s){return{handSize:6,startTower:s.startingTower,startWall:s.startingWall,startQuarry:s.startingQuarry,startMagic:s.startingMagic,startDungeon:s.startingDungeon,startBricks:s.startingBricks,startGems:s.startingGems,startRecruits:s.startingBeasts,winningTower:s.winningTower,winningResources:s.winningResources}}function Co(s){let e=s>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class Ki{rules;players;events=[];currentId;turnNumber=0;over=!1;result=null;rng;cardsById;deck;uidSeq=0;constructor(e){if(this.rules=e.rules??fn,this.rng=e.rng??Math.random,this.deck=e.deck,this.cardsById=new Map(e.deck.map(n=>[n.id,n])),this.deck.length===0)throw new Error("[MatchEngine] 牌组为空");const t=e.names??["Player","AI"];this.players=[this.createPlayer(0,t[0],e.aiVsAi===!0),this.createPlayer(1,t[1],!0)],this.currentId=e.firstPlayerId??(this.rng()<.5?0:1)}createPlayer(e,t,n){const i=this.rules;return{id:e,name:t,isAi:n,hand:[],discarding:!1,towerHp:i.startTower,wallHp:i.startWall,quarries:i.startQuarry,magic:i.startMagic,dungeons:i.startDungeon,bricks:i.startBricks,gems:i.startGems,recruits:i.startRecruits}}start(){for(const e of this.players)for(let t=0;t<this.rules.handSize;t++)this.drawCard(e,!1);return this.turnNumber=1,this.addResources(this.current()),this.emit({type:"turn",playerId:this.currentId,turnNumber:this.turnNumber,playAgain:!1}),this}currentPlayer(){return this.current()}livingPlayers(){return this.players.filter(e=>!e.eliminated)}resolveTargets(e){const t=this.current(),n=this.opponentOf(t),i=this.livingPlayers();switch(e){case Pe.Self:return[t];case Pe.Opponent:case Pe.Enemies:case Pe.AllExceptSelf:return n.eliminated?[]:[n];case Pe.All:return i;case Pe.Allies:return[];case Pe.LowestWall:return[this.extreme(i,"wallHp","min")];case Pe.HighestWall:return[this.extreme(i,"wallHp","max")];case Pe.LowestTower:return[this.extreme(i,"towerHp","min")];case Pe.HighestTower:return[this.extreme(i,"towerHp","max")];default:return[]}}getValue(e,t){return Gn(e,t)}setValue(e,t,n){const i=Gn(e,t);Io(e,t,n);const r=Gn(e,t);i!==r&&this.emitStat(e,t,i,r)}damage(e,t,n){const i=e.wallHp,r=e.towerHp;No(e,t,n),e.wallHp!==i&&this.emitStat(e,v.Wall,i,e.wallHp),e.towerHp!==r&&this.emitStat(e,v.Tower,r,e.towerHp)}emitStat(e,t,n,i){const r=e.id;this.emit({type:"stat",playerId:r,resource:t,from:n,to:i})}aggregateValue(e){return vo(e,this.livingPlayers(),(t,n)=>this.getValue(t,n))}current(){return this.players[this.currentId]}opponentOf(e){return this.players[1-e.id]}cardOf(e){const t=this.cardsById.get(e.cardId);if(!t)throw new Error(`[MatchEngine] 未知卡牌 id: ${e.cardId}`);return t}canAfford(e,t){switch(t.type){case he.Brick:return e.bricks>=t.cost;case he.Gem:return e.gems>=t.cost;case he.Recruit:return e.recruits>=t.cost;default:return!1}}canDiscard(e,t){const n=e.hand[t];return n?this.cardOf(n).features.includes(mt.NotDiscardable)?e.hand.every(i=>this.cardOf(i).features.includes(mt.NotDiscardable)):!0:!1}playCard(e,t){return this.resolve(e,t,!1)}discardCard(e,t){return this.resolve(e,t,!0)}aiDecision(e){if(e.discarding)return{index:this.findDiscardIndex(e),discard:!0};for(let t=0;t<e.hand.length;t++)if(this.canAfford(e,this.cardOf(e.hand[t])))return{index:t,discard:!1};return{index:this.findDiscardIndex(e),discard:!0}}aiAct(){if(this.over||!this.current().isAi)return!1;const e=this.current(),{index:t,discard:n}=this.aiDecision(e);return n?this.discardCard(e.id,t):this.playCard(e.id,t)}resolve(e,t,n){if(this.over||e!==this.currentId)return!1;const i=this.players[e],r=i.hand[t];if(!r)return!1;const a=this.cardOf(r);let o=!1,l=!1,c=n,h=!1;if(i.discarding){if(!this.canDiscard(i,t))return!1;i.discarding=!1,c=!0,h=!0,o=!0}else if(c){if(!this.canDiscard(i,t))return!1}else{if(!this.canAfford(i,a))return!1;this.payCost(i,a),Vi(a.actions,this),o=a.features.includes(mt.PlayAgain),a.features.includes(mt.DrawDiscard)&&(l=!0,o=!0)}i.hand.splice(t,1),this.drawCard(i,!0,t),this.emit(c?{type:"discard",playerId:i.id,cardId:a.id,handIndex:t,forced:h}:{type:"play",playerId:i.id,cardId:a.id,handIndex:t});const d=this.checkVictory(i);return d?(this.finish(d),!0):(l&&(i.discarding=!0,this.emit({type:"discardMode",playerId:i.id})),this.advanceTurn(i,o),!0)}advanceTurn(e,t){if(t){this.emit({type:"turn",playerId:e.id,turnNumber:this.turnNumber,playAgain:!0});return}const n=this.opponentOf(e);this.currentId=n.id,this.turnNumber+=1,this.addResources(n),this.emit({type:"turn",playerId:n.id,turnNumber:this.turnNumber,playAgain:!1});const i=this.checkVictory(n);i&&this.finish(i)}payCost(e,t){switch(t.type){case he.Brick:e.bricks-=t.cost;break;case he.Gem:e.gems-=t.cost;break;case he.Recruit:e.recruits-=t.cost;break}}addResources(e){e.bricks+=e.quarries,e.gems+=e.magic,e.recruits+=e.dungeons,this.emit({type:"income",playerId:e.id,bricks:e.bricks,gems:e.gems,recruits:e.recruits})}drawCard(e,t,n){const i=this.deck[Math.floor(this.rng()*this.deck.length)],r={uid:++this.uidSeq,cardId:i.id};return n!==void 0&&n>=0&&n<=e.hand.length?e.hand.splice(n,0,r):e.hand.push(r),t&&this.emit({type:"draw",playerId:e.id,cardId:i.id}),r}findDiscardIndex(e){const t=e.hand.findIndex(n=>!this.cardOf(n).features.includes(mt.NotDiscardable));return t>=0?t:0}checkVictory(e){const t=this.opponentOf(e);return e.towerHp>=this.rules.winningTower?{winnerId:e.id,reason:"tower"}:e.bricks+e.gems+e.recruits>=this.rules.winningResources?{winnerId:e.id,reason:"resources"}:t.towerHp<=0?{winnerId:e.id,reason:"destroy"}:e.towerHp<=0?{winnerId:t.id,reason:"destroy"}:t.towerHp>=this.rules.winningTower?{winnerId:t.id,reason:"tower"}:t.bricks+t.gems+t.recruits>=this.rules.winningResources?{winnerId:t.id,reason:"resources"}:null}finish(e){this.over=!0,this.result=e,this.emit({type:"victory",winnerId:e.winnerId,reason:e.reason})}extreme(e,t,n){let i=e[0];for(const r of e)(n==="min"?r[t]<i[t]:r[t]>i[t])&&(i=r);return i}emit(e){this.events.push(e)}}const Et={fullscreen:!1,borderless:!1,vsync:!0,windowWidth:1280,windowHeight:720,masterVolume:.5,musicVolume:1,soundVolume:1,muteSound:!1,language:"zh",nickname:"Player",currentTavern:0},$t={games:0,wins:0,losses:0,winsByTower:0,winsByResources:0,winsByDestroy:0,totalTurns:0,bestWinTurns:null},Lt={FIRST_WIN:"FIRST_WIN",WIN_BY_TOWER:"WIN_BY_TOWER",WIN_BY_RESOURCES:"WIN_BY_RESOURCES",WIN_BY_DESTROY:"WIN_BY_DESTROY",SPEED_WIN:"SPEED_WIN"},Qe={MENU:"menu",TAVERN_SELECT:"tavern_select",CODEX:"codex",WIKI:"wiki",SETTINGS:"settings",STATS:"stats",IN_MATCH:"in_match",RESULT:"result"},Oo=15,Us=[261.63,329.63,392,440,523.25,440,392,329.63],Bn=.46;class Mo{ctx=null;masterGain=null;sfxBus=null;musicBus=null;musicFilter=null;musicTimer=null;musicStep=0;master=.5;sfxVolume=1;musicVolume=1;muted=!1;applySettings(e){this.master=e.masterVolume,this.sfxVolume=e.soundVolume,this.musicVolume=e.musicVolume,this.muted=e.muteSound,this.syncGains()}playStatSfx(e,t){if(e===v.Tower){this.play(t?"up":"damage");return}if(e===v.Wall){this.play(t?"heal":"damage");return}const n=e===v.Quarry||e===v.Magic||e===v.Dungeon;this.play(t?n?"quarry_up":"launch":"quarry_down")}play(e){if(!this.muted)switch(e){case"damage":this.noise({duration:.28,freqFrom:900,freqTo:150,gain:.4}),this.tone({freq:130,freqEnd:45,type:"sine",duration:.25,gain:.4});break;case"heal":this.tone({freq:523.25,type:"sine",duration:.12,gain:.25}),this.tone({freq:659.25,type:"sine",duration:.24,when:.1,gain:.25});break;case"deal":this.noise({duration:.07,filterType:"highpass",freqFrom:2500,gain:.16}),this.tone({freq:220,type:"triangle",duration:.05,gain:.1});break;case"launch":this.noise({duration:.32,filterType:"bandpass",freqFrom:500,freqTo:2200,q:2,gain:.22}),this.tone({freq:300,freqEnd:720,type:"triangle",duration:.3,gain:.14});break;case"quarry_up":this.tone({freq:392,type:"triangle",duration:.1,gain:.28}),this.tone({freq:523.25,type:"triangle",duration:.2,when:.09,gain:.28});break;case"quarry_down":this.tone({freq:392,type:"triangle",duration:.1,gain:.24}),this.tone({freq:261.63,type:"triangle",duration:.22,when:.1,gain:.24});break;case"up":this.tone({freq:523.25,type:"triangle",duration:.1,gain:.28}),this.tone({freq:659.25,type:"triangle",duration:.1,when:.09,gain:.28}),this.tone({freq:783.99,type:"triangle",duration:.24,when:.18,gain:.28});break;case"victory":[523.25,659.25,783.99,880,1046.5].forEach((t,n)=>{this.tone({freq:t,type:"triangle",duration:n===4?.6:.16,when:n*.13,gain:.28})});break;case"defeat":[329.63,261.63,220,174.61].forEach((t,n)=>{this.tone({freq:t,type:"sine",duration:.34,when:n*.18,gain:.3})});break;case"typing":this.tone({freq:1200,type:"square",duration:.04,gain:.07});break}}startMusic(){!this.ensureCtx()||this.musicTimer!==null||(this.musicStep=0,this.scheduleMusicNote(),this.musicTimer=setInterval(()=>this.scheduleMusicNote(),Bn*1e3))}stopMusic(){this.musicTimer!==null&&(clearInterval(this.musicTimer),this.musicTimer=null)}scheduleMusicNote(){if(!this.ctx||!this.musicFilter)return;const e=Us[this.musicStep%Us.length];this.musicStep++,this.tone({freq:e,type:"triangle",duration:Bn*2.4,attack:.06,gain:.16,destination:this.musicFilter}),this.tone({freq:e/2,type:"sine",duration:Bn*2.4,attack:.1,gain:.08,destination:this.musicFilter})}ensureCtx(){if(this.ctx)return this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx;try{const e=window.AudioContext??window.webkitAudioContext;if(!e)return null;const t=new e,n=t.createGain(),i=t.createGain(),r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=1400;const a=t.createGain();return i.connect(n),r.connect(a),a.connect(n),n.connect(t.destination),this.ctx=t,this.masterGain=n,this.sfxBus=i,this.musicBus=a,this.musicFilter=r,this.syncGains(),t.state==="suspended"&&t.resume(),t}catch(e){return console.warn("[audio] AudioContext 初始化失败:",e),null}}syncGains(){if(!this.ctx||!this.masterGain||!this.sfxBus||!this.musicBus)return;const e=this.ctx.currentTime;this.masterGain.gain.setTargetAtTime(this.muted?0:this.master,e,.05),this.sfxBus.gain.setTargetAtTime(this.sfxVolume,e,.05),this.musicBus.gain.setTargetAtTime(this.musicVolume*.5,e,.05)}tone(e){const t=this.ensureCtx();if(!t||!this.sfxBus)return;const n=e.destination??this.sfxBus,i=t.currentTime+(e.when??0),r=t.createOscillator(),a=t.createGain();r.type=e.type??"triangle",r.frequency.setValueAtTime(e.freq,i),e.freqEnd&&r.frequency.exponentialRampToValueAtTime(Math.max(1,e.freqEnd),i+e.duration);const o=e.gain??.3,l=e.attack??.008;a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(o,i+l),a.gain.exponentialRampToValueAtTime(1e-4,i+e.duration),r.connect(a),a.connect(n),r.start(i),r.stop(i+e.duration+.05)}noise(e){const t=this.ensureCtx();if(!t||!this.sfxBus)return;const n=t.currentTime+(e.when??0),i=Math.max(1,Math.floor(t.sampleRate*e.duration)),r=t.createBuffer(1,i,t.sampleRate),a=r.getChannelData(0);for(let d=0;d<i;d++)a[d]=Math.random()*2-1;const o=t.createBufferSource();o.buffer=r;const l=t.createBiquadFilter();l.type=e.filterType??"lowpass",l.Q.value=e.q??1,l.frequency.setValueAtTime(e.freqFrom,n),e.freqTo&&l.frequency.exponentialRampToValueAtTime(Math.max(10,e.freqTo),n+e.duration);const c=t.createGain(),h=e.gain??.3;c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(h,n+.012),c.gain.exponentialRampToValueAtTime(1e-4,n+e.duration),o.connect(l),l.connect(c),c.connect(this.sfxBus),o.start(n),o.stop(n+e.duration+.05)}}const Ge=new Mo,Vs={START_GAME:"开始对战",TAVERN_PRESETS:"酒馆选择",CODEX:"卡牌图鉴",SETTINGS:"设置",STATS:"战绩",EXIT:"退出游戏",BACK:"返回",CURRENT_TAVERN:"当前酒馆",TAGLINE:"汉末牌塔 · 单机对战",MENU_HINT:"左键出牌 · 右键弃牌 · 目标：建塔 / 积富 / 摧毁对方塔",MENU:"菜单",YOUR_TURN:"你的回合",AI_TURN:"AI 回合",AI_THINKING:"AI 思考中…",TURN_N:"第 {n} 回合",ACTING:"行动中",DISCARDING_TAG:"弃牌中",TOWER:"塔",WALL:"墙",RESOURCES:"资源",QUARRY:"采石场",MAGIC:"魔法",DUNGEON:"地下城",DISCARD_PROMPT:"卡牌效果：选择一张手牌弃置（点击即弃）",VICTORY:"胜利！",DEFEAT:"失败…",PLAY_AGAIN:"再来一局",BACK_TO_MENU:"返回主菜单",WIN_REASON_TOWER:"建塔胜利：塔高达到目标",WIN_REASON_RESOURCES:"积富胜利：资源总量达到目标",WIN_REASON_DESTROY:"毁塔胜利：摧毁了对方的塔",TURNS_N:"共 {n} 回合",GAME_IS_PAUSED:"游戏暂停",RESUME:"继续游戏",FORFEIT:"放弃对局，返回主菜单",PLAYER_SETTINGS:"玩家设置",NICKNAME:"昵称",SOUND_SETTINGS:"声音设置",MASTER:"主音量",MUSIC:"音乐",SOUNDS:"音效",MUTE_SOUND:"静音",LANGUAGE_SETTINGS:"语言设置",LANGUAGE:"语言",WINDOW_SETTINGS:"窗口设置",FULLSCREEN:"全屏",RESTORE_DEFAULTS:"恢复默认设置",LANG_ZH:"中文",LANG_EN:"English",STARTING_CONDITIONS:"初始条件",VICTORY_CONDITIONS:"胜利条件",TOWER_LEVELS:"塔",WALL_LEVELS:"墙",QUARRY_LEVELS:"采石场",MAGIC_LEVELS:"魔法",DUNGEON_LEVELS:"地下城",BRICK_QUANTITIES:"砖块",GEM_QUANTITIES:"宝石",RECRUIT_QUANTITIES:"兵种",TOWER_VICTORY:"建塔",RESOURCE_VICTORY:"积富",TAVERN:"酒馆",SELECTED:"已选择",NONE:"特殊",TAVERN_HINT:"选择酒馆决定初始资源与胜利条件，难度逐站递增",CODEX_TITLE:"卡牌图鉴",FILTER_ALL:"全部",CARDS_N:"{n} 张卡牌",CODEX_HINT:"浏览牌组中的全部卡牌",WIKI:"玩法百科",WIKI_TITLE:"玩法百科",WIKI_HINT:"文字说明 · 默认局面 · 可运行演示",WIKI_RUN_DEMO:"运行演示",WIKI_RERUN:"重新运行",WIKI_DEFAULT_SETUP:"默认局面",WIKI_DEMO_HAND:"演示手牌",WIKI_STEPS:"演示步骤",WIKI_YOU:"你方",WIKI_OPPONENT:"对方",WIKI_CAT_BASIC:"基础规则",WIKI_CAT_FEATURE:"卡牌特性",WIKI_CAT_COMBAT:"攻防战斗",WIKI_CAT_ADVANCED:"进阶机制",WIKI_CAT_VICTORY:"胜利条件",WIKI_ACTION_PLAY:"出牌",WIKI_ACTION_DISCARD:"弃牌",WIKI_REJECTED:"操作被拒绝",WIKI_IN_DISCARD:"弃牌中",WIKI_DEMO_OVER:"演示结束",WIKI_WINNER:"胜利方",STATS_TITLE:"战绩统计",GAMES:"总场次",WINS:"胜利",LOSSES:"失败",WIN_RATE:"胜率",WIN_BY_TOWER:"建塔胜利",WIN_BY_RESOURCES:"积富胜利",WIN_BY_DESTROY:"毁塔胜利",AVG_TURNS:"平均回合",BEST_WIN:"最快胜利",RESET_STATS:"清空战绩",NO_GAMES:"暂无对局记录，去赢一局吧",TAVERN_HARMONDALE:"「本店请客」",TAVERN_ERATHIA:"狮鹫之憩",TAVERN_TULAREAN_FOREST:"翡翠客栈",TAVERN_DEYJA:"势利哥布林",TAVERN_TATALIA:"忠诚佣兵",TAVERN_BRACADA_DESERT:"老地方酒馆",TAVERN_CELESTE:"祝福佳酿",TAVERN_PIT:"梵皮尔酒廊",TAVERN_EVERMORN_ISLAND:"欢笑修士",TAVERN_NIGHON:"命运愚行",TAVERN_BARROW_DOWNS:"矿工之家",TAVERN_TIDEWATER:"海滨酒馆",TAVERN_AVLEE:"盆栽小精灵",TAVERN_STONE_CITY:"格罗格烈酒",TAVERN_DAGGER_WOUND_ISLAND:"酒肉客栈",TAVERN_RAVENSHORE_KANTINA:"凯塞尔小馆",TAVERN_RAVENSHORE_OGRE:"跳舞食人魔",TAVERN_GARROTE_GORGE:"龙血客栈",TAVERN_ALVAR_MIHO:"米霍路边店",TAVERN_ALVAR_PROFIT:"利润之屋",TAVERN_IRONSAND_DESERT:"干喉酒馆",TAVERN_RAVAGE_ROAMING:"牛眼客栈",TAVERN_SHADOWSPIRE:"黑色佣兵团",TAVERN_MURMURWOODS:"旅者休憩",TAVERN_REGNA:"海盗窝"},Ks={CODEX:"Card Codex",BACK:"Back",CURRENT_TAVERN:"Current Tavern",TAGLINE:"Single-Player Card Duel",MENU_HINT:"Left click to play · Right click to discard · Win by tower / resources / destruction",MENU:"Menu",YOUR_TURN:"Your Turn",AI_TURN:"AI Turn",AI_THINKING:"AI thinking…",TURN_N:"Turn {n}",ACTING:"Acting",DISCARDING_TAG:"Discarding",TOWER:"Tower",WALL:"Wall",RESOURCES:"Resources",QUARRY:"Quarry",MAGIC:"Magic",DUNGEON:"Dungeon",DISCARD_PROMPT:"Card effect: discard a card from your hand (click to discard)",VICTORY:"Victory!",DEFEAT:"Defeat…",PLAY_AGAIN:"Play Again",BACK_TO_MENU:"Back to Main Menu",WIN_REASON_TOWER:"Tower victory: tower reached the target height",WIN_REASON_RESOURCES:"Resource victory: total resources reached the target",WIN_REASON_DESTROY:"Destruction victory: enemy tower destroyed",TURNS_N:"{n} turns",FORFEIT:"Forfeit and return to main menu",LANG_ZH:"中文",LANG_EN:"English",SELECTED:"Selected",TAVERN_HINT:"Taverns set starting resources and victory conditions; difficulty rises each stop",CODEX_TITLE:"Card Codex",FILTER_ALL:"All",CARDS_N:"{n} cards",CODEX_HINT:"Browse every card in the deck",WIKI:"Gameplay Wiki",WIKI_TITLE:"Gameplay Wiki",WIKI_HINT:"Rules · Default setup · Runnable demo",WIKI_RUN_DEMO:"Run Demo",WIKI_RERUN:"Run Again",WIKI_DEFAULT_SETUP:"Default Setup",WIKI_DEMO_HAND:"Demo hand",WIKI_STEPS:"Demo Steps",WIKI_YOU:"You",WIKI_OPPONENT:"Opponent",WIKI_CAT_BASIC:"Basics",WIKI_CAT_FEATURE:"Card Features",WIKI_CAT_COMBAT:"Combat",WIKI_CAT_ADVANCED:"Advanced",WIKI_CAT_VICTORY:"Victory",WIKI_ACTION_PLAY:"Play",WIKI_ACTION_DISCARD:"Discard",WIKI_REJECTED:"Action rejected",WIKI_IN_DISCARD:"Discarding",WIKI_DEMO_OVER:"Demo finished",WIKI_WINNER:"Winner",STATS_TITLE:"Match Statistics",GAMES:"Games",WINS:"Wins",LOSSES:"Losses",WIN_RATE:"Win Rate",WIN_BY_TOWER:"Tower Wins",WIN_BY_RESOURCES:"Resource Wins",WIN_BY_DESTROY:"Destruction Wins",AVG_TURNS:"Avg. Turns",BEST_WIN:"Fastest Win",RESET_STATS:"Reset Statistics",NO_GAMES:"No matches yet — go win one!"};function gs(s,e,t){return e==="zh"?Vs[s]??t?.get(s,"en")??Ks[s]??s:t?.get(s,e)??t?.get(s,"en")??Ks[s]??Vs[s]??s}function Lo(s,e,t,n){return gs(s,t,n).replace("{n}",String(e))}function $e(){const s=st(),e=Xe(),t=Q(()=>s.settings?.language??"zh"),n=Q(()=>e.data?.interfaceLocale??null);function i(a){return gs(a,t.value,n.value)}function r(a,o){return Lo(a,o,t.value,n.value)}return{t:i,tn:r,lang:t}}const An=At("stats",()=>{const s=X({...$t}),e=X(!1);async function t(){s.value=await window.gameAPI.getStats(),e.value=!0}async function n(){s.value=await window.gameAPI.saveStats(s.value)}async function i(c){const h=s.value;h.games+=1,h.totalTurns+=Math.max(0,c.turns),c.win?(h.wins+=1,c.reason==="tower"?h.winsByTower+=1:c.reason==="resources"?h.winsByResources+=1:c.reason==="destroy"&&(h.winsByDestroy+=1),(h.bestWinTurns===null||c.turns<h.bestWinTurns)&&(h.bestWinTurns=c.turns)):h.losses+=1,await n()}async function r(c){await i({win:!1,reason:null,turns:c})}async function a(){s.value={...$t},await n()}const o=Q(()=>s.value.games>0?Math.round(s.value.wins/s.value.games*100):0),l=Q(()=>s.value.games>0?(s.value.totalTurns/s.value.games).toFixed(1):"—");return{stats:s,loaded:e,load:t,record:i,recordForfeit:r,reset:a,winRate:o,avgTurns:l}}),Wo={main:Qe.MENU,tavern:Qe.TAVERN_SELECT,codex:Qe.CODEX,wiki:Qe.WIKI,settings:Qe.SETTINGS,stats:Qe.STATS};function Hs(s){window.gameAPI?.steamSetPresence(Wo[s]).catch(()=>{})}const Hi="arco-layout-debug";function Po(){try{return localStorage.getItem(Hi)==="1"}catch{return!1}}const et=At("ui",()=>{const s=X("main"),e=X(Po());function t(r){s.value=r,Hs(r)}function n(){s.value="main",Hs("main")}function i(){e.value=!e.value;try{localStorage.setItem(Hi,e.value?"1":"0")}catch{}}return{screen:s,layoutDebug:e,go:t,backToMain:n,toggleLayoutDebug:i}}),Go={[v.Tower]:"TOWER",[v.Wall]:"WALL",[v.Quarry]:"QUARRY",[v.Magic]:"MAGIC",[v.Dungeon]:"DUNGEON",[v.Bricks]:"BRICK_QUANTITIES",[v.Gems]:"GEM_QUANTITIES",[v.Recruits]:"RECRUIT_QUANTITIES"};function Bo(){return{x:window.innerWidth/2,y:-80}}function $o(s){return s===0?{x:-6.8,y:-3.6,z:.6}:{x:6.8,y:3.6,z:.6}}const zo={x:0,y:0,z:1},Uo=750,Vo=.5,it=At("match",()=>{const s=Xe(),e=st(),t=An(),n=et(),i=Ji(null),r=X("title"),a=X(!1),o=X(!1),l=X([]),c=X(0),h=X(0),d=X(null),p=X(fn),w=bo();let E=null,y=0,T=null,N=0,D=0,O=!0,M=null;function G(I){return gs(I,e.settings?.language??"zh",s.data?.interfaceLocale??null)}const L=Q(()=>l.value.find(I=>I.id===0)??null),W=Q(()=>l.value.find(I=>I.id===1)??null),u=Q(()=>r.value==="playing"&&!a.value&&!o.value&&c.value===0),f=Q(()=>r.value==="playing"&&c.value===0&&(L.value?.discarding??!1)),S=Q(()=>l.value.find(I=>I.id===d.value?.winnerId)??null),R=Q(()=>{switch(d.value?.reason){case"tower":return G("WIN_REASON_TOWER");case"resources":return G("WIN_REASON_RESOURCES");case"destroy":return G("WIN_REASON_DESTROY");default:return""}});function b(I){E=I}function $(I){const k=s.data;if(!k){console.error("[match] 游戏数据未加载，无法开局");return}Y(),N+=1,M=null,O=I?.aiVsAi!==!0;const z=e.settings;Ge.applySettings(z??Et),Ge.stopMusic();const B=k.taverns[z?.currentTavern??0],U=B?Do(B):fn,J=new Ki({deck:k.deck.cards,rules:U,names:[z?.nickname?.trim()||"你","AI"],aiVsAi:I?.aiVsAi===!0});i.value=J,y=0,J.start(),y=J.events.length,r.value="playing",d.value=null,a.value=!1,o.value=!1,Ie(Qe.IN_MATCH),x(),E?.ready.then(()=>x()),console.info(`[match] 开局 | 酒馆=${B?.name??"默认"} | 塔${U.startTower}/墙${U.startWall} | 胜线 塔${U.winningTower}/资源${U.winningResources} | 先手=${J.currentId}`),me()}function ee(){Y(),N+=1,i.value=null,r.value="title",d.value=null,a.value=!1,o.value=!1,l.value=[],n.backToMain(),Ie(Qe.MENU),Ge.startMusic()}function Ne(I){r.value==="playing"&&(o.value=I,I||me())}async function Le(){const I=r.value==="playing",k=h.value;ee(),I&&O&&await t.recordForfeit(k)}async function ae(I,k){f.value?await V(I,k):await Te(I,k)}async function Te(I,k){const z=i.value;if(!z||r.value!=="playing"||a.value||o.value||z.over)return;const B=z.current();if(B.isAi||B.id!==0||B.discarding)return;const U=B.hand[I];if(!U||!z.canAfford(B,z.cardOf(U)))return;a.value=!0,M=k??null,z.playCard(0,I)&&(await P(),x()),M=null,a.value=!1,me()}async function V(I,k){const z=i.value;if(!z||r.value!=="playing"||a.value||o.value||z.over)return;const B=z.current();if(B.isAi||B.id!==0||!z.canDiscard(B,I))return;a.value=!0,M=k??null,z.discardCard(0,I)&&(await P(),x()),M=null,a.value=!1,me()}function me(){const I=i.value;if(!I||I.over||r.value!=="playing"||o.value||!I.current().isAi)return;const k=N;T=window.setTimeout(()=>{T=null,!(k!==N||o.value)&&F()},Uo)}async function F(){const I=i.value;if(!I||I.over||r.value!=="playing"||o.value)return;a.value=!0,I.aiAct()&&(await P(),x()),a.value=!1,I.over||me()}function Y(){T!==null&&(window.clearTimeout(T),T=null)}async function P(){const I=i.value;if(!I)return;const k=I.events.slice(y);y=I.events.length;const z=[];for(const B of k)switch(B.type){case"play":z.push(be(B.playerId,B.cardId,!1));break;case"discard":z.push(be(B.playerId,B.cardId,!0));break;case"draw":Ge.play("deal");break;case"stat":ne(B.playerId,B.resource,B.from,B.to);break;case"victory":le(B.winnerId);break}await Promise.all(z)}function be(I,k,z){const B=s.cardById(k);if(!B||!E)return Promise.resolve();const U=I===0&&M?M:Bo(),J=z?$o(I):zo,q=s.cardGlyph(B);return E.flyCard({cardType:B.type,glyph:q,fromCss:U,toWorld:J,duration:Vo}).catch(ke=>console.warn("[match] 卡牌飞行失败:",ke))}function ne(I,k,z,B){const U=B>z,J=I===0?0:1,q=k===v.Wall?"wall":"tower";if(E?.burst(J,U?"heal":"damage",q),Ge.playStatSfx(k,U),E){const ke=Go[k],K=ke?G(ke):"",se=B-z,Fe=`${se>0?"+":""}${se}${K}`,xe=E.worldToCss(E.anchor(J,q));w.emit("float",{id:++D,x:xe.x,y:xe.y,text:Fe,increased:U})}}function le(I){if(r.value="over",d.value=i.value?.result??null,Ge.play(I===0?"victory":"defeat"),console.info(`[match] 对局结束 | 胜者=${I===0?"人类":"AI"} | 原因=${d.value?.reason} | 回合=${h.value}`),O&&t.record({win:I===0,reason:d.value?.reason??null,turns:h.value}),Ie(Qe.RESULT),O&&I===0){j(Lt.FIRST_WIN);const k=d.value?.reason;k==="tower"?j(Lt.WIN_BY_TOWER):k==="resources"?j(Lt.WIN_BY_RESOURCES):k==="destroy"&&j(Lt.WIN_BY_DESTROY),h.value<=Oo&&j(Lt.SPEED_WIN)}}function Ie(I){window.gameAPI.steamSetPresence(I).catch(()=>{})}function j(I){window.gameAPI.steamUnlock(I).catch(()=>{})}function x(){const I=i.value;I&&(l.value=I.players.map(k=>({id:k.id,name:k.name,isAi:k.isAi,discarding:k.discarding,towerHp:k.towerHp,wallHp:k.wallHp,quarries:k.quarries,magic:k.magic,dungeons:k.dungeons,bricks:k.bricks,gems:k.gems,recruits:k.recruits,hand:k.hand.map((z,B)=>{const U=k.isAi?null:s.cardById(z.cardId)??null;return{uid:z.uid,cardId:z.cardId,card:U,affordable:U?I.canAfford(k,U):!1,discardable:I.canDiscard(k,B)}})})),c.value=I.currentId,h.value=I.turnNumber,d.value=I.result,p.value=I.rules,E?.setSeatStats(0,I.players[0].towerHp,I.players[0].wallHp),E?.setSeatStats(1,I.players[1].towerHp,I.players[1].wallHp))}return{phase:r,busy:a,paused:o,players:l,currentId:c,turnNumber:h,result:d,rules:p,fx:w,human:L,ai:W,isHumanTurn:u,humanDiscarding:f,winner:S,winReasonText:R,bindScene:b,startMatch:$,backToTitle:ee,forfeitToMenu:Le,setPaused:Ne,humanClickCard:ae,humanPlay:Te,humanDiscard:V}}),$n=24e4,Ko=1200;function pt(s){return Math.round(s*10)/10}function Ke(s){return Math.round(s*100)/100}function Zn(s){return s.length?s.reduce((e,t)=>e+t,0)/s.length:0}function Fs(s){return s.length?{avg:Ke(Zn(s)),min:Ke(Math.min(...s)),max:Ke(Math.max(...s))}:{avg:0,min:0,max:0}}function zn(s,e){if(!s.length)return 0;const t=[...s].sort((i,r)=>i-r),n=Math.min(t.length-1,Math.max(0,Math.ceil(e/100*t.length)-1));return t[n]}function xs(s,e){const t={};for(const n of s){const i=e(n);t[i]=(t[i]??0)+1}return t}function Ho(s){return new Promise(e=>window.setTimeout(e,s))}function Fo(){return new URLSearchParams(window.location.search).has("automator")}function xo(s){const{match:e,settings:t,gameData:n}=s,i=new URLSearchParams(window.location.search),r=Math.max(1,Number.parseInt(i.get("matches")??"10",10)||10),a=[],o=[],l=[];let c=0,h=0,d=0,p=0,w=0;const E=performance.now();function y(u){if(u-w<2e3)return;w=u;const f=performance.memory;f&&l.push(f.usedJSHeapSize/1048576)}function T(u){if(h>0){const f=u-h;f<=500&&a.push(f)}h=u,p===0&&(p=u),d++,u-p>=1e3&&(o.push(pt(d*1e3/(u-p))),d=0,p=u),y(u),c=window.requestAnimationFrame(T)}c=window.requestAnimationFrame(T);const N=t.settings;N&&(N.muteSound=!0,N.masterVolume=0,N.musicVolume=0,N.soundVolume=0),Ge.applySettings(N??{...Et,muteSound:!0,masterVolume:0});const D=[];let O=!1,M=0;const G=window.setTimeout(()=>{W(!1,`global timeout after ${r} matches budget`)},r*$n+6e4);window.addEventListener("error",u=>{W(!1,`renderer error: ${u.message} @ ${u.filename}:${u.lineno}`)}),window.addEventListener("unhandledrejection",u=>{const f=u.reason;W(!1,`unhandledrejection: ${f?.message??String(f)}`)});async function L(){if(!n.data){await W(!1,"game data not loaded");return}console.info(`[automator] 开始挂机 | 目标局数=${r}`);for(let u=1;u<=r;u++){if(O)return;const f=n.data.taverns[t.settings?.currentTavern??0]?.name??"默认酒馆",S=performance.now();window.clearTimeout(M),M=window.setTimeout(()=>{W(!1,`match ${u} timeout after ${$n/1e3}s`)},$n),e.startMatch({aiVsAi:!0}),await new Promise($=>{const ee=ln(()=>e.phase,Ne=>{Ne==="over"&&(ee(),$())})}),window.clearTimeout(M);const R=(performance.now()-S)/1e3,b={index:u,tavern:f,winnerId:e.result?.winnerId??-1,reason:e.result?.reason??"unknown",turns:e.turnNumber,seconds:pt(R)};D.push(b),console.info(`[automator] 对局 ${u}/${r} 结束 | 胜者=P${b.winnerId} | 原因=${b.reason} | 回合=${b.turns} | 耗时=${b.seconds}s`),u<r&&await Ho(Ko)}await W(!0)}async function W(u,f){if(O)return;O=!0,window.clearTimeout(G),window.clearTimeout(M),window.cancelAnimationFrame(c);const S=D.map(ee=>ee.turns),R=D.map(ee=>ee.seconds),b=o,$={generatedAt:new Date().toISOString(),version:"",config:{matches:r,platform:navigator.platform,userAgent:navigator.userAgent},completed:u,abortedReason:f,matches:D,totals:{totalSeconds:pt((performance.now()-E)/1e3),matchesCompleted:D.length},winners:xs(D,ee=>`P${ee.winnerId}`),reasons:xs(D,ee=>ee.reason),turns:Fs(S),matchSeconds:Fs(R),fps:{avg:Ke(Zn(b)),min:Ke(Math.min(...b)),p5:Ke(zn(b,5)),samples:b.length},frameMs:{avg:Ke(Zn(a)),p95:Ke(zn(a,95)),p99:Ke(zn(a,99)),max:Ke(Math.max(...a)),samples:a.length},rendererHeapMB:{first:pt(l[0]??0),last:pt(l[l.length-1]??0),max:pt(l.length?Math.max(...l):0),samples:l.length},fpsSeries:o};console.info(`[automator] 汇总 | 完成=${u} | 局数=${D.length} | 总时长=${$.totals.totalSeconds}s | FPS avg=${$.fps.avg} min=${$.fps.min} | 帧时 p99=${$.frameMs.p99}ms max=${$.frameMs.max}ms | 堆峰值=${$.rendererHeapMB.max}MB`);try{await window.gameAPI.automatorReport($)}catch(ee){console.error("[automator] 报告回传失败:",ee),window.close()}}L()}const jo=["type","disabled"],de=Se({__name:"GButton",props:{variant:{default:"primary"},size:{default:"md"},disabled:{type:Boolean,default:!1},type:{default:"button"}},emits:["click"],setup(s,{emit:e}){const t=s,n=e,i=Q(()=>({"g-btn":!0,[`g-btn--${t.variant}`]:!0,[`g-btn--${t.size}`]:!0,"g-btn--disabled":t.disabled}));return(r,a)=>(A(),C("button",{type:s.type,class:_e(i.value),disabled:s.disabled,onClick:a[0]||(a[0]=o=>n("click",o))},[Zi(r.$slots,"default")],10,jo))}}),qo={class:"main-menu"},Yo={class:"main-menu__tagline"},Qo={class:"main-menu__buttons"},Jo={class:"main-menu__tavern-line"},Zo={class:"main-menu__tavern-name"},Xo={class:"main-menu__hint"},el=Se({__name:"MainMenu",setup(s){const e=it(),t=st(),n=Xe(),i=An(),r=et(),{t:a}=$e();pn(()=>{t.settings&&Ge.applySettings(t.settings),Ge.startMusic()});const o=Q(()=>{const h=t.settings?.currentTavern??0,d=n.data?.taverns[h];return d?a(d.id):"—"});function l(){e.startMatch()}function c(){window.close()}return(h,d)=>(A(),C("div",qo,[d[5]||(d[5]=g("h1",{class:"main-menu__logo"},"汉末牌塔",-1)),d[6]||(d[6]=g("p",{class:"main-menu__subtitle"},"Hanmo Card Tower",-1)),g("p",Yo,_(m(a)("TAGLINE")),1),g("div",Qo,[ie(de,{size:"lg",onClick:l},{default:ue(()=>[te(_(m(a)("START_GAME")),1)]),_:1}),ie(de,{size:"md",onClick:d[0]||(d[0]=p=>m(r).go("tavern"))},{default:ue(()=>[te(_(m(a)("TAVERN_PRESETS")),1)]),_:1}),ie(de,{size:"md",onClick:d[1]||(d[1]=p=>m(r).go("codex"))},{default:ue(()=>[te(_(m(a)("CODEX")),1)]),_:1}),ie(de,{size:"md",onClick:d[2]||(d[2]=p=>m(r).go("wiki"))},{default:ue(()=>[te(_(m(a)("WIKI")),1)]),_:1}),ie(de,{size:"md",onClick:d[3]||(d[3]=p=>m(r).go("stats"))},{default:ue(()=>[te(_(m(a)("STATS")),1)]),_:1}),ie(de,{size:"md",onClick:d[4]||(d[4]=p=>m(r).go("settings"))},{default:ue(()=>[te(_(m(a)("SETTINGS")),1)]),_:1}),ie(de,{variant:"ghost",size:"md",onClick:c},{default:ue(()=>[te(_(m(a)("EXIT")),1)]),_:1})]),g("p",Jo,[te(_(m(a)("CURRENT_TAVERN"))+"：",1),g("span",Zo,_(o.value),1),m(i).stats.games>0?(A(),C(ye,{key:0},[te(" · "+_(m(i).stats.wins)+" "+_(m(a)("WINS"))+" / "+_(m(i).stats.games),1)],64)):Z("",!0)]),g("p",Xo,_(m(a)("MENU_HINT")),1)]))}}),tl={class:"tavern"},nl={class:"tavern__panel g-panel"},sl={class:"tavern__head"},il={class:"tavern__title"},rl={class:"tavern__hint"},al={class:"tavern__list"},ol=["onClick"],ll={class:"tavern__row-head"},cl={class:"tavern__index"},ul={class:"tavern__name"},dl={key:0,class:"tavern__badge"},hl={class:"tavern__conditions"},fl={class:"tavern__cond-group"},pl={class:"tavern__cond-group tavern__cond-group--victory"},gl={class:"tavern__cond"},ml={class:"tavern__cond"},yl=Se({__name:"TavernSelect",setup(s){const e=st(),t=Xe(),n=et(),{t:i}=$e(),r=Q(()=>t.data?.taverns??[]),a=Q(()=>e.settings?.currentTavern??0);function o(h){return i(h.id)}async function l(h){await e.update({currentTavern:h})}function c(h){return[{key:"TOWER_LEVELS",value:h.startingTower},{key:"WALL_LEVELS",value:h.startingWall},{key:"QUARRY_LEVELS",value:h.startingQuarry},{key:"MAGIC_LEVELS",value:h.startingMagic},{key:"DUNGEON_LEVELS",value:h.startingDungeon},{key:"BRICK_QUANTITIES",value:h.startingBricks},{key:"GEM_QUANTITIES",value:h.startingGems},{key:"RECRUIT_QUANTITIES",value:h.startingBeasts}]}return(h,d)=>(A(),C("div",tl,[g("div",nl,[g("header",sl,[ie(de,{variant:"ghost",size:"md",onClick:d[0]||(d[0]=p=>m(n).backToMain())},{default:ue(()=>[te(_(m(i)("BACK")),1)]),_:1}),g("h2",il,_(m(i)("TAVERN_PRESETS")),1),d[1]||(d[1]=g("span",{class:"tavern__spacer"},null,-1))]),g("p",rl,_(m(i)("TAVERN_HINT")),1),g("div",al,[(A(!0),C(ye,null,Ae(r.value,(p,w)=>(A(),C("button",{key:p.id,class:_e(["tavern__row",{"tavern__row--selected":w===a.value}]),onClick:E=>l(w)},[g("div",ll,[g("span",cl,_(w+1),1),g("span",ul,_(o(p)),1),w===a.value?(A(),C("span",dl,_(m(i)("SELECTED")),1)):Z("",!0)]),g("div",hl,[g("span",fl,[g("em",null,_(m(i)("STARTING_CONDITIONS")),1),(A(!0),C(ye,null,Ae(c(p),E=>(A(),C("label",{key:E.key,class:"tavern__cond"},[te(_(m(i)(E.key))+" ",1),g("b",null,_(E.value),1)]))),128))]),g("span",pl,[g("em",null,_(m(i)("VICTORY_CONDITIONS")),1),g("label",gl,[te(_(m(i)("TOWER_VICTORY"))+" ",1),g("b",null,_(p.winningTower),1)]),g("label",ml,[te(_(m(i)("RESOURCE_VICTORY"))+" ",1),g("b",null,_(p.winningResources),1)])])])],10,ol))),128))])])]))}}),_l={class:"card-face__layer card-face__name"},wl={class:"card-face__layer card-face__glyph"},Sl={class:"card-face__seal"},Tl={class:"card-face__layer card-face__desc"},El={class:"card-face__layer card-face__cost"},bl=Se({__name:"CodexCard",props:{card:{}},setup(s){const e=s,t=Xe(),n=st(),i=Q(()=>t.cardText(e.card,n.settings?.language??"zh")),r=Q(()=>t.cardGlyph(e.card)),a=Q(()=>{switch(e.card.type){case he.Brick:return"brick";case he.Gem:return"gem";case he.Recruit:return"recruit";default:return"none"}});return(o,l)=>(A(),C("div",{class:_e(["card-face card-face--codex",`card-face--${a.value}`])},[l[0]||(l[0]=g("div",{class:"card-face__band"},null,-1)),g("div",_l,_(i.value.name),1),g("div",wl,[g("span",Sl,_(r.value),1)]),g("div",Tl,_(i.value.description),1),g("div",El,_(s.card.cost),1)],2))}}),kl={class:"codex"},Al={class:"codex__panel g-panel"},Il={class:"codex__head"},Rl={class:"codex__title"},vl={class:"codex__count"},Nl={class:"codex__filters"},Dl=["onClick"],Cl={class:"codex__grid"},Ol=Se({__name:"CodexPage",setup(s){const e=Xe(),t=et(),{t:n,tn:i}=$e(),r=X("all"),a=[{key:"all",label:n("FILTER_ALL")},{key:he.Brick,label:n("BRICK_QUANTITIES")},{key:he.Gem,label:n("GEM_QUANTITIES")},{key:he.Recruit,label:n("RECRUIT_QUANTITIES")},{key:he.None,label:n("NONE")}],o=Q(()=>{const l=e.data?.deck.cards??[];return r.value==="all"?l:l.filter(c=>c.type===r.value)});return(l,c)=>(A(),C("div",kl,[g("div",Al,[g("header",Il,[ie(de,{variant:"ghost",size:"md",onClick:c[0]||(c[0]=h=>m(t).backToMain())},{default:ue(()=>[te(_(m(n)("BACK")),1)]),_:1}),g("h2",Rl,_(m(n)("CODEX_TITLE")),1),g("span",vl,_(m(i)("CARDS_N",o.value.length)),1)]),g("div",Nl,[(A(),C(ye,null,Ae(a,h=>g("button",{key:h.key,class:_e(["codex__chip",{"codex__chip--active":r.value===h.key}]),onClick:d=>r.value=h.key},_(h.label),11,Dl)),64))]),g("div",Cl,[(A(!0),C(ye,null,Ae(o.value,h=>(A(),ce(bl,{key:h.id,card:h},null,8,["card"]))),128))])])]))}}),an=[{id:"income",category:"basic",title:{zh:"回合收入",en:"Turn Income"},summary:{zh:["每个回合开始时，当前行动方获得收入：砖块 += 采石场等级，宝石 += 魔法等级，兵种 += 地下城等级。","先手在对局开始时立即获得一次收入；之后每次换手轮到对方时，对方获得收入。","出牌带来的额外回合（「再动」）不换手，因此不发放收入。"],en:["At the start of each turn, the acting player gains income: Bricks += Quarry level, Gems += Magic level, Recruits += Dungeon level.","The first player collects income immediately when the match starts; afterwards the opponent collects each time the turn passes to them.",'Extra turns from "Play again" cards do not pass the turn, so they grant no income.']},setup:{seed:11,self:{hand:["rock_garden"],state:{bricks:100}},opponent:{state:{quarries:6,magic:4,dungeons:3,bricks:10,gems:5,recruits:8}}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【岩石花园】：普通出牌后换手，对方获得回合收入（砖 +6 / 宝石 +4 / 兵 +3）",en:"Play Rock Garden: a normal play passes the turn; the opponent collects income (+6 bricks / +4 gems / +3 recruits)"}}]},{id:"play-cost",category:"basic",title:{zh:"出牌费用",en:"Card Cost"},summary:{zh:["出牌必须支付费用：砖石牌消耗砖块、宝石牌消耗宝石、兵种牌消耗兵种，费用在卡牌效果结算前扣除。","对应资源不足时无法打出该牌（操作被拒绝，状态不变）。","弃牌不需要支付任何费用，也不触发卡牌效果。"],en:["Playing a card costs resources: Brick cards spend Bricks, Gem cards spend Gems, Recruit cards spend Recruits. The cost is paid before the card effect resolves.","If you cannot afford the cost, the play is rejected and nothing changes.","Discarding a card costs nothing and never triggers its effect."]},setup:{seed:12,self:{hand:["quartz"],state:{gems:10}}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【石英】：支付 1 宝石费用（10 → 9），效果塔 +1；「再动」使回合不换手",en:'Play Quartz: pay 1 gem (10 → 9), gain +1 Tower; "Play again" keeps the turn'}}]},{id:"discard",category:"basic",title:{zh:"弃牌换手",en:"Discard & Pass"},summary:{zh:["任何时候都可以弃掉一张手牌：不扣费、不触发卡牌效果，补抽一张新牌后直接换手。","当手牌全都负担不起、或没有想打的牌时，弃牌是推进回合的方式。","弃牌后轮到对方，对方照常获得回合收入。"],en:["You may always discard a card from your hand: it costs nothing, triggers no effect, and you draw a replacement before the turn passes.","When you cannot afford any card — or simply want none of them — discarding is how you pass the turn.","The opponent then takes over and collects their normal income."]},setup:{seed:13,self:{state:{bricks:0,gems:0,recruits:0}}},actions:[{kind:"discard",player:0,handIndex:0,label:{zh:"弃掉一张手牌：没有任何属性被消耗，回合直接交给对方",en:"Discard a card: no resource is spent and the turn passes to the opponent"}}]},{id:"building-upgrade",category:"basic",title:{zh:"升级建筑",en:"Upgrading Buildings"},summary:{zh:["采石场、魔法塔、地下城三种建筑决定每回合的收入量，升级建筑（Quarry/Magic/Dungeon.Gain）会永久提高对应收入。","升级在之后每次获得收入时生效：例如采石场 5 → 6，以后每个回合的砖块收入都从 +5 变为 +6。","也有卡牌会降低建筑等级（自己或对方的）——拆对方建筑是削弱其经济的常用手段，详见「拆除对方建筑」。"],en:["Quarry, Magic and Dungeon are the three production buildings; upgrading them (Quarry/Magic/Dungeon.Gain) permanently raises the matching income.","The upgrade pays off on every future income: for example Quarry 5 → 6 turns each brick income from +5 into +6.",'Some cards instead reduce building levels (yours or the enemy’s) — tearing down enemy buildings cripples their economy; see "Razing Buildings".']},setup:{seed:14,self:{hand:["miners"],state:{bricks:100}},opponent:{hand:["quartz"]}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【矿工】：采石场 5 → 6，然后换手（对方本轮收入仍按旧等级 +5）",en:"Play Miners: Quarry 5 → 6, then pass (the opponent’s income this turn is still +5 at the old level)"}},{kind:"discard",player:1,handIndex:0,label:{zh:"对方弃牌换手：轮到你时收入已按新采石场结算——砖块 +6（升级前只有 +5）",en:"The opponent discards and passes back: your income now uses the upgraded quarry — +6 bricks (it was +5 before)"}}]},{id:"unaffordable",category:"basic",title:{zh:"费用不足被拒绝",en:"Unaffordable Plays Rejected"},summary:{zh:["当对应资源不够支付卡牌费用时，出牌会被直接拒绝：不扣费、不触发效果、手牌不变、回合也不换手。","被拒绝后你仍可以改打其他负担得起的牌，或弃掉一张牌换手。","本例中宝石只有 3，而【磁石】费用为 5：尝试打出被拒，随后弃掉另一张牌结束回合。"],en:["When you cannot pay a card’s cost, the play is rejected outright: no cost is paid, no effect fires, your hand is unchanged and the turn does not pass.","After a rejection you may still play another card you can afford, or discard a card to pass.","Here you hold only 3 gems while Lodestone costs 5: the play is refused, so you discard another card to end the turn."]},setup:{seed:15,self:{hand:["lodestone","amethyst"],state:{gems:3}}},actions:[{kind:"play",player:0,handIndex:0,expectFail:!0,label:{zh:"尝试打出【磁石】（费用 5，宝石只有 3）：操作被拒绝，局面没有任何变化",en:"Try to play Lodestone (cost 5, only 3 gems): rejected — nothing on the board changes"}},{kind:"discard",player:0,handIndex:1,label:{zh:"改弃【紫水晶】换手：弃牌不需要费用，磁石仍留在手中",en:"Discard Amethyst instead to pass: discarding costs nothing, and Lodestone stays in hand"}}]},{id:"play-again",category:"feature",title:{zh:"再动一回合",en:"Play Again"},summary:{zh:["带有「再动（playAgain）」特性的牌打出后，你继续行动：不换手、对方不获得收入、回合数不变。","连续打出多张「再动」牌，可以在一个回合内连续行动。","注意：额外行动不发收入，资源只能靠卡牌效果本身补充。"],en:['Cards with the "Play again" feature let you act again after playing them: the turn does not pass, the opponent gets no income, and the turn counter does not advance.','Chaining several "Play again" cards lets you act multiple times in a single turn.',"Note that extra actions grant no income — resources only come from the card effects themselves."]},setup:{seed:21,self:{hand:["lucky_cache"],state:{bricks:10,gems:10}}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【幸运宝藏】：砖 +2、宝石 +2，回合仍属于你（回合数不变）",en:"Play Lucky Cache: +2 Bricks, +2 Gems, and the turn stays yours (turn counter unchanged)"}}]},{id:"draw-discard",category:"feature",title:{zh:"出牌后强制弃牌",en:"Draw & Discard"},summary:{zh:["带有「抽弃（drawDiscard）」特性的牌打出后，进入强制弃牌状态：必须再弃掉一张手牌才能继续行动。","被强制弃掉的牌不触发任何效果、不扣费；弃完后回合仍属于你（相当于再动一次）。","弃牌阶段点击任意手牌即视为弃置。"],en:['Cards with the "Draw & discard" feature put you into a forced-discard state after they are played: you must discard one more card before you can continue.',"The forced discard triggers no effect and costs nothing; afterwards the turn is still yours (like an extra action).","While in this state, clicking any card in hand discards it."]},setup:{seed:22,self:{hand:["prism","amethyst"],state:{gems:10}}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【棱镜】：支付 2 宝石，进入「强制弃牌」状态（回合仍属于你）",en:"Play Prism: pay 2 gems and enter the forced-discard state (the turn stays yours)"}},{kind:"discard",player:0,handIndex:1,label:{zh:"弃掉一张手牌完成强制弃牌：不触发效果，之后继续你的回合",en:"Discard a card to satisfy the forced discard: no effect fires, then your turn continues"}}]},{id:"not-discardable",category:"feature",title:{zh:"不可弃牌",en:"Cannot Be Discarded"},summary:{zh:["带有「不可弃（notDiscardable）」特性的牌不能被主动弃掉。","只要手里还有其他可弃的牌，尝试弃这类牌会被直接拒绝，状态不变。","只有当手牌全部都是「不可弃」牌时，才允许弃掉它们。"],en:['Cards with the "Not discardable" feature cannot be discarded on purpose.',"As long as you hold any other discardable card, trying to discard one of these is rejected and nothing changes.",'They can only be discarded when your entire hand consists of "Not discardable" cards.']},setup:{seed:23,self:{hand:["lodestone","amethyst"],state:{gems:0}}},actions:[{kind:"discard",player:0,handIndex:0,expectFail:!0,label:{zh:"尝试弃掉【磁石】（不可弃）：被拒绝，手牌与局面不变",en:"Try to discard Lodestone (not discardable): rejected — hand and board unchanged"}},{kind:"discard",player:0,handIndex:1,label:{zh:"弃掉另一张可弃的手牌：成功，回合换手（磁石仍留在手中）",en:"Discard the other, discardable card: it succeeds and the turn passes (Lodestone stays in hand)"}}]},{id:"damage-wall",category:"combat",title:{zh:"伤害先打墙",en:"Damage Hits the Wall First"},summary:{zh:["普通伤害（Damage）优先削减城墙：城墙先扣，城墙扣到 0 之后，溢出的部分才打到塔。","城墙是塔的缓冲：高城墙可以完全吸收小额伤害，塔毫发无损。","注意区分：专门打塔的效果（Tower.Lose）无视城墙，详见「绕墙打塔」条目。"],en:["Regular damage is applied to the Wall first: the wall absorbs it, and only the overflow — once the wall reaches 0 — carries over to the Tower.","The wall is your tower’s buffer: a tall wall completely soaks up small hits, leaving the tower untouched.",'Note the difference: tower-targeted effects (Tower.Lose) ignore the wall entirely — see the "Tower damage" entry.']},setup:{seed:31,self:{hand:["moody_goblins"],state:{recruits:100,gems:10}},opponent:{state:{wallHp:50,towerHp:50}}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【阴沉哥布林】：对方受 4 点普通伤害，城墙 50 → 46，塔不受影响",en:"Play Moody Goblins: the opponent takes 4 regular damage — Wall 50 → 46, Tower untouched"}}]},{id:"damage-overflow",category:"combat",title:{zh:"墙破伤害溢出到塔",en:"Overflow Hits the Tower"},summary:{zh:["当普通伤害超过剩余城墙时，先把城墙击碎，溢出的伤害全额作用到塔上。","本例中对方城墙只有 2：4 点伤害先用 2 点击碎城墙，剩下 2 点直接打到塔。","所以压低对方城墙后，一发大额伤害可以同时破墙、伤塔。"],en:["When regular damage exceeds the remaining wall, the wall is destroyed first and the overflow is dealt to the tower in full.","Here the opponent’s wall is only 2: 4 damage spends 2 to shatter the wall, and the remaining 2 strikes the tower.","Once you have chipped the enemy wall down, one big hit can both break the wall and wound the tower."]},setup:{seed:32,self:{hand:["moody_goblins"],state:{recruits:100,gems:10}},opponent:{state:{wallHp:2,towerHp:50}}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【阴沉哥布林】：4 点伤害击碎 2 点城墙后，溢出 2 点打到塔（塔 50 → 48）",en:"Play Moody Goblins: 4 damage shatters the 2-point wall, then 2 overflow hits the tower (50 → 48)"}}]},{id:"tower-damage",category:"combat",title:{zh:"绕墙打塔",en:"Tower Damage Bypasses the Wall"},summary:{zh:["专门针对塔的伤害（描述为「对敌方塔造成 N 点伤害」，即 Tower.Lose）无视城墙，直接削减塔高。","无论城墙多高都无法防御此类效果。","【太阳耀斑】这类牌还会同步建造自己的塔，是攻守兼备的破塔手段。"],en:['Tower-targeted damage (described as "N damage to enemy tower", i.e. Tower.Lose) ignores the wall and cuts the tower directly.',"No matter how tall the wall is, it cannot block these effects.","Cards like Solar Flare also build your own tower at the same time — offence and defence in one play."]},setup:{seed:33,self:{hand:["solar_flare"],state:{gems:100}},opponent:{state:{wallHp:50,towerHp:50}}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【太阳耀斑】：己方塔 +2，对方塔 -2（50 → 48）；对方城墙 50 原封不动",en:"Play Solar Flare: your tower +2, enemy tower -2 (50 → 48); the enemy wall of 50 is untouched"}}]},{id:"build",category:"combat",title:{zh:"建塔与修墙",en:"Building Tower & Wall"},summary:{zh:["增益牌可以提升自己的城墙与塔：Wall.Gain 修墙、Tower.Gain 建塔，还可能附带资源或兵种。","城墙承受普通伤害，塔高则关系到建塔胜利——两者都要经营。","【岩石花园】一张牌同时修墙、建塔、招募兵种，是低费均衡发育的代表。"],en:["Beneficial cards raise your own wall and tower: Wall.Gain repairs the wall, Tower.Gain builds the tower, often with bonus resources or recruits.","The wall absorbs regular damage while tower height decides a tower victory — both need investment.","Rock Garden repairs the wall, builds the tower and recruits troops in a single cheap card — balanced growth in one play."]},setup:{seed:34,self:{hand:["rock_garden"],state:{bricks:100}}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【岩石花园】：墙 +1、塔 +1、兵种 +2（仅支付 1 砖块）",en:"Play Rock Garden: +1 Wall, +1 Tower, +2 Recruits (for just 1 brick)"}}]},{id:"self-damage",category:"combat",title:{zh:"自伤反噬",en:"Self Damage Backfire"},summary:{zh:["部分高威力卡牌带有自伤效果（描述为「你受到 N 点伤害」）：自己同样承受普通伤害，先打自己的墙、再打自己的塔。","如果自己的城墙为 0 且塔高不足，自伤可能把自己的塔击碎——立即判负，对方毁塔胜利。","出手前务必算好：高伤害牌的代价可能是整场对局。"],en:['Some powerful cards carry a self-damage cost ("you take N damage"): you suffer regular damage too — against your own wall first, then your own tower.',"If your wall is 0 and your tower is too low, the backfire can destroy your own tower — you lose instantly, counted as the opponent’s destruction victory.","Always do the maths before playing: the price of a heavy hitter can be the whole match."]},setup:{seed:35,self:{hand:["goblin_mob"],state:{recruits:100,wallHp:0,towerHp:2}},opponent:{state:{wallHp:0,towerHp:50}}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【哥布林暴民】：对方 6 点伤害（塔 50 → 44），自己 3 点自伤——己方塔 2 → 0，自爆判负！",en:"Play Goblin Mob: 6 damage to the enemy (tower 50 → 44), but 3 self damage — your tower 2 → 0: self-destruct, you lose!"}}]},{id:"building-destroy",category:"combat",title:{zh:"拆除对方建筑",en:"Razing Buildings"},summary:{zh:["攻击不只能打墙打塔：直接降低对方建筑等级（opponent.Quarry/Magic/Dungeon.Lose）可以永久削弱对方的每回合收入。","本例对方采石场 8 级、砖块 10：一张【坍塌！】拆掉 1 级（8 → 7），对方紧接着的回合收入就只剩 +7 砖块（原本应是 +8）。","前期拆建筑压经济，往往比后期拼伤害更致命。"],en:["Attacks are not only about walls and towers: reducing the enemy’s building levels (opponent.Quarry/Magic/Dungeon.Lose) permanently weakens their per-turn income.","Here the enemy has Quarry 8 and 10 bricks: one Collapse! razes a level (8 → 7), and the income they collect right after is only +7 bricks instead of +8.","Razing buildings early to strangle the economy is often deadlier than late-game damage races."]},setup:{seed:36,self:{hand:["collapse"],state:{bricks:100}},opponent:{state:{quarries:8,bricks:10}}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【坍塌！】：对方采石场 8 → 7；换手后对方收入砖块 10 → 17（被拆后只 +7）",en:"Play Collapse!: enemy Quarry 8 → 7; after the pass their bricks go 10 → 17 (only +7 after the razing)"}}]},{id:"resource-denial",category:"combat",title:{zh:"掠夺对方资源",en:"Stealing Resources"},summary:{zh:["部分卡牌直接削减对方手上的砖块、宝石或兵种（opponent.Bricks/Gems/Recruits.Lose），让对方立刻「没钱出牌」。","【窃贼】不仅让对方损失 10 宝石、5 砖块，还把其中一半搬进你的仓库（你 +5 宝石、+3 砖块），一减一增差距翻倍。","本例对方三类建筑都是 0 级、没有回合收入，掠夺数值全额可见；实战中换手收入会补回一部分。"],en:["Some cards directly cut the enemy’s stored Bricks, Gems or Recruits (opponent.Bricks/Gems/Recruits.Lose), leaving them unable to afford plays.","Thief not only makes the enemy lose 10 gems and 5 bricks — half of that haul is carried into your stores (+5 gems, +3 bricks for you), doubling the swing.","Here the enemy has no production buildings, so the plundered amounts are shown in full; in a real match their turn income would partly refill them."]},setup:{seed:37,self:{hand:["thief"],state:{recruits:100,bricks:100,gems:10}},opponent:{state:{quarries:0,magic:0,dungeons:0,gems:20,bricks:20,recruits:20}}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【窃贼】：对方宝石 20 → 10、砖块 20 → 15；你宝石 10 → 15、砖块 100 → 103（另付 12 兵种费用）",en:"Play Thief: enemy gems 20 → 10, bricks 20 → 15; you gain gems 10 → 15, bricks 100 → 103 (plus the 12-recruit cost)"}}]},{id:"conditional",category:"advanced",title:{zh:"条件效果",en:"Conditional Effects"},summary:{zh:["部分卡牌带有条件判断（if / then / else）：只有满足条件时才执行对应效果，不满足则执行另一个分支或无事发生。","条件可以比较双方的建筑、城墙、塔高等局面信息。","【偷师学艺】仅当你的采石场低于对方时，才把采石场直接提升到与对方相同。"],en:["Some cards carry conditional logic (if / then / else): the effect only fires when the condition holds; otherwise the else branch runs — or nothing happens.","Conditions can compare buildings, wall, tower height and other board state between the two players.","Copping the Tech raises your quarry to match the opponent’s — but only if yours is currently lower."]},setup:{seed:41,self:{hand:["copping_the_tech"],state:{bricks:100,quarries:3}},opponent:{state:{quarries:8}}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【偷师学艺】：己方采石场 3 < 对方 8，条件成立，采石场 3 → 8",en:"Play Copping the Tech: your quarry 3 < enemy 8, condition holds — quarry 3 → 8"}}]},{id:"swap",category:"advanced",title:{zh:"属性交换",en:"Swapping Attributes"},summary:{zh:["Swap 效果把自己与对方的某项属性直接互换。","【移形换位】交换双方城墙：低墙一方瞬间获得高墙，攻防态势立刻逆转。","这类牌在劣势局面下往往比修墙更高效，但费用也更高。"],en:["Swap effects exchange one attribute between you and the opponent outright.","Shift swaps the two walls: the side with the low wall instantly gains the tall one, reversing the offensive situation.","Such cards often beat repairing when you are behind — but they cost accordingly."]},setup:{seed:42,self:{hand:["shift"],state:{bricks:100,wallHp:10}},opponent:{state:{wallHp:60}}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【移形换位】：己方城墙 10 与对方城墙 60 互换——己方 60、对方 10",en:"Play Shift: your wall 10 and the enemy wall 60 are swapped — you get 60, they get 10"}}]},{id:"global-effects",category:"advanced",title:{zh:"全场效果",en:"Global Effects"},summary:{zh:["目标为「全场（all）」的效果对所有玩家生效——在双人对局中就是你和对手同时受影响，不分敌我。","【纷争】让全场塔 -7、全场魔法 -1：对手的塔被削，你的塔也同样掉 7 点，属于伤敌亦伤己的双面牌。","使用这类牌前要算清双方的血量差：均势时是翻盘利器，自己塔更低时则可能同归于尽。"],en:['Effects targeting "all" apply to every player — in a two-player match that means both you and the opponent, friend or foe alike.',"Discord makes every tower lose 7 and every player lose 1 magic: the enemy tower is cut, but so is yours — a double-edged card.","Weigh the life totals before playing one: it swings a close game, but if your tower is lower it can end in mutual destruction."]},setup:{seed:43,self:{hand:["discord"],state:{gems:100}}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【纷争】：全场塔 50 → 43、全场魔法 3 → 2——你和对手同时受损",en:"Play Discord: all towers 50 → 43, all magic 3 → 2 — both you and the opponent are hit"}}]},{id:"aggregate-targets",category:"advanced",title:{zh:"聚合目标",en:"Aggregate Targets"},summary:{zh:["部分卡牌不按敌我选目标，而是按局面选人：「城墙最低者（lowestWall）」「塔最高者（highestTower）」等聚合目标会在结算时动态判定。","【洪水】惩罚城墙最低的玩家：地下城 -1、塔 -2（注意是「失去」而非「伤害」，直接打塔、无视城墙）。","本例你的城墙只有 5、对方有 60——中招的恰好是你自己。这类牌不分敌友，放之前先看清谁是那个「最」。"],en:['Some cards choose targets by board state instead of side: aggregate targets like "lowest wall" (lowestWall) or "highest tower" (highestTower) are decided dynamically when the card resolves.','Flood Water punishes the player with the lowest wall: -1 Dungeon and -2 Tower (note this is a "lose", not "damage" — it strikes the tower directly, ignoring the wall).','Here your wall is just 5 while the enemy has 60 — the one punished is you. These cards ignore allegiance, so check who is the "‑est" before casting.']},setup:{seed:44,self:{hand:["flood_water"],state:{bricks:100,wallHp:5}},opponent:{state:{wallHp:60}}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【洪水】：城墙最低者（你，5 < 60）地下城 5 → 4、塔 50 → 48；对方毫发无损",en:"Play Flood Water: the player with the lowest wall — you (5 < 60) — loses Dungeon 5 → 4 and Tower 50 → 48; the opponent is untouched"}}]},{id:"win-tower",category:"victory",title:{zh:"建塔胜利",en:"Tower Victory"},summary:{zh:["胜利条件之一：塔高达到目标值即立即获胜（默认规则 100，不同酒馆会调整）。","胜负在每次出牌结算后、以及换手收入后各判定一次，行动方优先。","宝石牌是建塔的主要手段：本例把胜利线设为 52，一张【紫水晶】塔 +3 正好达标。"],en:["Victory condition one: build your tower to the target height and you win immediately (100 by default; taverns may change it).","Victory is checked after every card resolves and again after turn-pass income, with the acting player first.","Gem cards are the main way to build: here the target is 52, and one Amethyst (+3 Tower) reaches it exactly."]},setup:{seed:51,rules:{winningTower:52},self:{hand:["amethyst"],state:{gems:10,towerHp:50}}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【紫水晶】：塔 50 +3 = 53 ≥ 胜利线 52，立即建塔胜利！",en:"Play Amethyst: tower 50 + 3 = 53 ≥ target 52 — instant tower victory!"}}]},{id:"win-resources",category:"victory",title:{zh:"积富胜利",en:"Resource Victory"},summary:{zh:["胜利条件之二：砖块 + 宝石 + 兵种的资源总量达到目标值即获胜（默认规则 300）。","三种资源合并计算：均衡发育或单类囤积都可以达标。","本例把胜利线设为 100：三种资源共 98，一张【幸运宝藏】+2 砖、+2 宝石即可过线。"],en:["Victory condition two: when your total resources — Bricks + Gems + Recruits — reach the target, you win (300 by default).","All three resources count together: balanced growth or hoarding one type both work.","Here the target is 100: with 98 total, one Lucky Cache (+2 bricks, +2 gems) pushes you over the line."]},setup:{seed:52,rules:{winningResources:100},self:{hand:["lucky_cache"],state:{bricks:49,gems:49,recruits:0}}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【幸运宝藏】：砖 49 → 51、宝石 49 → 51，总量 102 ≥ 胜利线 100，积富胜利！",en:"Play Lucky Cache: bricks 49 → 51, gems 49 → 51 — total 102 ≥ target 100, resource victory!"}}]},{id:"win-destroy",category:"victory",title:{zh:"毁塔胜利",en:"Destruction Victory"},summary:{zh:["胜利条件之三：把对方的塔打到 0 或以下即获胜（自己的塔被打到 0 则判负）。","对方城墙为 0 时，普通伤害直接作用到塔——大额伤害牌可以一击毁塔。","【飞刺者】在对方无城墙时造成 10 点伤害：本例对方塔恰好 10，一发改写胜负。"],en:["Victory condition three: reduce the enemy tower to 0 or below and you win (if your own tower hits 0, you lose).","When the enemy wall is 0, regular damage strikes the tower directly — a heavy hitter can destroy it in one blow.","Spizzer deals 10 damage when the enemy has no wall: the tower here is exactly 10, so one play ends the match."]},setup:{seed:53,self:{hand:["spizzer"],state:{recruits:100}},opponent:{state:{wallHp:0,towerHp:10}}},actions:[{kind:"play",player:0,handIndex:0,label:{zh:"打出【飞刺者】：对方城墙为 0，条件分支造成 10 点伤害，塔 10 → 0，毁塔胜利！",en:"Play Spizzer: the enemy wall is 0, so the conditional branch deals 10 damage — tower 10 → 0, destruction victory!"}}]}];function Ml(s){return an.find(e=>e.id===s)}const Ll=["basic","feature","combat","advanced","victory"],ms=["towerHp","wallHp","quarries","magic","dungeons","bricks","gems","recruits"],js={towerHp:"TOWER",wallHp:"WALL",quarries:"QUARRY",magic:"MAGIC",dungeons:"DUNGEON",bricks:"BRICK_QUANTITIES",gems:"GEM_QUANTITIES",recruits:"RECRUIT_QUANTITIES"};function qs(s){const e={};for(const t of ms)e[t]=s[t];return e}function Un(s){return{self:qs(s.players[0]),opponent:qs(s.players[1])}}function Ys(s,e,t){if(e){if(e.hand){const n=s.hand[0]?.cardId,i=[...e.hand];for(;i.length<t;)i.push(n??"");s.hand=i.slice(0,t).map((r,a)=>({uid:3e3+s.id*100+a,cardId:r}))}e.state&&Object.assign(s,e.state)}}function Wl(s,e){const t=[],n=[{player:0,key:"self"},{player:1,key:"opponent"}];for(const i of n)for(const r of ms){const a=s[i.key][r],o=e[i.key][r];a!==o&&t.push({player:i.player,field:r,from:a,to:o})}return t}function Qs(s,e){const t=e.setup,n={...fn,...t.rules},i=new Ki({deck:s,rules:n,rng:Co(t.seed??7),firstPlayerId:t.firstPlayerId??0,names:["Player","Opponent"]}).start();Ys(i.players[0],t.self,n.handSize),Ys(i.players[1],t.opponent,n.handSize);const r=Un(i),a=[i.players[0].hand.map(l=>l.cardId),i.players[1].hand.map(l=>l.cardId)],o=[];for(const l of e.actions){const c=Un(i),h=i.players[l.player],d=h.hand[l.handIndex]?.cardId??null,p=l.kind==="play"?i.playCard(l.player,l.handIndex):i.discardCard(l.player,l.handIndex);if(!p&&!l.expectFail)throw new Error(`[wiki] 条目 ${e.id} 动作执行失败（应成功）: ${l.label.zh} / ${l.label.en}`);if(p&&l.expectFail)throw new Error(`[wiki] 条目 ${e.id} 动作未被拒绝（应被拒绝）: ${l.label.zh} / ${l.label.en}`);const w=Un(i);o.push({kind:l.kind,player:l.player,handIndex:l.handIndex,cardId:d,label:l.label,rejected:!p,before:c,after:w,changes:Wl(c,w),turnNumber:i.turnNumber,currentId:i.currentId,discarding:h.discarding})}return{rules:n,initial:r,initialHands:a,finalHands:[i.players[0].hand.map(l=>l.cardId),i.players[1].hand.map(l=>l.cardId)],steps:o,over:i.over,result:i.result?{winnerId:i.result.winnerId,reason:i.result.reason}:null}}const Pl={class:"wiki"},Gl={class:"wiki__panel g-panel"},Bl={class:"wiki__head"},$l={class:"wiki__title"},zl={class:"wiki__hint"},Ul={class:"wiki__body"},Vl={class:"wiki__nav"},Kl={class:"wiki__nav-cat"},Hl=["onClick"],Fl={class:"wiki__content"},xl={class:"wiki__entry-title"},jl={class:"wiki__summary"},ql={key:0,class:"wiki__setup"},Yl={class:"wiki__section-title"},Ql={class:"wiki__players"},Jl={class:"wiki__stats"},Zl={class:"wiki__stat-label"},Xl={class:"wiki__stat-value"},ec={key:0,class:"wiki__hand"},tc={class:"wiki__hand-label"},nc={class:"wiki__actions"},sc={key:1,class:"wiki__steps"},ic={class:"wiki__section-title"},rc={class:"wiki-step__head"},ac={class:"wiki-step__no"},oc={class:"wiki-step__kind"},lc={key:0,class:"wiki-step__card"},cc={key:1,class:"wiki-step__rejected"},uc={key:2,class:"wiki-step__tag"},dc={class:"wiki-step__label"},hc={key:0,class:"wiki-step__changes"},fc={class:"wiki-change__actor"},pc={class:"wiki-change__field"},gc={class:"wiki-change__num"},mc={class:"wiki-step__turn"},yc={class:"wiki-result__title"},_c={class:"wiki-result__winner"},wc={class:"wiki-result__reason"},Fi=Se({__name:"WikiPage",props:{embedded:{type:Boolean}},emits:["close"],setup(s,{emit:e}){const t=s,n=e,i=Xe(),r=et(),{t:a,tn:o,lang:l}=$e(),c={basic:"WIKI_CAT_BASIC",feature:"WIKI_CAT_FEATURE",combat:"WIKI_CAT_COMBAT",advanced:"WIKI_CAT_ADVANCED",victory:"WIKI_CAT_VICTORY"},h={tower:"WIN_REASON_TOWER",resources:"WIN_REASON_RESOURCES",destroy:"WIN_REASON_DESTROY"},d=X(an[0].id),p=X(null),w=X(!1),E=Q(()=>Ml(d.value)??an[0]),y=Q(()=>Ll.map(u=>({cat:u,items:an.filter(f=>f.category===u)}))),T=Q(()=>[{key:"self",label:a("WIKI_YOU")},{key:"opponent",label:a("WIKI_OPPONENT")}]),N=Q(()=>l.value==="zh"?E.value.summary.zh:E.value.summary.en);function D(u){return l.value==="zh"?u.zh:u.en}function O(u){if(!u)return"—";const f=i.cardById(u);return f?i.cardText(f,l.value).name:u}function M(){const u=i.data?.deck.cards??[];u.length!==0&&(p.value=Qs(u,E.value),w.value=!1)}function G(){const u=i.data?.deck.cards??[];u.length!==0&&(p.value=Qs(u,E.value),w.value=!0)}function L(u){d.value=u}function W(){t.embedded?n("close"):r.backToMain()}return ln(d,M,{immediate:!0}),(u,f)=>(A(),C("div",Pl,[g("div",Gl,[g("header",Bl,[ie(de,{variant:"ghost",size:"md",onClick:W},{default:ue(()=>[te(_(m(a)("BACK")),1)]),_:1}),g("h2",$l,_(m(a)("WIKI_TITLE")),1),g("span",zl,_(m(a)("WIKI_HINT")),1)]),g("div",Ul,[g("nav",Vl,[(A(!0),C(ye,null,Ae(y.value,S=>(A(),C("div",{key:S.cat,class:"wiki__nav-group"},[g("p",Kl,_(m(a)(c[S.cat])),1),(A(!0),C(ye,null,Ae(S.items,R=>(A(),C("button",{key:R.id,class:_e(["wiki__nav-item",{"wiki__nav-item--active":R.id===d.value}]),onClick:b=>L(R.id)},_(D(R.title)),11,Hl))),128))]))),128))]),g("section",Fl,[g("h3",xl,_(D(E.value.title)),1),g("div",jl,[(A(!0),C(ye,null,Ae(N.value,(S,R)=>(A(),C("p",{key:R,class:"wiki__summary-line"},_(S),1))),128))]),p.value?(A(),C("div",ql,[g("h4",Yl,_(m(a)("WIKI_DEFAULT_SETUP")),1),g("div",Ql,[(A(!0),C(ye,null,Ae(T.value,S=>(A(),C("div",{key:S.key,class:"wiki__player g-panel"},[g("p",{class:_e(["wiki__player-name",`wiki__player-name--${S.key}`])},_(S.label),3),g("div",Jl,[(A(!0),C(ye,null,Ae(m(ms),R=>(A(),C("div",{key:R,class:"wiki__stat"},[g("span",Zl,_(m(a)(m(js)[R])),1),g("span",Xl,_(p.value.initial[S.key][R]),1)]))),128))]),E.value.setup[S.key]?.hand?.length?(A(),C("div",ec,[g("span",tc,_(m(a)("WIKI_DEMO_HAND")),1),(A(!0),C(ye,null,Ae(E.value.setup[S.key].hand,R=>(A(),C("span",{key:R,class:"wiki__hand-chip"},_(O(R)),1))),128))])):Z("",!0)]))),128))])])):Z("",!0),g("div",nc,[ie(de,{size:"md",onClick:G},{default:ue(()=>[te(_(w.value?m(a)("WIKI_RERUN"):m(a)("WIKI_RUN_DEMO")),1)]),_:1})]),w.value&&p.value?(A(),C("div",sc,[g("h4",ic,_(m(a)("WIKI_STEPS")),1),(A(!0),C(ye,null,Ae(p.value.steps,(S,R)=>(A(),C("div",{key:R,class:_e(["wiki-step",{"wiki-step--rejected":S.rejected}])},[g("div",rc,[g("span",ac,_(R+1),1),g("span",{class:_e(["wiki-step__actor",S.player===0?"wiki-step__actor--self":"wiki-step__actor--opponent"])},_(S.player===0?m(a)("WIKI_YOU"):m(a)("WIKI_OPPONENT")),3),g("span",oc,_(S.kind==="play"?m(a)("WIKI_ACTION_PLAY"):m(a)("WIKI_ACTION_DISCARD")),1),S.cardId?(A(),C("span",lc,_(O(S.cardId)),1)):Z("",!0),S.rejected?(A(),C("span",cc,_(m(a)("WIKI_REJECTED")),1)):S.discarding?(A(),C("span",uc,_(m(a)("WIKI_IN_DISCARD")),1)):Z("",!0)]),g("p",dc,_(D(S.label)),1),S.changes.length?(A(),C("div",hc,[(A(!0),C(ye,null,Ae(S.changes,(b,$)=>(A(),C("span",{key:$,class:_e(["wiki-change",b.to>b.from?"wiki-change--up":"wiki-change--down"])},[g("span",fc,_(b.player===0?m(a)("WIKI_YOU"):m(a)("WIKI_OPPONENT")),1),g("span",pc,_(m(a)(m(js)[b.field])),1),g("span",gc,_(b.from)+" → "+_(b.to),1)],2))),128))])):Z("",!0),g("p",mc,_(m(o)("TURN_N",S.turnNumber))+" · "+_(S.currentId===0?m(a)("WIKI_YOU"):m(a)("WIKI_OPPONENT")),1)],2))),128)),p.value.over&&p.value.result?(A(),C("div",{key:0,class:_e(["wiki-result",p.value.result.winnerId===0?"wiki-result--win":"wiki-result--lose"])},[g("span",yc,_(m(a)("WIKI_DEMO_OVER")),1),g("span",_c,_(m(a)("WIKI_WINNER"))+"："+_(p.value.result.winnerId===0?m(a)("WIKI_YOU"):m(a)("WIKI_OPPONENT")),1),g("span",wc,_(m(a)(h[p.value.result.reason])),1)],2)):Z("",!0)])):Z("",!0)])])])]))}}),Sc={class:"settings"},Tc={class:"settings__panel g-panel"},Ec={class:"settings__head"},bc={class:"settings__title"},kc={class:"settings__form"},Ac={key:0},Ic={class:"settings__section-title"},Rc={class:"settings__row"},vc={class:"settings__label"},Nc=["value"],Dc={class:"settings__row"},Cc={class:"settings__label"},Oc=["value"],Mc={value:"zh"},Lc={value:"en"},Wc={key:1},Pc={class:"settings__section-title"},Gc={class:"settings__row"},Bc={class:"settings__label"},$c=["value"],zc={class:"settings__pct"},Uc={class:"settings__row"},Vc={class:"settings__label"},Kc=["value"],Hc={class:"settings__pct"},Fc={class:"settings__row"},xc={class:"settings__label"},jc=["value"],qc={class:"settings__pct"},Yc={class:"settings__row"},Qc={class:"settings__label"},Jc=["checked"],Zc={key:2},Xc={class:"settings__section-title"},eu={class:"settings__row"},tu={class:"settings__label"},nu=["checked"],su={class:"settings__footer"},iu=Se({__name:"SettingsPage",setup(s){const e=st(),t=et(),{t:n}=$e(),i=Q(()=>e.settings);async function r(w){await e.update(w),e.settings&&Ge.applySettings(e.settings)}async function a(w){await r({nickname:w.target.value})}async function o(w){await r({language:w.target.value})}async function l(w){const E=w.target.checked;await window.gameAPI.setFullscreen(E),await r({fullscreen:E})}async function c(w,E){await r({[w]:Number(E.target.value)/100})}async function h(w){await r({muteSound:w.target.checked})}async function d(){await window.gameAPI.setFullscreen(!1),await e.update({...Et}),e.settings&&Ge.applySettings(e.settings)}const p=w=>Math.round((w??0)*100);return(w,E)=>(A(),C("div",Sc,[g("div",Tc,[g("header",Ec,[ie(de,{variant:"ghost",size:"md",onClick:E[0]||(E[0]=y=>m(t).backToMain())},{default:ue(()=>[te(_(m(n)("BACK")),1)]),_:1}),g("h2",bc,_(m(n)("SETTINGS")),1),E[4]||(E[4]=g("span",{class:"settings__spacer"},null,-1))]),g("div",kc,[i.value?(A(),C("section",Ac,[g("h3",Ic,_(m(n)("PLAYER_SETTINGS")),1),g("div",Rc,[g("label",vc,_(m(n)("NICKNAME")),1),g("input",{class:"settings__input",type:"text",value:i.value.nickname,maxlength:"16",onChange:a},null,40,Nc)]),g("div",Dc,[g("label",Cc,_(m(n)("LANGUAGE")),1),g("select",{class:"settings__input",value:i.value.language,onChange:o},[g("option",Mc,_(m(n)("LANG_ZH")),1),g("option",Lc,_(m(n)("LANG_EN")),1)],40,Oc)])])):Z("",!0),i.value?(A(),C("section",Wc,[g("h3",Pc,_(m(n)("SOUND_SETTINGS")),1),g("div",Gc,[g("label",Bc,_(m(n)("MASTER")),1),g("input",{type:"range",min:"0",max:"100",value:p(i.value.masterVolume),onInput:E[1]||(E[1]=y=>c("masterVolume",y))},null,40,$c),g("span",zc,_(p(i.value.masterVolume))+"%",1)]),g("div",Uc,[g("label",Vc,_(m(n)("MUSIC")),1),g("input",{type:"range",min:"0",max:"100",value:p(i.value.musicVolume),onInput:E[2]||(E[2]=y=>c("musicVolume",y))},null,40,Kc),g("span",Hc,_(p(i.value.musicVolume))+"%",1)]),g("div",Fc,[g("label",xc,_(m(n)("SOUNDS")),1),g("input",{type:"range",min:"0",max:"100",value:p(i.value.soundVolume),onInput:E[3]||(E[3]=y=>c("soundVolume",y))},null,40,jc),g("span",qc,_(p(i.value.soundVolume))+"%",1)]),g("div",Yc,[g("label",Qc,_(m(n)("MUTE_SOUND")),1),g("input",{type:"checkbox",checked:i.value.muteSound,onChange:h},null,40,Jc)])])):Z("",!0),i.value?(A(),C("section",Zc,[g("h3",Xc,_(m(n)("WINDOW_SETTINGS")),1),g("div",eu,[g("label",tu,_(m(n)("FULLSCREEN")),1),g("input",{type:"checkbox",checked:i.value.fullscreen,onChange:l},null,40,nu)])])):Z("",!0),g("div",su,[ie(de,{variant:"ghost",size:"md",onClick:d},{default:ue(()=>[te(_(m(n)("RESTORE_DEFAULTS")),1)]),_:1})])])])]))}}),ru={class:"stats"},au={class:"stats__panel g-panel"},ou={class:"stats__head"},lu={class:"stats__title"},cu={key:0,class:"stats__empty"},uu={class:"stats__cards"},du={class:"stats__card"},hu={class:"stats__num"},fu={class:"stats__label"},pu={class:"stats__card stats__card--win"},gu={class:"stats__num"},mu={class:"stats__label"},yu={class:"stats__card stats__card--lose"},_u={class:"stats__num"},wu={class:"stats__label"},Su={class:"stats__card"},Tu={class:"stats__num"},Eu={class:"stats__label"},bu={class:"stats__rows"},ku={class:"stats__row"},Au={class:"stats__row"},Iu={class:"stats__row"},Ru={class:"stats__row"},vu={class:"stats__row"},Nu={class:"stats__footer"},Du=Se({__name:"StatsPage",setup(s){const e=An(),t=et(),{t:n,tn:i}=$e();function r(){window.confirm(n("RESET_STATS")+"?")&&e.reset()}return(a,o)=>(A(),C("div",ru,[g("div",au,[g("header",ou,[ie(de,{variant:"ghost",size:"md",onClick:o[0]||(o[0]=l=>m(t).backToMain())},{default:ue(()=>[te(_(m(n)("BACK")),1)]),_:1}),g("h2",lu,_(m(n)("STATS_TITLE")),1),o[1]||(o[1]=g("span",{class:"stats__spacer"},null,-1))]),m(e).stats.games===0?(A(),C("div",cu,_(m(n)("NO_GAMES")),1)):(A(),C(ye,{key:1},[g("div",uu,[g("div",du,[g("span",hu,_(m(e).stats.games),1),g("span",fu,_(m(n)("GAMES")),1)]),g("div",pu,[g("span",gu,_(m(e).stats.wins),1),g("span",mu,_(m(n)("WINS")),1)]),g("div",yu,[g("span",_u,_(m(e).stats.losses),1),g("span",wu,_(m(n)("LOSSES")),1)]),g("div",Su,[g("span",Tu,_(m(e).winRate)+"%",1),g("span",Eu,_(m(n)("WIN_RATE")),1)])]),g("div",bu,[g("div",ku,[g("span",null,_(m(n)("WIN_BY_TOWER")),1),g("b",null,_(m(e).stats.winsByTower),1)]),g("div",Au,[g("span",null,_(m(n)("WIN_BY_RESOURCES")),1),g("b",null,_(m(e).stats.winsByResources),1)]),g("div",Iu,[g("span",null,_(m(n)("WIN_BY_DESTROY")),1),g("b",null,_(m(e).stats.winsByDestroy),1)]),g("div",Ru,[g("span",null,_(m(n)("AVG_TURNS")),1),g("b",null,_(m(e).avgTurns),1)]),g("div",vu,[g("span",null,_(m(n)("BEST_WIN")),1),g("b",null,_(m(e).stats.bestWinTurns===null?"—":m(i)("TURN_N",m(e).stats.bestWinTurns)),1)])]),g("div",Nu,[ie(de,{variant:"ghost",size:"md",onClick:r},{default:ue(()=>[te(_(m(n)("RESET_STATS")),1)]),_:1})])],64))])]))}}),Cu={class:"hud__head"},Ou={class:"hud__name"},Mu={key:0,class:"hud__tag"},Lu={key:1,class:"hud__tag hud__tag--discard"},Wu={class:"hud__targets"},Pu={class:"hud__target hud__target--tower"},Gu={class:"hud__target-label"},Bu={class:"hud__target-num"},$u={class:"hud__target hud__target--wall"},zu={class:"hud__target-label"},Uu={class:"hud__target-num"},Vu={class:"hud__target hud__target--resources"},Ku={class:"hud__target-label"},Hu={class:"hud__target-num"},Fu={class:"hud__res"},xu={class:"hud__num"},ju=["title"],qu={class:"hud__num hud__num--building"},Js=Se({__name:"PlayerHud",props:{player:{},active:{type:Boolean},rules:{},side:{}},setup(s){const e=s,{t}=$e(),n=[{stock:"bricks",building:"quarries",stockGlyph:"砖",buildingGlyph:"窑",tone:"brick",buildingLabelKey:"QUARRY"},{stock:"gems",building:"magic",stockGlyph:"晶",buildingGlyph:"法",tone:"gem",buildingLabelKey:"MAGIC"},{stock:"recruits",building:"dungeons",stockGlyph:"兵",buildingGlyph:"城",tone:"recruit",buildingLabelKey:"DUNGEON"}],i=Q(()=>e.player.bricks+e.player.gems+e.player.recruits);return(r,a)=>(A(),C("div",{class:_e(["hud g-panel",[`hud--${s.side}`,{"hud--active":s.active}]])},[g("div",Cu,[g("span",Ou,_(s.player.name),1),s.active?(A(),C("span",Mu,_(m(t)("ACTING")),1)):s.player.discarding?(A(),C("span",Lu,_(m(t)("DISCARDING_TAG")),1)):Z("",!0)]),g("div",Wu,[g("div",Pu,[g("span",Gu,_(m(t)("TOWER")),1),g("span",Bu,[te(_(s.player.towerHp),1),g("i",null,"/"+_(s.rules.winningTower),1)])]),g("div",$u,[g("span",zu,_(m(t)("WALL")),1),g("span",Uu,_(s.player.wallHp),1)]),g("div",Vu,[g("span",Ku,_(m(t)("RESOURCES")),1),g("span",Hu,[te(_(i.value),1),g("i",null,"/"+_(s.rules.winningResources),1)])])]),g("div",Fu,[(A(),C(ye,null,Ae(n,o=>g("div",{key:o.stock,class:"hud__res-group"},[g("span",{class:_e(["hud__badge hud__badge--stock",`hud__badge--${o.tone}`])},_(o.stockGlyph),3),g("span",xu,_(s.player[o.stock]),1),g("span",{class:_e(["hud__badge hud__badge--building",`hud__badge--${o.tone}`]),title:m(t)(o.buildingLabelKey)},_(o.buildingGlyph),11,ju),g("span",qu,"×"+_(s.player[o.building]),1)])),64))])],2))}}),Yu={class:"card-face__layer card-face__name"},Qu={class:"card-face__layer card-face__glyph"},Ju={class:"card-face__seal"},Zu={class:"card-face__layer card-face__desc"},Xu={class:"card-face__layer card-face__cost"},ed=Se({__name:"HandCard",props:{hand:{},index:{},interactive:{type:Boolean},discarding:{type:Boolean}},emits:["play","discard"],setup(s,{emit:e}){const t=s,n=e,i=Xe(),r=st(),a=X(null),o=Q(()=>t.hand.card),l=Q(()=>o.value?i.cardText(o.value,r.settings?.language??"zh"):{name:"",description:""}),c=Q(()=>o.value?i.cardGlyph(o.value):""),h=Q(()=>{switch(o.value?.type){case he.Brick:return"brick";case he.Gem:return"gem";case he.Recruit:return"recruit";default:return"none"}}),d=Q(()=>o.value?t.discarding?!t.hand.discardable:!t.hand.affordable:!1);function p(){const y=a.value;if(!y)return{x:0,y:0};const T=y.getBoundingClientRect();return{x:T.left+T.width/2,y:T.top+T.height/2}}function w(){if(!t.interactive||d.value)return;const y=p(),T={index:t.index,x:y.x,y:y.y};t.discarding?n("discard",T):n("play",T)}function E(y){if(y.preventDefault(),!t.interactive||!t.hand.discardable)return;const T=p();n("discard",{index:t.index,x:T.x,y:T.y})}return(y,T)=>(A(),C("div",{ref_key:"rootRef",ref:a,class:_e(["card-face card-face--hand",[`card-face--${h.value}`,{"card-face--interactive":s.interactive,"card-face--dimmed":d.value}]]),onClick:w,onContextmenu:E},[T[0]||(T[0]=g("div",{class:"card-face__band"},null,-1)),g("div",Yu,_(l.value.name),1),g("div",Qu,[g("span",Ju,_(c.value),1)]),g("div",Zu,_(l.value.description),1),g("div",Xu,_(o.value?.cost??0),1)],34))}}),td={key:0,class:"hand"},nd=Se({__name:"HandArea",setup(s){const e=it();function t(i){e.humanPlay(i.index,{x:i.x,y:i.y})}function n(i){e.humanDiscard(i.index,{x:i.x,y:i.y})}return(i,r)=>m(e).human?(A(),C("div",td,[(A(!0),C(ye,null,Ae(m(e).human.hand,(a,o)=>(A(),ce(ed,{key:a.uid,hand:a,index:o,interactive:m(e).isHumanTurn,discarding:m(e).humanDiscarding,onPlay:t,onDiscard:n},null,8,["hand","index","interactive","discarding"]))),128))])):Z("",!0)}}),sd={key:0,class:"discard-prompt g-panel"},id=Se({__name:"DiscardPrompt",setup(s){const e=it(),{t}=$e();return(n,i)=>(A(),ce(Xi,{name:"discard-prompt"},{default:ue(()=>[m(e).humanDiscarding?(A(),C("div",sd,[i[0]||(i[0]=g("span",{class:"discard-prompt__dot"},null,-1)),te(" "+_(m(t)("DISCARD_PROMPT")),1)])):Z("",!0)]),_:1}))}}),rd={class:"float-layer"},ad=Se({__name:"FloatLayer",setup(s){const e=it(),t=X([]),n=new Map;function i(r){t.value.push(r),n.set(r.id,window.setTimeout(()=>{t.value=t.value.filter(a=>a.id!==r.id),n.delete(r.id)},1250))}return pn(()=>e.fx.on("float",i)),Xn(()=>{e.fx.off("float",i),n.forEach(r=>window.clearTimeout(r)),n.clear()}),(r,a)=>(A(),C("div",rd,[(A(!0),C(ye,null,Ae(t.value,o=>(A(),C("span",{key:o.id,class:_e(["float-layer__text",o.increased?"float-layer__text--inc":"float-layer__text--dec"]),style:er({left:`${o.x}px`,top:`${o.y}px`})},_(o.text),7))),128))]))}}),od={class:"result__mask"},ld={class:"result__panel g-panel"},cd={class:"result__reason"},ud={class:"result__turns"},dd={class:"result__actions"},hd=Se({__name:"ResultPanel",setup(s){const e=it(),{t,tn:n}=$e(),i=Q(()=>e.result?.winnerId===0);return(r,a)=>(A(),C("div",od,[g("div",ld,[g("h1",{class:_e(["result__title",i.value?"result__title--win":"result__title--lose"])},_(i.value?m(t)("VICTORY"):m(t)("DEFEAT")),3),g("p",cd,_(m(e).winReasonText),1),g("p",ud,_(m(n)("TURNS_N",m(e).turnNumber)),1),g("div",dd,[ie(de,{size:"md",onClick:a[0]||(a[0]=o=>m(e).startMatch())},{default:ue(()=>[te(_(m(t)("PLAY_AGAIN")),1)]),_:1}),ie(de,{variant:"ghost",size:"md",onClick:a[1]||(a[1]=o=>m(e).backToTitle())},{default:ue(()=>[te(_(m(t)("BACK_TO_MENU")),1)]),_:1})])])]))}}),fd={key:1,class:"pause-menu__mask"},pd={class:"pause-menu__panel g-panel"},gd={class:"pause-menu__title"},md={class:"pause-menu__actions"},yd={key:2,class:"pause-menu__mask pause-menu__mask--wiki"},_d=Se({__name:"InMatchMenu",setup(s){const e=it(),{t}=$e(),n=X(!1),i=X(!1);function r(){n.value=!0,i.value=!1,e.setPaused(!0)}function a(){n.value=!1,i.value=!1,e.setPaused(!1)}async function o(){n.value=!1,i.value=!1,await e.forfeitToMenu()}return(l,c)=>(A(),C(ye,null,[m(e).phase==="playing"&&!n.value?(A(),ce(de,{key:0,variant:"ghost",size:"md",class:"pause-menu__trigger",onClick:r},{default:ue(()=>[te(_(m(t)("MENU")),1)]),_:1})):Z("",!0),n.value&&!i.value&&m(e).phase==="playing"?(A(),C("div",fd,[g("div",pd,[g("h2",gd,_(m(t)("GAME_IS_PAUSED")),1),g("div",md,[ie(de,{size:"md",onClick:a},{default:ue(()=>[te(_(m(t)("RESUME")),1)]),_:1}),ie(de,{size:"md",onClick:c[0]||(c[0]=h=>i.value=!0)},{default:ue(()=>[te(_(m(t)("WIKI")),1)]),_:1}),ie(de,{variant:"ghost",size:"md",onClick:o},{default:ue(()=>[te(_(m(t)("FORFEIT")),1)]),_:1})])])])):Z("",!0),n.value&&i.value&&m(e).phase==="playing"?(A(),C("div",yd,[ie(Fi,{embedded:"",onClose:c[1]||(c[1]=h=>i.value=!1)})])):Z("",!0)],64))}}),Ye=Se({__name:"RegionTag",props:{name:{}},setup(s){const e=s,t=X(null),n=X(e.name);let i=null;return pn(()=>{const r=t.value?.parentElement;if(!r)return;const a=()=>{const o=r.getBoundingClientRect();n.value=`${e.name} · ${Math.round(o.width)}×${Math.round(o.height)}`};a(),i=new ResizeObserver(a),i.observe(r)}),Xn(()=>i?.disconnect()),(r,a)=>(A(),C("span",{ref_key:"root",ref:t,class:"layout-debug-tag"},[a[0]||(a[0]=g("i",{class:"layout-debug-tag__dot"},null,-1)),te(" "+_(n.value),1)],512))}}),wd={key:0,class:"match-grid__cell match-grid__cell--page layout-debug-area"},Sd={class:"match-grid__cell match-grid__cell--ai-hud layout-debug-area"},Td={class:"match-grid__cell match-grid__cell--ai-hand layout-debug-area"},Ed={class:"match-ai-hand"},bd={class:"match-grid__cell match-grid__cell--turn layout-debug-area"},kd={class:"match-turn-banner g-panel"},Ad={class:"match-turn-banner__num"},Id={class:"match-grid__cell match-grid__cell--menu layout-debug-area"},Rd={class:"match-grid__cell match-grid__cell--table layout-debug-area"},vd={class:"match-grid__cell match-grid__cell--prompt layout-debug-area"},Nd={class:"match-grid__cell match-grid__cell--human-hud layout-debug-area"},Dd={class:"match-grid__cell match-grid__cell--hand layout-debug-area"},Cd=Se({__name:"MatchOverlay",setup(s){const t=it(),n=et(),{t:i,tn:r}=$e(),a=Q(()=>Math.max(0,t.ai?.hand.length??0)),o=Q(()=>t.currentId===0?i("YOUR_TURN"):t.busy?i("AI_THINKING"):i("AI_TURN"));return(l,c)=>(A(),C("div",{class:_e(["match-grid",[m(t).phase==="title"?"match-grid--title":"match-grid--match",{"layout-debug":m(n).layoutDebug}]])},[m(t).phase==="title"?(A(),C("div",wd,[m(n).screen==="main"?(A(),ce(el,{key:0})):m(n).screen==="tavern"?(A(),ce(yl,{key:1})):m(n).screen==="codex"?(A(),ce(Ol,{key:2})):m(n).screen==="wiki"?(A(),ce(Fi,{key:3})):m(n).screen==="settings"?(A(),ce(iu,{key:4})):m(n).screen==="stats"?(A(),ce(Du,{key:5})):Z("",!0),m(!1)&&m(n).layoutDebug?(A(),ce(Ye,{key:6,name:"page"})):Z("",!0)])):(A(),C(ye,{key:1},[g("div",Sd,[m(t).ai?(A(),ce(Js,{key:0,player:m(t).ai,active:m(t).currentId===1&&m(t).phase==="playing",rules:m(t).rules,side:"top"},null,8,["player","active","rules"])):Z("",!0),m(!1)&&m(n).layoutDebug?(A(),ce(Ye,{key:1,name:"ai-hud"})):Z("",!0)]),g("div",Td,[g("div",Ed,[(A(!0),C(ye,null,Ae(a.value,h=>(A(),C("div",{key:h,class:"match-ai-hand__card"},[...c[1]||(c[1]=[g("span",{class:"match-ai-hand__glyph"},"塔",-1)])]))),128))]),m(!1)&&m(n).layoutDebug?(A(),ce(Ye,{key:0,name:"ai-hand"})):Z("",!0)]),g("div",bd,[g("div",kd,[g("span",Ad,_(m(r)("TURN_N",m(t).turnNumber)),1),c[2]||(c[2]=g("span",{class:"match-turn-banner__sep"},"·",-1)),g("span",{class:_e(["match-turn-banner__side",m(t).currentId===0?"match-turn-banner__side--human":"match-turn-banner__side--ai"])},_(o.value),3)]),m(!1)&&m(n).layoutDebug?(A(),ce(Ye,{key:0,name:"turn"})):Z("",!0)]),g("div",Id,[ie(_d),m(!1)&&m(n).layoutDebug?(A(),ce(Ye,{key:0,name:"menu"})):Z("",!0)]),g("div",Rd,[m(!1)&&m(n).layoutDebug?(A(),ce(Ye,{key:0,name:"table"})):Z("",!0)]),g("div",vd,[ie(id),m(!1)&&m(n).layoutDebug?(A(),ce(Ye,{key:0,name:"prompt"})):Z("",!0)]),g("div",Nd,[m(t).human?(A(),ce(Js,{key:0,player:m(t).human,active:m(t).currentId===0&&m(t).phase==="playing",rules:m(t).rules,side:"bottom"},null,8,["player","active","rules"])):Z("",!0),m(!1)&&m(n).layoutDebug?(A(),ce(Ye,{key:1,name:"human-hud"})):Z("",!0)]),g("div",Dd,[ie(nd),m(!1)&&m(n).layoutDebug?(A(),ce(Ye,{key:0,name:"hand"})):Z("",!0)]),ie(ad),m(t).phase==="over"?(A(),ce(hd,{key:0})):Z("",!0)],64)),m(!1)?(A(),C("button",{key:2,class:_e(["match-debug-toggle",{"match-debug-toggle--on":m(n).layoutDebug}]),title:"布局调试开关（快捷键 F3）",onClick:c[0]||(c[0]=h=>m(n).toggleLayoutDebug())},_(m(n).layoutDebug?"▦ 布局调试：开":"▦ 布局调试"),3)):Z("",!0)],2))}}),Od={class:"app-root"},Md=Se({__name:"App",setup(s){const e=X(null),t=Ur(),n=st(),i=Xe(),r=it(),a=An(),o=et();let l=null;function c(w){w.key==="F3"&&(w.preventDefault(),o.toggleLayoutDebug())}const h=new URLSearchParams(window.location.search).has("smoke"),d=Fo();pn(async()=>{if(window.addEventListener("keydown",c),e.value){const w=document.createElement("canvas");w.id="game-canvas",e.value.appendChild(w),l=new zr(w),r.bindScene(l)}i.load(),await Promise.all([t.boot(),n.load(),a.load()]),t.rendererReady=!0,console.info(`[boot] renderer ready | IPC=${t.ipcOk?"ok":"FAILED"} | version=${t.appVersion||"unknown"} | language=${n.language}`),i.loaded?console.info(`[boot] game data ok | deck=${i.deckName} | cards=${i.cardCount} | taverns=${i.tavernCount} | locales=${i.languages.length}`):console.error(`[boot] game data FAILED | ${i.loadError??"unknown error"}`),h?p():d&&xo({match:r,settings:n,gameData:i})});function p(){console.info("[smoke] 自动对局开始（双 AI）"),window.addEventListener("error",E=>{console.error(`[smoke] window error: ${E.message} @ ${E.filename}:${E.lineno}:${E.colno}`)}),window.addEventListener("unhandledrejection",E=>{const y=E.reason;console.error("[smoke] unhandledrejection:",y?.stack??String(y))});const w=window.setTimeout(()=>{console.error("[smoke] match timeout FAIL"),window.close()},18e4);ln(()=>r.turnNumber,E=>{E>0&&E%10===0&&console.info(`[smoke] heartbeat | turn=${E} | phase=${r.phase}`)}),ln(()=>r.phase,E=>{E==="over"&&(window.clearTimeout(w),console.info(`[smoke] match over PASS | winner=P${r.result?.winnerId} | reason=${r.result?.reason} | turns=${r.turnNumber}`),window.setTimeout(()=>window.close(),2e3))}),r.startMatch({aiVsAi:!0})}return Xn(()=>{window.removeEventListener("keydown",c),l?.destroy(),l=null}),(w,E)=>(A(),C("div",Od,[g("div",{ref_key:"canvasHost",ref:e,class:"canvas-host"},null,512),ie(Cd,{class:"overlay"})]))}}),Ld=(s,e)=>{const t=s.__vccOpts||s;for(const[n,i]of e)t[n]=i;return t},Wd=Ld(Md,[["__scopeId","data-v-020dfc98"]]);function en(s,e){const t=e,n={...t};if(s&&typeof s=="object"&&!Array.isArray(s))for(const i of Object.keys(t)){const r=s[i],a=t[i];(r===null?a===null:a===null?typeof r!="object"&&typeof r!="function":typeof r==typeof a)&&(n[i]=r)}return n}function Vn(s){if(!s)return null;try{return JSON.parse(s)}catch{return null}}function Zs(){const s=new Map;return{getItem:e=>s.has(e)?s.get(e):null,setItem:(e,t)=>{s.set(e,t)},removeItem:e=>{s.delete(e)}}}function Pd(s={}){const e=s.namespace??"hanmo-card-tower",t=s.onDegraded??(c=>console.warn("[webApi]",c)),n=`${e}:settings`,i=`${e}:stats`,r=s.storage??(typeof localStorage<"u"?localStorage:Zs());let a;try{const c=`${e}:probe`;r.setItem(c,"1"),r.removeItem(c),a=r}catch(c){t(`存储不可用（${c instanceof Error?c.message:String(c)}），降级为内存存档，进度不会保留`),a=Zs()}function o(c,h){const d=Vn(a.getItem(c));if(d&&typeof d=="object")return en(d,h);const p=Vn(a.getItem(`${c}:bak`));return p&&typeof p=="object"?(t(`主档 ${c} 缺失或损坏，已回退备份`),en(p,h)):null}function l(c,h){const d=a.getItem(c);d!=null&&Vn(d)!=null&&a.setItem(`${c}:bak`,d),a.setItem(c,JSON.stringify(h))}return{getVersion:async()=>"web",getSettings:async()=>o(n,Et)??{...Et},saveSettings:async c=>{const h=en(c,Et);try{l(n,h)}catch(d){t(`设置保存失败（${d instanceof Error?d.message:String(d)}）`)}return h},getStats:async()=>o(i,$t)??{...$t},saveStats:async c=>{const h=en(c,$t);try{l(i,h)}catch(d){t(`战绩保存失败（${d instanceof Error?d.message:String(d)}）`)}return h},setFullscreen:async()=>{},steamUnlock:async()=>{},steamSetPresence:async()=>{},automatorReport:async()=>{}}}function Gd(){return typeof window<"u"&&typeof window.gameAPI>"u"}Gd()&&(window.gameAPI=Pd(),console.info("[boot] web 环境：window.gameAPI 未注入，已装配 localStorage 存档层"));tr(Wd).use(nr()).mount("#app");
