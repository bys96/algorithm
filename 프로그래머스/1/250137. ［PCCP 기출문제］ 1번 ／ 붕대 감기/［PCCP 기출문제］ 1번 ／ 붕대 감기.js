function solution(bandage, health, attacks) {
    let skill = 0;
    let attack = 0;
    let maxHp = health;
    let time = 0;
    
    while(attack < attacks.length){
        time++;
        skill++;
        if(attacks[attack][0] == time){
            health -= attacks[attack][1];
            skill = 0;
            attack ++;
            if(health <= 0) return -1;
        }else{
            health += bandage[1];
            if(skill == bandage[0]){
                health += bandage[2];
                skill = 0;
            }
            if(health > maxHp) health = maxHp;
        }
    }
    
    return health;
}