// code your solution here
function saturdayFun(roller='roller-skate'){
    return `This Saturday, I want to ${roller}!`
}
saturdayFun("bathe my dog")

function mondayWork(work='go to the office'){
    return `This Monday, I will ${work}.`
}
function wrapAdjective(wrap='*', ){
    return function(hard='a hard worker'){
        return `You are ${wrap}${hard}${wrap}!`
    }
    

}
wrapAdjective('||' )('a dedicated programmer')

