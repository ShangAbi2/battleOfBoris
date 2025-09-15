export const state = {
  gangplank: {
    stats: {
      healthBar: 200,
      attackDamage: 10,
      abilityPower: 0,
      money: 0,
      shards: 0,
    },
    pictures: {
      walkingUp: "images/gppics/walkup.png",
      walkdown: "images/gppics/walkdown.png",
      walkleft: "images/gppics/walkleft.png",
      walkright: "images/gppics/walkright.png",
      profilePicture: "images/gppics/profilePic.png",
      currentPicture: "",
    },
    sounds: {
      gotHit: "soundpath",
      GPQ: "soundpath",
      gotShard: "soundpath",
    }
  },
  shards: {
    abilityPower: Math.floor(Math.random()*10)+8,
    attackDamage: Math.floor(Math.random()*10)+8,
    picture: "images/shardsnitems/statanvil.png",
    shardHolder: { picture: "images/shardsnitems/shareholder.png" }
  }
};


