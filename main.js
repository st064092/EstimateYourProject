/*Значения по оценкам экспертов (SLOC)*/
const pesIlf = document.getElementById("pes-ilf"),
    pesEif = document.getElementById("pes-eif"),
    pesEi = document.getElementById("pes-ei"),
    pesEo = document.getElementById("pes-eo"),
    pesEq = document.getElementById("pes-eq"),
    naibIlf = document.getElementById("naib-ilf"),
    naibEif = document.getElementById("naib-eif"),
    naibEi = document.getElementById("naib-ei"),
    naibEo = document.getElementById("naib-eo"),
    naibEq = document.getElementById("naib-eq"),
    optIlf = document.getElementById("opt-ilf"),
    optEif = document.getElementById("opt-eif"),
    optEi = document.getElementById("opt-ei"),
    optEo = document.getElementById("opt-eo"),
    optEq= document.getElementById("opt-eq");

/*Значения по оценкам экспертов из range (SLOC)*/
const pesIlfRange = document.getElementById("pes-ilf-range"),
    pesEifRange = document.getElementById("pes-eif-range"),
    pesEiRange = document.getElementById("pes-ei-range"),
    pesEoRange = document.getElementById("pes-eo-range"),
    pesEqRange = document.getElementById("pes-eq-range"),
    naibIlfRange = document.getElementById("naib-ilf-range"),
    naibEifRange = document.getElementById("naib-eif-range"),
    naibEiRange = document.getElementById("naib-ei-range"),
    naibEoRange = document.getElementById("naib-eo-range"),
    naibEqRange = document.getElementById("naib-eq-range"),
    optIlfRange = document.getElementById("opt-ilf-range"),
    optEifRange = document.getElementById("opt-eif-range"),
    optEiRange = document.getElementById("opt-ei-range"),
    optEoRange = document.getElementById("opt-eo-range"),
    optEqRange = document.getElementById("opt-eq-range");

/* Значения по оценкам экспертов функциональных точек (UFP) */
const pesUfpIlf = document.getElementById("pes-ufp-ilf"),
    pesUfpEif = document.getElementById("pes-ufp-eif"),
    pesUfpEi = document.getElementById("pes-ufp-ei"),
    pesUfpEo = document.getElementById("pes-ufp-eo"),
    pesUfpEq = document.getElementById("pes-ufp-eq"),
    naibUfpIlf = document.getElementById("naib-ufp-ilf"),
    naibUfpEif = document.getElementById("naib-ufp-eif"),
    naibUfpEi = document.getElementById("naib-ufp-ei"),
    naibUfpEo = document.getElementById("naib-ufp-eo"),
    naibUfpEq = document.getElementById("naib-ufp-eq"),
    optUfpIlf = document.getElementById("opt-ufp-ilf"),
    optUfpEif = document.getElementById("opt-ufp-eif"),
    optUfpEi = document.getElementById("opt-ufp-ei"),
    optUfpEo = document.getElementById("opt-ufp-eo"),
    optUfpEq= document.getElementById("opt-ufp-eq");


/* Значения по оценкам экспертов функциональных точек (UFP) из Range */
const pesUfpIlfRange = document.getElementById("pes-ufp-ilf-range"),
    pesUfpEifRange = document.getElementById("pes-ufp-eif-range"),
    pesUfpEiRange = document.getElementById("pes-ufp-ei-range"),
    pesUfpEoRange = document.getElementById("pes-ufp-eo-range"),
    pesUfpEqRange = document.getElementById("pes-ufp-eq-range"),
    naibUfpIlfRange = document.getElementById("naib-ufp-ilf-range"),
    naibUfpEifRange = document.getElementById("naib-ufp-eif-range"),
    naibUfpEiRange = document.getElementById("naib-ufp-ei-range"),
    naibUfpEoRange = document.getElementById("naib-ufp-eo-range"),
    naibUfpEqRange = document.getElementById("naib-ufp-eq-range"),
    optUfpIlfRange = document.getElementById("opt-ufp-ilf-range"),
    optUfpEifRange = document.getElementById("opt-ufp-eif-range"),
    optUfpEiRange = document.getElementById("opt-ufp-ei-range"),
    optUfpEoRange = document.getElementById("opt-ufp-eo-range"),
    optUfpEqRange = document.getElementById("opt-ufp-eq-range");


/* Значения по количеству функциональных точек */
const ufpIlf = document.getElementById("ufp-ilf"),
    ufpEif = document.getElementById("ufp-eif"),
    ufpEi = document.getElementById("ufp-ei"),
    ufpEo = document.getElementById("ufp-eo"),
    ufpEq = document.getElementById("ufp-eq");

/* Значения по количеству функциональных точек из range */
const ufpIlfRange = document.getElementById("ufp-ilf-range"),
    ufpEifRange = document.getElementById("ufp-eif-range"),
    ufpEiRange = document.getElementById("ufp-ei-range"),
    ufpEoRange = document.getElementById("ufp-eo-range"),
    ufpEqRange = document.getElementById("ufp-eq-range");

/*Итоговые значения */
const sizeIlfResult = document.getElementById("size-ilf"),
    sizeEifResult = document.getElementById("size-eif"),
    sizeEiResult = document.getElementById("size-ei"),
    sizeEoResult = document.getElementById("size-eo"),
    sizeEqResult = document.getElementById("size-eq"),
    fpSlocIlfResult = document.getElementById("fp-sloc-ilf"),
    fpSlocEifResult = document.getElementById("fp-sloc-eif"),
    fpSlocEiResult = document.getElementById("fp-sloc-ei"),
    fpSlocEoResult = document.getElementById("fp-sloc-eo"),
    fpSlocEqResult = document.getElementById("fp-sloc-eq"),
    fpSlocResult = document.getElementById("fp-sloc"),
    eafIlf = document.getElementById("eaf-ilf"),
    eafEif = document.getElementById("eaf-eif"),
    eafEi = document.getElementById("eaf-ei"),
    eafEo = document.getElementById("eaf-eo"),
    eafEq = document.getElementById("eaf-eq"),
    bIlfValue = document.getElementById("b-ilf"),
    bEifValue= document.getElementById("b-eif"),
    bEiValue = document.getElementById("b-ei"),
    bEoValue = document.getElementById("b-eo"),
    bEqValue= document.getElementById("b-eq"),
    pmIlfValue = document.getElementById("pm-ilf"),
    pmEifValue = document.getElementById("pm-eif"),
    pmEiValue = document.getElementById("pm-ei"),
    pmEoValue = document.getElementById("pm-eo"),
    pmEqValue = document.getElementById("pm-eq"),
    totalPm = document.getElementById("total-pm"),
    eKsloc = document.getElementById("e-ksloc"),
    eSize = document.getElementById("e-size");




/*Значения по факторам переиспользования */
const newSlocIlf = document.getElementById("new-sloc-ilf"),
    newSlocEif = document.getElementById("new-sloc-eif"),
    newSlocEi = document.getElementById("new-sloc-ei"),
    newSlocEo = document.getElementById("new-sloc-eo"),
    newSlocEq = document.getElementById("new-sloc-eq"),
    repeatedSlocIlf = document.getElementById("repeated-sloc-ilf"),
    repeatedSlocEif = document.getElementById("repeated-sloc-eif"),
    repeatedSlocEi = document.getElementById("repeated-sloc-ei"),
    repeatedSlocEo = document.getElementById("repeated-sloc-eo"),
    repeatedSlocEq = document.getElementById("repeated-sloc-eq"),
    atIlf = document.getElementById("at-ilf"),
    atEif = document.getElementById("at-eif"),
    atEi = document.getElementById("at-ei"),
    atEo = document.getElementById("at-eo"),
    atEq = document.getElementById("at-eq"),
    aaIlf = document.getElementById("aa-ilf"),
    aaEif = document.getElementById("aa-eif"),
    aaEi = document.getElementById("aa-ei"),
    aaEo = document.getElementById("aa-eo"),
    aaEq = document.getElementById("aa-eq"),
    dmIlf = document.getElementById("dm-ilf"),
    dmEif = document.getElementById("dm-eif"),
    dmEi = document.getElementById("dm-ei"),
    dmEo = document.getElementById("dm-eo"),
    dmEq = document.getElementById("dm-eq"),
    cmIlf = document.getElementById("cm-ilf"),
    cmEif = document.getElementById("cm-eif"),
    cmEi = document.getElementById("cm-ei"),
    cmEo = document.getElementById("cm-eo"),
    cmEq = document.getElementById("cm-eq"),
    imIlf = document.getElementById("im-ilf"),
    imEif = document.getElementById("im-eif"),
    imEi = document.getElementById("im-ei"),
    imEo = document.getElementById("im-eo"),
    imEq = document.getElementById("im-eq"),
    suIlf = document.getElementById("su-ilf"),
    suEif = document.getElementById("su-eif"),
    suEi = document.getElementById("su-ei"),
    suEo = document.getElementById("su-eo"),
    suEq = document.getElementById("su-eq");

/*Значения по факторам переиспользования из range*/
const newSlocIlfRange = document.getElementById("new-sloc-ilf-range"),
    newSlocEifRange = document.getElementById("new-sloc-eif-range"),
    newSlocEiRange = document.getElementById("new-sloc-ei-range"),
    newSlocEoRange = document.getElementById("new-sloc-eo-range"),
    newSlocEqRange = document.getElementById("new-sloc-eq-range"),
    repeatedSlocIlfRange = document.getElementById("repeated-sloc-ilf-range"),
    repeatedSlocEifRange = document.getElementById("repeated-sloc-eif-range"),
    repeatedSlocEiRange = document.getElementById("repeated-sloc-ei-range"),
    repeatedSlocEoRange = document.getElementById("repeated-sloc-eo-range"),
    repeatedSlocEqRange = document.getElementById("repeated-sloc-eq-range"),
    atIlfRange = document.getElementById("at-ilf-range"),
    atEifRange = document.getElementById("at-eif-range"),
    atEiRange = document.getElementById("at-ei-range"),
    atEoRange = document.getElementById("at-eo-range"),
    atEqRange = document.getElementById("at-eq-range"),
    aaIlfRange = document.getElementById("aa-ilf-range"),
    aaEifRange = document.getElementById("aa-eif-range"),
    aaEiRange = document.getElementById("aa-ei-range"),
    aaEoRange = document.getElementById("aa-eo-range"),
    aaEqRange = document.getElementById("aa-eq-range"),
    dmIlfRange = document.getElementById("dm-ilf-range"),
    dmEifRange = document.getElementById("dm-eif-range"),
    dmEiRange = document.getElementById("dm-ei-range"),
    dmEoRange = document.getElementById("dm-eo-range"),
    dmEqRange = document.getElementById("dm-eq-range"),
    cmIlfRange = document.getElementById("cm-ilf-range"),
    cmEifRange = document.getElementById("cm-eif-range"),
    cmEiRange = document.getElementById("cm-ei-range"),
    cmEoRange = document.getElementById("cm-eo-range"),
    cmEqRange = document.getElementById("cm-eq-range"),
    imIlfRange = document.getElementById("im-ilf-range"),
    imEifRange = document.getElementById("im-eif-range"),
    imEiRange = document.getElementById("im-ei-range"),
    imEoRange = document.getElementById("im-eo-range"),
    imEqRange = document.getElementById("im-eq-range"),
    suIlfRange = document.getElementById("su-ilf-range"),
    suEifRange = document.getElementById("su-eif-range"),
    suEiRange = document.getElementById("su-ei-range"),
    suEoRange = document.getElementById("su-eo-range"),
    suEqRange = document.getElementById("su-eq-range");

/* Значения по проценту кода, выброшенного из-за изменения требований к программному продукту */
const delIlf = document.getElementById("del-ilf"),
    delEif = document.getElementById("del-eif"),
    delEi = document.getElementById("del-ei"),
    delEo = document.getElementById("del-eo"),
    delEq = document.getElementById("del-eq");

/* Значения по проценту кода, выброшенного из-за изменения требований к программному продукту (Range) */
const delIlfRange = document.getElementById("del-ilf-range"),
    delEifRange = document.getElementById("del-eif-range"),
    delEiRange = document.getElementById("del-ei-range"),
    delEoRange = document.getElementById("del-eo-range"),
    delEqRange = document.getElementById("del-eq-range");


/* Все range (querySelectorAll позволяет обращаться непосредственно к классам) */
const inputsRange = document.querySelectorAll('.input-range');


const assignValue = () => {
    pesUfpIlf.value = pesUfpIlfRange.value;
    pesUfpEif.value = pesUfpEifRange.value;
    pesUfpEi.value = pesUfpEiRange.value;
    pesUfpEo.value = pesUfpEoRange.value;
    pesUfpEq.value= pesUfpEqRange.value;
    naibUfpIlf.value = naibUfpIlfRange.value;
    naibUfpEif.value = naibUfpEifRange.value;
    naibUfpEi.value = naibUfpEiRange.value;
    naibUfpEo.value = naibUfpEoRange.value;
    naibUfpEq.value = naibUfpEqRange.value;
    optUfpIlf.value = optUfpIlfRange.value;
    optUfpEif.value = optUfpEifRange.value;
    optUfpEi.value = optUfpEiRange.value;
    optUfpEo.value = optUfpEoRange.value;
    optUfpEq.value = optUfpEqRange.value;
    pesIlf.value = pesIlfRange.value;
    pesEif.value = pesEifRange.value;
    pesEi.value = pesEiRange.value;
    pesEo.value = pesEoRange.value;
    pesEq.value= pesEqRange.value;
    naibIlf.value = naibIlfRange.value;
    naibEif.value = naibEifRange.value;
    naibEi.value = naibEiRange.value;
    naibEo.value = naibEoRange.value;
    naibEq.value = naibEqRange.value;
    optIlf.value = optIlfRange.value;
    optEif.value = optEifRange.value;
    optEi.value = optEiRange.value;
    optEo.value = optEoRange.value;
    optEq.value = optEqRange.value;
    ufpIlf.value = ufpIlfRange.value;
    ufpEif.value = ufpEifRange.value;
    ufpEi.value = ufpEiRange.value;
    ufpEo.value = ufpEoRange.value;
    ufpEq.value = ufpEqRange.value;
    newSlocIlf.value= newSlocIlfRange.value;
    newSlocEif.value = newSlocEifRange.value;
    newSlocEi.value = newSlocEiRange.value;
    newSlocEo.value = newSlocEoRange.value;
    newSlocEq.value = newSlocEqRange.value;
    repeatedSlocIlf.value = repeatedSlocIlfRange.value;
    repeatedSlocEif.value = repeatedSlocEifRange.value;
    repeatedSlocEi.value = repeatedSlocEiRange.value;
    repeatedSlocEo.value = repeatedSlocEoRange.value;
    repeatedSlocEq.value = repeatedSlocEqRange.value;
    atIlf.value = atIlfRange.value;
    atEif.value = atEifRange.value;
    atEi.value = atEiRange.value;
    atEo.value = atEoRange.value;
    atEq.value = atEqRange.value;
    aaIlf.value = aaIlfRange.value;
    aaEif.value = aaEifRange.value;
    aaEi.value = aaEiRange.value;
    aaEo.value = aaEoRange.value;
    aaEq.value = aaEqRange.value;
    dmIlf.value = dmIlfRange.value;
    dmEif.value = dmEifRange.value;
    dmEi.value = dmEiRange.value;
    dmEo.value = dmEoRange.value;
    dmEq.value = dmEqRange.value;
    cmIlf.value = cmIlfRange.value;
    cmEif.value = cmEifRange.value;
    cmEi.value = cmEiRange.value;
    cmEo.value = cmEoRange.value;
    cmEq.value = cmEqRange.value;
    imIlf.value = imIlfRange.value;
    imEif.value = imEifRange.value;
    imEi.value = imEiRange.value;
    imEo.value = imEoRange.value;
    imEq.value = imEqRange.value;
    suIlf.value = suIlfRange.value;
    suEif.value = suEifRange.value;
    suEi.value = suEiRange.value;
    suEo.value = suEoRange.value;
    suEq.value = suEqRange.value;
    /* выброшенный код Kreq */
    delIlf.value = delIlfRange.value;
    delEif.value = delEifRange.value;
    delEi.value = delEiRange.value;
    delEo.value = delEoRange.value;
    delEq.value = delEqRange.value;
}

assignValue();

for(let input of inputsRange){
   input.addEventListener('input', () => {
       assignValue();
       calculationMostProbSloc(parseInt(pesIlf.value,10), parseInt(pesEif.value,10), parseInt(pesEi.value,10), parseInt(pesEo.value,10),parseInt(pesEq.value,10), parseInt(naibIlf.value,10), parseInt(naibEif.value,10), parseInt(naibEi.value,10), parseInt(naibEo.value,10), parseInt(naibEq.value,10),parseInt(optIlf.value,10),
           parseInt(optEif.value,10), parseInt(optEi.value,10), parseInt(optEo.value,10), parseInt(optEq.value,10),parseInt(pesUfpIlf.value,10), parseInt(pesUfpEif.value,10), parseInt(pesUfpEi.value,10), parseInt(pesUfpEo.value,10), parseInt(pesUfpEq.value,10), parseInt(naibUfpIlf.value,10), parseInt(naibUfpEif.value,10), parseInt(naibUfpEi.value,10),
           parseInt(naibUfpEo.value,10), parseInt(naibUfpEq.value,10),parseInt(optUfpIlf.value,10), parseInt(optUfpEif.value,10), parseInt(optUfpEi.value,10), parseInt(optUfpEo.value,10), parseInt(optUfpEq.value,10));
       calculatePredPm();
       calculationFpSloc(parseInt(newSlocIlf.value,10), parseInt(repeatedSlocIlf.value,10), parseInt(atIlf.value,10), parseInt(aaIlf.value,10), parseInt(dmIlf.value,10), parseInt(cmIlf.value,10), parseInt(imIlf.value,10), parseInt(suIlf.value,10),
           parseInt(newSlocEif.value,10), parseInt(repeatedSlocEif.value,10), parseInt(atEif.value,10), parseInt(aaEif.value,10), parseInt(dmEif.value,10), parseInt(cmEif.value,10), parseInt(imEif.value,10), parseInt(suEif.value,10),
           parseInt(newSlocEi.value,10), parseInt(repeatedSlocEi.value,10), parseInt(atEi.value,10), parseInt(aaEi.value,10), parseInt(dmEi.value,10), parseInt(cmEi.value,10), parseInt(imEi.value,10), parseInt(suEi.value,10),
           parseInt(newSlocEo.value,10), parseInt(repeatedSlocEo.value,10), parseInt(atEo.value,10), parseInt(aaEo.value,10), parseInt(dmEo.value,10), parseInt(cmEo.value,10), parseInt(imEo.value,10), parseInt(suEo.value,10),
           parseInt(newSlocEq.value,10), parseInt(repeatedSlocEq.value,10), parseInt(atEq.value,10), parseInt(aaEq.value,10), parseInt(dmEq.value,10), parseInt(cmEq.value,10), parseInt(imEq.value,10), parseInt(suEq.value,10),
           parseInt(ufpIlf.value,10), parseInt(ufpEif.value,10), parseInt(ufpEi.value,10), parseInt(ufpEo.value,10), parseInt(ufpEq.value,10));
       calculateKreq(parseInt(delIlf.value,10), parseInt(delEif.value,10), parseInt(delEi.value,10), parseInt(delEo.value,10), parseInt(delEq.value,10));
       calculatePm();
    })
}

const calculationMostProbSloc = (pesIlf = 0, pesEif = 0, pesEi = 0, pesEo = 0, pesEq = 0, naibIlf = 0, naibEif = 0, naibEi = 0, naibEo = 0, naibEq = 0,optIlf = 0,
    optEif = 0, optEi = 0, optEo = 0, optEq= 0, pesUfpIlf = 0, pesUfpEif = 0, pesUfpEi = 0, pesUfpEo = 0, pesUfpEq = 0, naibUfpIlf = 0, naibUfpEif = 0, naibUfpEi = 0,
                                 naibUfpEo = 0, naibUfpEq = 0,optUfpIlf = 0, optUfpEif = 0, optUfpEi = 0, optUfpEo = 0, optUfpEq= 0) => {
    //eSloc = (pes + 4 * naib + opt) / 6
    let eSlocIlf;
    let eSlocEif;
    let eSlocEi;
    let eSlocEo;
    let eSlocEq;


    eSlocIlf = ((pesIlf + 4 * naibIlf + optIlf) / 6) / 1000;
    eSlocEif = ((pesEif + 4 * naibEif + optEif) / 6) / 1000;
    eSlocEi = ((pesEi + 4 * naibEi + optEi) / 6) / 1000;
    eSlocEo = ((pesEo + 4 * naibEo + optEo) / 6) / 1000;
    eSlocEq = ((pesEq + 4 * naibEq + optEq) / 6) / 1000;


    let eUfpIlf;
    let eUfpEif;
    let eUfpEi;
    let eUfpEo;
    let eUfpEq;
    let eFpSloc;
    let pesFpSlocIlf;
    let pesFpSlocEif;
    let pesFpSlocEi;
    let pesFpSlocEo;
    let pesFpSlocEq;
    let optFpSlocIlf;
    let optFpSlocEif;
    let optFpSlocEi;
    let optFpSlocEo;
    let optFpSlocEq;
    let stDevFpSloc;
    let finalSizeKsloc;
    let finalSizeKslocRounded;


    pesFpSlocIlf = (pesIlf / 1000) * pesUfpIlf;
    pesFpSlocEif = (pesEif / 1000) * pesUfpEif;
    pesFpSlocEi = (pesEi / 1000) * pesUfpEi;
    pesFpSlocEo = (pesEo / 1000) * pesUfpEo;
    pesFpSlocEq = (pesEq / 1000) * pesUfpEq;
    optFpSlocIlf = (optIlf / 1000) * optUfpIlf;
    optFpSlocEif = (optEif / 1000) * optUfpEif;
    optFpSlocEi = (optEi / 1000) * optUfpEi;
    optFpSlocEo = (optEo / 1000) * optUfpEo;
    optFpSlocEq = (optEq / 1000) * optUfpEq;

    eUfpIlf = (pesUfpIlf + 4 * naibUfpIlf + optUfpIlf) / 6;
    eUfpEif = (pesUfpEif + 4 * naibUfpEif + optUfpEif) / 6;
    eUfpEi = (pesUfpEi + 4 * naibUfpEi + optUfpEi) / 6;
    eUfpEo = (pesUfpEo + 4 * naibUfpEo + optUfpEo) / 6;
    eUfpEq = (pesUfpEq + 4 * naibUfpEq + optUfpEq) / 6;


    eFpSloc = eSlocIlf * eUfpIlf + eSlocEif * eUfpEif + eSlocEi * eUfpEi + eSlocEo * eUfpEo + eSlocEq * eUfpEq;


    stDevFpSloc = Math.sqrt(Math.pow((pesFpSlocIlf - optFpSlocIlf) / 6, 2) + Math.pow((pesFpSlocEif - optFpSlocEif) / 6, 2) + Math.pow((pesFpSlocEi - optFpSlocEi) / 6, 2) + Math.pow((pesFpSlocEo - optFpSlocEo) / 6, 2) + Math.pow((pesFpSlocEq - optFpSlocEq) / 6, 2));


    finalSizeKsloc = eFpSloc + 2 * stDevFpSloc;

    finalSizeKslocRounded = Math.round(finalSizeKsloc * 1000) / 1000

    eKsloc.innerHTML = finalSizeKslocRounded + ' KSLOC';

    return finalSizeKsloc;
}


    //рассчет произведения драйверов затрат

function calculatePredPm() {

    var wPers=document.getElementById("pers"),
        wPersValue=wPers.options[wPers.selectedIndex].value,
        wPrex=document.getElementById("prex"),
        wPrexValue=wPrex.options[wPrex.selectedIndex].value,
        wRcpx=document.getElementById("rcpx"),
        wRcpxValue=wRcpx.options[wRcpx.selectedIndex].value,
        wRuse=document.getElementById("ruse"),
        wRuseValue=wRuse.options[wRuse.selectedIndex].value,
        wPdif=document.getElementById("pdif"),
        wPdifValue=wPdif.options[wPdif.selectedIndex].value,
        wFcil=document.getElementById("fcil"),
        wFcilValue=wFcil.options[wFcil.selectedIndex].value,
        wSced=document.getElementById("sced"),
        wScedValue=wSced.options[wSced.selectedIndex].value;

    var multEaf = wPersValue * wPrexValue * wRcpxValue * wRuseValue * wPdifValue * wFcilValue * wScedValue;

    var wPrec=document.getElementById("prec"),
        wPrecValue=parseFloat(wPrec.options[wPrec.selectedIndex].value),
        wFlex=document.getElementById("flex"),
        wFlexValue=parseFloat(wFlex.options[wFlex.selectedIndex].value),
        wResl=document.getElementById("resl"),
        wReslValue=parseFloat(wResl.options[wResl.selectedIndex].value),
        wTeam=document.getElementById("team"),
        wTeamValue=parseFloat(wTeam.options[wTeam.selectedIndex].value),
        wPmat=document.getElementById("pmat"),
        wPmatValue=parseFloat(wPmat.options[wPmat.selectedIndex].value);

    var predSf = wPrecValue + wFlexValue + wReslValue + wTeamValue + wPmatValue;

    //Оценка параметра B = 0.91 + 0.01 * sum(w)

    var b = 0.91 + (0.01 * predSf);

    //Предварительный расчет трудоемкости (a=2,94)
    var kSlocSize = calculationMostProbSloc(parseInt(pesIlf.value,10), parseInt(pesEif.value,10), parseInt(pesEi.value,10), parseInt(pesEo.value,10),parseInt(pesEq.value,10), parseInt(naibIlf.value,10), parseInt(naibEif.value,10), parseInt(naibEi.value,10), parseInt(naibEo.value,10), parseInt(naibEq.value,10),parseInt(optIlf.value,10),
        parseInt(optEif.value,10), parseInt(optEi.value,10), parseInt(optEo.value,10), parseInt(optEq.value,10),parseInt(pesUfpIlf.value,10), parseInt(pesUfpEif.value,10), parseInt(pesUfpEi.value,10), parseInt(pesUfpEo.value,10), parseInt(pesUfpEq.value,10), parseInt(naibUfpIlf.value,10), parseInt(naibUfpEif.value,10), parseInt(naibUfpEi.value,10),
        parseInt(naibUfpEo.value,10), parseInt(naibUfpEq.value,10),parseInt(optUfpIlf.value,10), parseInt(optUfpEif.value,10), parseInt(optUfpEi.value,10), parseInt(optUfpEo.value,10), parseInt(optUfpEq.value,10));


    var pm = multEaf * 2.94 * Math.pow(kSlocSize,b);

    var pmRounded = Math.round(pm * 1000) / 1000;

    eSize.innerHTML = pmRounded + ' чел.мес'

    return pm;


        }


const calculationFpSloc = (newSlocIlf = 0, repeatedSlocIlf = 0, atIlf = 0, aaIlf = 0, dmIlf = 0, cmIlf = 0, imIlf = 0, suIlf = 10,
                            newSlocEif = 0, repeatedSlocEif = 0, atEif = 0, aaEif = 0, dmEif = 0, cmEif = 0, imEif = 0, suEif = 10,
                            newSlocEi = 0, repeatedSlocEi = 0, atEi = 0, aaEi = 0, dmEi = 0, cmEi = 0, imEi = 0, suEi = 10,
                            newSlocEo = 0, repeatedSlocEo = 0, atEo = 0, aaEo = 0, dmEo = 0, cmEo = 0, imEo = 0, suEo = 10,
                            newSlocEq = 0, repeatedSlocEq = 0, atEq = 0, aaEq = 0, dmEq = 0, cmEq = 0, imEq = 0, suEq = 10,
                            ufpIlf = 0,ufpEif = 0,ufpEi = 0,ufpEo = 0,ufpEq = 0) => {
/* Size = NewSloc + (repeatedSloc * ((100 - AT)/100) * ((aa + 0.4 * dm + 0.3 * cm + 0.3 * im + su)/100))*/
    let sizeIlf;
    let sizeEif;
    let sizeEi;
    let sizeEo;
    let sizeEq;
    let fpSlocIlf;
    let fpSlocEif;
    let fpSlocEi;
    let fpSlocEo;
    let fpSlocEq;
    let totalFpSloc;

    sizeIlf = (newSlocIlf/1000) + ((repeatedSlocIlf/1000) * ((100 - atIlf)/100) * ((aaIlf + (0.4 * dmIlf) + (0.3 * cmIlf) + (0.3 * imIlf) + suIlf)/100));
    sizeEif = (newSlocEif/1000) + ((repeatedSlocEif/1000) * ((100 - atEif)/100) * ((aaEif + 0.4 * dmEif + 0.3 * cmEif + 0.3 * imEif + suEif)/100));
    sizeEi = (newSlocEi/1000) + ((repeatedSlocEi/1000) * ((100 - atEi)/100) * ((aaEi + 0.4 * dmEi + 0.3 * cmEi + 0.3 * imEi + suEi)/100));
    sizeEo = (newSlocEo/1000) + ((repeatedSlocEo/1000) * ((100 - atEo)/100) * ((aaEo + 0.4 * dmEo + 0.3 * cmEo + 0.3 * imEo + suEo)/100));
    sizeEq = (newSlocEq/1000) + ((repeatedSlocEq/1000) * ((100 - atEq)/100) * ((aaEq + 0.4 * dmEq+ 0.3 * cmEq + 0.3 * imEq + suEq)/100));

    fpSlocIlf = ufpIlf * sizeIlf;
    fpSlocEif = ufpEif * sizeEif;
    fpSlocEi = ufpEi * sizeEi;
    fpSlocEo = ufpEo * sizeEo;
    fpSlocEq = ufpEq * sizeEq;

    totalFpSloc = fpSlocIlf + fpSlocEif + fpSlocEi + fpSlocEo + fpSlocEq;




    const sizeIlfRounded = Math.round(sizeIlf * 1000)/1000,
        sizeEifRounded = Math.round(sizeEif*1000)/1000,
        sizeEiRounded = Math.round(sizeEi*1000)/1000,
        sizeEoRounded = Math.round(sizeEo*1000)/1000,
        sizeEqRounded = Math.round(sizeEq*1000)/1000,
        fpSlocIlfRounded = Math.round(fpSlocIlf*1000)/1000,
        fpSlocEifRounded = Math.round(fpSlocEif*1000)/1000,
        fpSlocEiRounded = Math.round(fpSlocEi*1000)/1000,
        fpSlocEoRounded = Math.round(fpSlocEo*1000)/1000,
        fpSlocEqRounded = Math.round(fpSlocEq*1000)/1000,
        totalFpSlocRounded = Math.round(totalFpSloc*1000)/1000;

    var predSizeKsloc=calculationMostProbSloc(parseInt(pesIlf.value,10), parseInt(pesEif.value,10), parseInt(pesEi.value,10), parseInt(pesEo.value,10),parseInt(pesEq.value,10), parseInt(naibIlf.value,10), parseInt(naibEif.value,10), parseInt(naibEi.value,10), parseInt(naibEo.value,10), parseInt(naibEq.value,10),parseInt(optIlf.value,10),
        parseInt(optEif.value,10), parseInt(optEi.value,10), parseInt(optEo.value,10), parseInt(optEq.value,10),parseInt(pesUfpIlf.value,10), parseInt(pesUfpEif.value,10), parseInt(pesUfpEi.value,10), parseInt(pesUfpEo.value,10), parseInt(pesUfpEq.value,10), parseInt(naibUfpIlf.value,10), parseInt(naibUfpEif.value,10), parseInt(naibUfpEi.value,10),
        parseInt(naibUfpEo.value,10), parseInt(naibUfpEq.value,10),parseInt(optUfpIlf.value,10), parseInt(optUfpEif.value,10), parseInt(optUfpEi.value,10), parseInt(optUfpEo.value,10), parseInt(optUfpEq.value,10));

    if (predSizeKsloc > totalFpSloc){
        fpSlocResult.innerHTML = totalFpSlocRounded + ' KSLOC' + '( -' + (Math.round((predSizeKsloc - totalFpSloc) * 1000)/1000) + ' )'
    } else {
        fpSlocResult.innerHTML = totalFpSlocRounded + ' KSLOC' + '( +' + (Math.round((totalFpSloc - predSizeKsloc) * 1000)/1000) + ' )'
    }

    sizeIlfResult.innerHTML = sizeIlfRounded ;
    sizeEifResult.innerHTML = sizeEifRounded ;
    sizeEiResult.innerHTML = sizeEiRounded ;
    sizeEoResult.innerHTML = sizeEoRounded ;
    sizeEqResult.innerHTML = sizeEqRounded ;
    fpSlocIlfResult.innerHTML = fpSlocIlfRounded ;
    fpSlocEifResult.innerHTML = fpSlocEifRounded ;
    fpSlocEiResult.innerHTML = fpSlocEiRounded ;
    fpSlocEoResult.innerHTML = fpSlocEoRounded ;
    fpSlocEqResult.innerHTML = fpSlocEqRounded ;

    const fpSlocMap = new Map();
    fpSlocMap.set("fpSlocIlf", fpSlocIlf);
    fpSlocMap.set("fpSlocEif", fpSlocEif);
    fpSlocMap.set("fpSlocEi", fpSlocEi);
    fpSlocMap.set("fpSlocEo", fpSlocEo);
    fpSlocMap.set("fpSlocEq", fpSlocEq);
    fpSlocMap.set("totalFpSloc", totalFpSloc);

    return fpSlocMap;
}

const calculateKreq = (delIlf= 0, delEif = 0, delEi = 0, delEo = 0, delEq = 0)=> {
    //Kreq = 1 + (процент выброшенного кода из-за изменения требований /100)
    let kreqIlf;
    let kreqEif;
    let kreqEi;
    let kreqEo;
    let kreqEq;

    kreqIlf = 1 + (delIlf/100);
    kreqEif = 1 + (delEif/100);
    kreqEi = 1 + (delEi/100);
    kreqEo = 1 + (delEo/100);
    kreqEq = 1 + (delEq/100);

    var kreqMap = new Map();
    kreqMap.set("kreqIlf",kreqIlf);
    kreqMap.set("kreqEif",kreqEif);
    kreqMap.set("kreqEi",kreqEi);
    kreqMap.set("kreqEo",kreqEo);
    kreqMap.set("kreqEq",kreqEq);

    return kreqMap;
}

function calculatePm() {

//Расчет EAF(произведения формирователей затрат)
    var wRelyIlf=document.getElementById("rely-ilf"),
        wRelyIlfValue=wRelyIlf.options[wRelyIlf.selectedIndex].value,
        wRelyEif=document.getElementById("rely-eif"),
        wRelyEifValue=wRelyEif.options[wRelyEif.selectedIndex].value,
        wRelyEi=document.getElementById("rely-ei"),
        wRelyEiValue=wRelyEi.options[wRelyEi.selectedIndex].value,
        wRelyEo=document.getElementById("rely-eo"),
        wRelyEoValue=wRelyEo.options[wRelyEo.selectedIndex].value,
        wRelyEq=document.getElementById("rely-eq"),
        wRelyEqValue=wRelyEq.options[wRelyEq.selectedIndex].value,
        wDataIlf=document.getElementById("data-ilf"),
        wDataIlfValue=wDataIlf.options[wDataIlf.selectedIndex].value,
        wDataEif=document.getElementById("data-eif"),
        wDataEifValue=wDataEif.options[wDataEif.selectedIndex].value,
        wDataEi=document.getElementById("data-ei"),
        wDataEiValue=wDataEi.options[wDataEi.selectedIndex].value,
        wDataEo=document.getElementById("data-eo"),
        wDataEoValue=wDataEo.options[wDataEo.selectedIndex].value,
        wDataEq=document.getElementById("data-eq"),
        wDataEqValue=wDataEq.options[wDataEq.selectedIndex].value,
        wCplxIlf=document.getElementById("cplx-ilf"),
        wCplxIlfValue=wCplxIlf.options[wCplxIlf.selectedIndex].value,
        wCplxEif=document.getElementById("cplx-eif"),
        wCplxEifValue=wCplxEif.options[wCplxEif.selectedIndex].value,
        wCplxEi=document.getElementById("cplx-ei"),
        wCplxEiValue=wCplxEi.options[wCplxEi.selectedIndex].value,
        wCplxEo=document.getElementById("cplx-eo"),
        wCplxEoValue=wCplxEo.options[wCplxEo.selectedIndex].value,
        wCplxEq=document.getElementById("cplx-eq"),
        wCplxEqValue=wCplxEq.options[wCplxEq.selectedIndex].value,
        wReuseIlf=document.getElementById("reuse-ilf"),
        wReuseIlfValue=wReuseIlf.options[wReuseIlf.selectedIndex].value,
        wReuseEif=document.getElementById("reuse-eif"),
        wReuseEifValue=wReuseEif.options[wReuseEif.selectedIndex].value,
        wReuseEi=document.getElementById("reuse-ei"),
        wReuseEiValue=wReuseEi.options[wReuseEi.selectedIndex].value,
        wReuseEo=document.getElementById("reuse-eo"),
        wReuseEoValue=wReuseEo.options[wReuseEo.selectedIndex].value,
        wReuseEq=document.getElementById("reuse-eq"),
        wReuseEqValue=wReuseEq.options[wReuseEq.selectedIndex].value,
        wDocuIlf=document.getElementById("docu-ilf"),
        wDocuIlfValue=wDocuIlf.options[wDocuIlf.selectedIndex].value,
        wDocuEif=document.getElementById("docu-eif"),
        wDocuEifValue=wDocuEif.options[wDocuEif.selectedIndex].value,
        wDocuEi=document.getElementById("docu-ei"),
        wDocuEiValue=wDocuEi.options[wDocuEi.selectedIndex].value,
        wDocuEo=document.getElementById("docu-eo"),
        wDocuEoValue=wDocuEo.options[wDocuEo.selectedIndex].value,
        wDocuEq=document.getElementById("docu-eq"),
        wDocuEqValue=wDocuEq.options[wDocuEq.selectedIndex].value,
        wAcapIlf=document.getElementById("acap-ilf"),
        wAcapIlfValue=wAcapIlf.options[wAcapIlf.selectedIndex].value,
        wAcapEif=document.getElementById("acap-eif"),
        wAcapEifValue=wAcapEif.options[wAcapEif.selectedIndex].value,
        wAcapEi=document.getElementById("acap-ei"),
        wAcapEiValue=wAcapEi.options[wAcapEi.selectedIndex].value,
        wAcapEo=document.getElementById("acap-eo"),
        wAcapEoValue=wAcapEo.options[wAcapEo.selectedIndex].value,
        wAcapEq=document.getElementById("acap-eq"),
        wAcapEqValue=wAcapEq.options[wAcapEq.selectedIndex].value,
        wAexpIlf=document.getElementById("aexp-ilf"),
        wAexpIlfValue=wAexpIlf.options[wAexpIlf.selectedIndex].value,
        wAexpEif=document.getElementById("aexp-eif"),
        wAexpEifValue=wAexpEif.options[wAexpEif.selectedIndex].value,
        wAexpEi=document.getElementById("aexp-ei"),
        wAexpEiValue=wAexpEi.options[wAexpEi.selectedIndex].value,
        wAexpEo=document.getElementById("aexp-eo"),
        wAexpEoValue=wAexpEo.options[wAexpEo.selectedIndex].value,
        wAexpEq=document.getElementById("aexp-eq"),
        wAexpEqValue=wAexpEq.options[wAexpEq.selectedIndex].value,
        wPcapIlf=document.getElementById("pcap-ilf"),
        wPcapIlfValue=wPcapIlf.options[wPcapIlf.selectedIndex].value,
        wPcapEif=document.getElementById("pcap-eif"),
        wPcapEifValue=wPcapEif.options[wPcapEif.selectedIndex].value,
        wPcapEi=document.getElementById("pcap-ei"),
        wPcapEiValue=wPcapEi.options[wPcapEi.selectedIndex].value,
        wPcapEo=document.getElementById("pcap-eo"),
        wPcapEoValue=wPcapEo.options[wPcapEo.selectedIndex].value,
        wPcapEq=document.getElementById("pcap-eq"),
        wPcapEqValue=wPcapEq.options[wPcapEq.selectedIndex].value,
        wPconIlf=document.getElementById("pcon-ilf"),
        wPconIlfValue=wPconIlf.options[wPconIlf.selectedIndex].value,
        wPconEif=document.getElementById("pcon-eif"),
        wPconEifValue=wPconEif.options[wPconEif.selectedIndex].value,
        wPconEi=document.getElementById("pcon-ei"),
        wPconEiValue=wPconEi.options[wPconEi.selectedIndex].value,
        wPconEo=document.getElementById("pcon-eo"),
        wPconEoValue=wPconEo.options[wPconEo.selectedIndex].value,
        wPconEq=document.getElementById("pcon-eq"),
        wPconEqValue=wPconEq.options[wPconEq.selectedIndex].value,
        wPexpIlf=document.getElementById("pexp-ilf"),
        wPexpIlfValue=wPexpIlf.options[wPexpIlf.selectedIndex].value,
        wPexpEif=document.getElementById("pexp-eif"),
        wPexpEifValue=wPexpEif.options[wPexpEif.selectedIndex].value,
        wPexpEi=document.getElementById("pexp-ei"),
        wPexpEiValue=wPexpEi.options[wPexpEi.selectedIndex].value,
        wPexpEo=document.getElementById("pexp-eo"),
        wPexpEoValue=wPexpEo.options[wPexpEo.selectedIndex].value,
        wPexpEq=document.getElementById("pexp-eq"),
        wPexpEqValue=wPexpEq.options[wPexpEq.selectedIndex].value,
        wLtexIlf=document.getElementById("ltex-ilf"),
        wLtexIlfValue=wLtexIlf.options[wLtexIlf.selectedIndex].value,
        wLtexEif=document.getElementById("ltex-eif"),
        wLtexEifValue=wLtexEif.options[wLtexEif.selectedIndex].value,
        wLtexEi=document.getElementById("ltex-ei"),
        wLtexEiValue=wLtexEi.options[wLtexEi.selectedIndex].value,
        wLtexEo=document.getElementById("ltex-eo"),
        wLtexEoValue=wLtexEo.options[wLtexEo.selectedIndex].value,
        wLtexEq=document.getElementById("ltex-eq"),
        wLtexEqValue=wLtexEq.options[wLtexEq.selectedIndex].value,
        wTimeIlf=document.getElementById("time-ilf"),
        wTimeIlfValue=wTimeIlf.options[wTimeIlf.selectedIndex].value,
        wTimeEif=document.getElementById("time-eif"),
        wTimeEifValue=wTimeEif.options[wTimeEif.selectedIndex].value,
        wTimeEi=document.getElementById("time-ei"),
        wTimeEiValue=wTimeEi.options[wTimeEi.selectedIndex].value,
        wTimeEo=document.getElementById("time-eo"),
        wTimeEoValue=wTimeEo.options[wTimeEo.selectedIndex].value,
        wTimeEq=document.getElementById("time-eq"),
        wTimeEqValue=wTimeEq.options[wTimeEq.selectedIndex].value,
        wStorIlf=document.getElementById("stor-ilf"),
        wStorIlfValue=wStorIlf.options[wStorIlf.selectedIndex].value,
        wStorEif=document.getElementById("stor-eif"),
        wStorEifValue=wStorEif.options[wStorEif.selectedIndex].value,
        wStorEi=document.getElementById("stor-ei"),
        wStorEiValue=wStorEi.options[wStorEi.selectedIndex].value,
        wStorEo=document.getElementById("stor-eo"),
        wStorEoValue=wStorEo.options[wStorEo.selectedIndex].value,
        wStorEq=document.getElementById("stor-eq"),
        wStorEqValue=wStorEq.options[wStorEq.selectedIndex].value,
        wPvolIlf=document.getElementById("pvol-ilf"),
        wPvolIlfValue=wPvolIlf.options[wPvolIlf.selectedIndex].value,
        wPvolEif=document.getElementById("pvol-eif"),
        wPvolEifValue=wPvolEif.options[wPvolEif.selectedIndex].value,
        wPvolEi=document.getElementById("pvol-ei"),
        wPvolEiValue=wPvolEi.options[wPvolEi.selectedIndex].value,
        wPvolEo=document.getElementById("pvol-eo"),
        wPvolEoValue=wPvolEo.options[wPvolEo.selectedIndex].value,
        wPvolEq=document.getElementById("pvol-eq"),
        wPvolEqValue=wPvolEq.options[wPvolEq.selectedIndex].value,
        wToolIlf=document.getElementById("tool-ilf"),
        wToolIlfValue=wToolIlf.options[wToolIlf.selectedIndex].value,
        wToolEif=document.getElementById("tool-eif"),
        wToolEifValue=wToolEif.options[wToolEif.selectedIndex].value,
        wToolEi=document.getElementById("tool-ei"),
        wToolEiValue=wToolEi.options[wToolEi.selectedIndex].value,
        wToolEo=document.getElementById("tool-eo"),
        wToolEoValue=wToolEo.options[wToolEo.selectedIndex].value,
        wToolEq=document.getElementById("tool-eq"),
        wToolEqValue=wToolEq.options[wToolEq.selectedIndex].value,
        wSiteIlf=document.getElementById("site-ilf"),
        wSiteIlfValue=wSiteIlf.options[wSiteIlf.selectedIndex].value,
        wSiteEif=document.getElementById("site-eif"),
        wSiteEifValue=wSiteEif.options[wSiteEif.selectedIndex].value,
        wSiteEi=document.getElementById("site-ei"),
        wSiteEiValue=wSiteEi.options[wSiteEi.selectedIndex].value,
        wSiteEo=document.getElementById("site-eo"),
        wSiteEoValue=wSiteEo.options[wSiteEo.selectedIndex].value,
        wSiteEq=document.getElementById("site-eq"),
        wSiteEqValue=wSiteEq.options[wSiteEq.selectedIndex].value,
        wScedIlf=document.getElementById("sced-ilf"),
        wScedIlfValue=wScedIlf.options[wScedIlf.selectedIndex].value,
        wScedEif=document.getElementById("sced-eif"),
        wScedEifValue=wScedEif.options[wScedEif.selectedIndex].value,
        wScedEi=document.getElementById("sced-ei"),
        wScedEiValue=wScedEi.options[wScedEi.selectedIndex].value,
        wScedEo=document.getElementById("sced-eo"),
        wScedEoValue=wScedEo.options[wScedEo.selectedIndex].value,
        wScedEq=document.getElementById("sced-eq"),
        wScedEqValue=wScedEq.options[wScedEq.selectedIndex].value;

    var multIlf = wRelyIlfValue * wDataIlfValue * wCplxIlfValue * wReuseIlfValue * wDocuIlfValue * wAcapIlfValue * wAexpIlfValue * wPcapIlfValue * wPconIlfValue * wPexpIlfValue * wLtexIlfValue * wTimeIlfValue * wStorIlfValue * wPvolIlfValue * wToolIlfValue * wSiteIlfValue * wScedIlfValue;
    var multEif = wRelyEifValue * wDataEifValue * wCplxEifValue * wReuseEifValue * wDocuEifValue * wAcapEifValue * wAexpEifValue * wPcapEifValue * wPconEifValue * wPexpEifValue * wLtexEifValue * wTimeEifValue * wStorEifValue * wPvolEifValue * wToolEifValue * wSiteEifValue * wScedEifValue;
    var multEi = wRelyEiValue * wDataEiValue * wCplxEiValue * wReuseEiValue * wDocuEiValue * wAcapEiValue * wAexpEiValue * wPcapEiValue * wPconEiValue * wPexpEiValue * wLtexEiValue * wTimeEiValue * wStorEiValue * wPvolEiValue * wToolEiValue * wSiteEiValue * wScedEiValue;
    var multEo = wRelyEoValue * wDataEoValue * wCplxEoValue * wReuseEoValue * wDocuEoValue * wAcapEoValue * wAexpEoValue * wPcapEoValue * wPconEoValue * wPexpEoValue * wLtexEoValue * wTimeEoValue * wStorEoValue * wPvolEoValue * wToolEoValue * wSiteEoValue * wScedEoValue;
    var multEq = wRelyEqValue * wDataEqValue * wCplxEqValue * wReuseEqValue * wDocuEqValue * wAcapEqValue * wAexpEqValue * wPcapEqValue * wPconEqValue * wPexpEqValue * wLtexEqValue * wTimeEqValue * wStorEqValue * wPvolEqValue * wToolEqValue * wSiteEqValue * wScedEqValue;

    var multIlfRounded = Math.round(multIlf * 1000)/1000;
    var multEifRounded = Math.round(multEif * 1000)/1000;
    var multEiRounded = Math.round(multEi * 1000)/1000;
    var multEoRounded = Math.round(multEo * 1000)/1000;
    var multEqRounded = Math.round(multEq * 1000)/1000;

    eafIlf.innerHTML = multIlfRounded ;
    eafEif.innerHTML = multEifRounded;
    eafEi.innerHTML = multEiRounded;
    eafEo.innerHTML = multEoRounded;
    eafEq.innerHTML = multEqRounded;


    //Расчет факторов масштаба и параметра B

    var sfPrecIlf=document.getElementById("prec-ilf"),
        sfPrecIlfValue=sfPrecIlf.options[sfPrecIlf.selectedIndex].value,
        sfPrecEif=document.getElementById("prec-eif"),
        sfPrecEifValue=sfPrecEif.options[sfPrecEif.selectedIndex].value,
        sfPrecEi=document.getElementById("prec-ei"),
        sfPrecEiValue=sfPrecEi.options[sfPrecEi.selectedIndex].value,
        sfPrecEo=document.getElementById("prec-eo"),
        sfPrecEoValue=sfPrecEo.options[sfPrecEo.selectedIndex].value,
        sfPrecEq=document.getElementById("prec-eq"),
        sfPrecEqValue=sfPrecEq.options[sfPrecEq.selectedIndex].value,
        sfFlexIlf=document.getElementById("flex-ilf"),
        sfFlexIlfValue=sfFlexIlf.options[sfFlexIlf.selectedIndex].value,
        sfFlexEif=document.getElementById("flex-eif"),
        sfFlexEifValue=sfFlexEif.options[sfFlexEif.selectedIndex].value,
        sfFlexEi=document.getElementById("flex-ei"),
        sfFlexEiValue=sfFlexEi.options[sfFlexEi.selectedIndex].value,
        sfFlexEo=document.getElementById("flex-eo"),
        sfFlexEoValue=sfFlexEo.options[sfFlexEo.selectedIndex].value,
        sfFlexEq=document.getElementById("flex-eq"),
        sfFlexEqValue=sfFlexEq.options[sfFlexEq.selectedIndex].value,
        sfReslIlf=document.getElementById("resl-ilf"),
        sfReslIlfValue=sfReslIlf.options[sfReslIlf.selectedIndex].value,
        sfReslEif=document.getElementById("resl-eif"),
        sfReslEifValue=sfReslEif.options[sfReslEif.selectedIndex].value,
        sfReslEi=document.getElementById("resl-ei"),
        sfReslEiValue=sfReslEi.options[sfReslEi.selectedIndex].value,
        sfReslEo=document.getElementById("resl-eo"),
        sfReslEoValue=sfReslEo.options[sfReslEo.selectedIndex].value,
        sfReslEq=document.getElementById("resl-eq"),
        sfReslEqValue=sfReslEq.options[sfReslEq.selectedIndex].value,
        sfTeamIlf=document.getElementById("team-ilf"),
        sfTeamIlfValue=sfTeamIlf.options[sfTeamIlf.selectedIndex].value,
        sfTeamEif=document.getElementById("team-eif"),
        sfTeamEifValue=sfTeamEif.options[sfTeamEif.selectedIndex].value,
        sfTeamEi=document.getElementById("team-ei"),
        sfTeamEiValue=sfTeamEi.options[sfTeamEi.selectedIndex].value,
        sfTeamEo=document.getElementById("team-eo"),
        sfTeamEoValue=sfTeamEo.options[sfTeamEo.selectedIndex].value,
        sfTeamEq=document.getElementById("team-eq"),
        sfTeamEqValue=sfTeamEq.options[sfTeamEq.selectedIndex].value,
        sfPmatIlf=document.getElementById("pmat-ilf"),
        sfPmatIlfValue=sfPmatIlf.options[sfPmatIlf.selectedIndex].value,
        sfPmatEif=document.getElementById("pmat-eif"),
        sfPmatEifValue=sfPmatEif.options[sfPmatEif.selectedIndex].value,
        sfPmatEi=document.getElementById("pmat-ei"),
        sfPmatEiValue=sfPmatEi.options[sfPmatEi.selectedIndex].value,
        sfPmatEo=document.getElementById("pmat-eo"),
        sfPmatEoValue=sfPmatEo.options[sfPmatEo.selectedIndex].value,
        sfPmatEq=document.getElementById("pmat-eq"),
        sfPmatEqValue=sfPmatEq.options[sfPmatEq.selectedIndex].value;

    var sumSfIlf = parseFloat(sfPrecIlfValue) + parseFloat(sfFlexIlfValue) + parseFloat(sfReslIlfValue) + parseFloat(sfTeamIlfValue) + parseFloat(sfPmatIlfValue);
    var sumSfEif = parseFloat(sfPrecEifValue) + parseFloat(sfFlexEifValue) + parseFloat(sfReslEifValue) + parseFloat(sfTeamEifValue) + parseFloat(sfPmatEifValue);
    var sumSfEi = parseFloat(sfPrecEiValue) + parseFloat(sfFlexEiValue) + parseFloat(sfReslEiValue) + parseFloat(sfTeamEiValue) + parseFloat(sfPmatEiValue);
    var sumSfEo = parseFloat(sfPrecEoValue) + parseFloat(sfFlexEoValue) + parseFloat(sfReslEoValue) + parseFloat(sfTeamEoValue) + parseFloat(sfPmatEoValue);
    var sumSfEq = parseFloat(sfPrecEqValue) + parseFloat(sfFlexEqValue) + parseFloat(sfReslEqValue) + parseFloat(sfTeamEqValue) + parseFloat(sfPmatEqValue);

    // B = 0.91 + 0.01 * SUM(sf)
    var bIlf = 0.91 + (0.01 * sumSfIlf);
    var bEif = 0.91 + (0.01 * sumSfEif);
    var bEi = 0.91 + (0.01 * sumSfEi);
    var bEo = 0.91 + (0.01 * sumSfEo);
    var bEq = 0.91 + (0.01 * sumSfEq);

    var averagePrec = (parseFloat(sfPrecIlfValue) + parseFloat(sfPrecEifValue) + parseFloat(sfPrecEiValue) + parseFloat(sfPrecEoValue) + parseFloat(sfPrecEqValue)) / 5 ;
    var averageFlex = (parseFloat(sfPrecIlfValue) + parseFloat(sfFlexEifValue) + parseFloat(sfFlexEiValue) + parseFloat(sfFlexEoValue) + parseFloat(sfFlexEqValue)) / 5 ;
    var averageResl = (parseFloat(sfReslIlfValue) + parseFloat(sfReslEifValue) + parseFloat(sfReslEiValue) + parseFloat(sfReslEoValue) + parseFloat(sfReslEqValue)) / 5 ;
    var averageTeam = (parseFloat(sfTeamIlfValue) + parseFloat(sfTeamEifValue) + parseFloat(sfTeamEiValue) + parseFloat(sfTeamEoValue) + parseFloat(sfTeamEqValue)) / 5 ;
    var averagePmat = (parseFloat(sfPmatIlfValue) + parseFloat(sfPmatEifValue) + parseFloat(sfPmatEiValue) + parseFloat(sfPmatEoValue) + parseFloat(sfPmatEqValue)) / 5 ;

    var averageSumSf = averagePrec + averageFlex + averageResl + averageTeam + averagePmat;

    var averageB = 0.91 + (0.01 * averageSumSf);


    var bIlfRounded = Math.round(bIlf * 1000)/1000;
    var bEifRounded = Math.round(bEif * 1000)/1000;
    var bEiRounded = Math.round(bEi * 1000)/1000;
    var bEoRounded = Math.round(bEo * 1000)/1000;
    var bEqRounded = Math.round(bEq * 1000)/1000;


    bIlfValue.innerHTML = bIlfRounded ;
    bEifValue.innerHTML = bEifRounded;
    bEiValue.innerHTML = bEiRounded;
    bEoValue.innerHTML = bEoRounded;
    bEqValue.innerHTML = bEqRounded;

//Расчет трудозатрат
    const fpSlocMap = calculationFpSloc(parseInt(newSlocIlf.value,10), parseInt(repeatedSlocIlf.value,10), parseInt(atIlf.value,10), parseInt(aaIlf.value,10), parseInt(dmIlf.value,10), parseInt(cmIlf.value,10), parseInt(imIlf.value,10), parseInt(suIlf.value,10),
        parseInt(newSlocEif.value,10), parseInt(repeatedSlocEif.value,10), parseInt(atEif.value,10), parseInt(aaEif.value,10), parseInt(dmEif.value,10), parseInt(cmEif.value,10), parseInt(imEif.value,10), parseInt(suEif.value,10),
        parseInt(newSlocEi.value,10), parseInt(repeatedSlocEi.value,10), parseInt(atEi.value,10), parseInt(aaEi.value,10), parseInt(dmEi.value,10), parseInt(cmEi.value,10), parseInt(imEi.value,10), parseInt(suEi.value,10),
        parseInt(newSlocEo.value,10), parseInt(repeatedSlocEo.value,10), parseInt(atEo.value,10), parseInt(aaEo.value,10), parseInt(dmEo.value,10), parseInt(cmEo.value,10), parseInt(imEo.value,10), parseInt(suEo.value,10),
        parseInt(newSlocEq.value,10), parseInt(repeatedSlocEq.value,10), parseInt(atEq.value,10), parseInt(aaEq.value,10), parseInt(dmEq.value,10), parseInt(cmEq.value,10), parseInt(imEq.value,10), parseInt(suEq.value,10),
        parseInt(ufpIlf.value,10), parseInt(ufpEif.value,10), parseInt(ufpEi.value,10), parseInt(ufpEo.value,10), parseInt(ufpEq.value,10)),

        kreqMap = calculateKreq(parseInt(delIlf.value,10), parseInt(delEif.value,10), parseInt(delEi.value,10), parseInt(delEo.value,10), parseInt(delEq.value,10));

    //размер компонентов
    var fpSlocIlf = parseFloat(fpSlocMap.get("fpSlocIlf")),
        fpSlocEif = parseFloat(fpSlocMap.get("fpSlocEif")),
        fpSlocEi = parseFloat(fpSlocMap.get("fpSlocEi")),
        fpSlocEo = parseFloat(fpSlocMap.get("fpSlocEo")),
        fpSlocEq = parseFloat(fpSlocMap.get("fpSlocEq")),
        totalFpSloc = parseFloat(fpSlocMap.get("totalFpSloc"));


    // Показатель выброшенного кода из-за изменений требований
    var kreqIlf = parseFloat(kreqMap.get("kreqIlf")),
        kreqEif = parseFloat(kreqMap.get("kreqEif")),
        kreqEi = parseFloat(kreqMap.get("kreqEi")),
        kreqEo = parseFloat(kreqMap.get("kreqEo")),
        kreqEq = parseFloat(kreqMap.get("kreqEq"));


    //Расчет
    //pmi = EAF * A * (Kreq * (fp_sloc^B)
    var pmIlf;
    var pmEif;
    var pmEi;
    var pmEo;
    var pmEq;
    var Pm;

    pmIlf = multIlf * 2.94 * (kreqIlf * Math.pow(fpSlocIlf,bIlf));
    pmEif = multEif * 2.94  * (kreqEif * Math.pow(fpSlocEif,bEif));
    pmEi = multEi * 2.94  * (kreqEi * Math.pow(fpSlocEi,bEi));
    pmEo = multEo * 2.94  * (kreqEo * Math.pow(fpSlocEo,bEo));
    pmEq = multEq * 2.94  * (kreqEq * Math.pow(fpSlocEq,bEq));

    Pm = pmIlf + pmEif + pmEi + pmEo + pmEq;

    var pmIlfRounded = Math.round(pmIlf * 1000)/1000;
    var pmEifRounded = Math.round(pmEif * 1000)/1000;
    var pmEiRounded = Math.round(pmEi * 1000)/1000;
    var pmEoRounded = Math.round(pmEo * 1000)/1000;
    var pmEqRounded = Math.round(pmEq * 1000)/1000;
    var totalPmRounded = Math.round(Pm * 1000)/1000;


    var basePm = 2.94 * Math.pow(totalFpSloc,averageB);
    let PmIlfRed = basePm * (fpSlocIlf/totalFpSloc) * multIlf * kreqIlf;
    var PmEifRed = basePm * (fpSlocEif/totalFpSloc) * multEif * kreqEif;
    var PmEiRed = basePm * (fpSlocEi/totalFpSloc) * multEi * kreqEi;
    var PmEoRed = basePm * (fpSlocEo/totalFpSloc) * multEo * kreqEo;
    var PmEqRed = basePm * (fpSlocEq/totalFpSloc) * multEq * kreqEq;

    var finalPm = PmIlfRed + PmEifRed + PmEiRed + PmEoRed + PmEqRed;

    console.log(finalPm);

    var finalPmRounded = Math.round(finalPm * 1000)/1000;


    //расчет разницы между итоговыми трудозатратами и первоначальными
    var predPm = calculatePredPm();



    if ((totalFpSloc > 0) && (predPm > finalPm)) {
        totalPm.innerHTML = finalPmRounded + ' чел.мес' + '( -' + (Math.round((predPm - finalPm) * 1000)/1000) + ' )' ;
    } else if ((totalFpSloc > 0) && (predPm <= finalPm)) {
        totalPm.innerHTML = finalPmRounded + ' чел.мес' + '( +' + (Math.round((finalPm - predPm) * 1000)/1000) + ' )';
    } else {
        total.Pm.innerHTML = 0 + ' чел.мес.'
    }

    console.log(totalFpSloc)


    pmIlfValue.innerHTML = pmIlfRounded ;
    pmEifValue.innerHTML = pmEifRounded ;
    pmEiValue.innerHTML = pmEiRounded ;
    pmEoValue.innerHTML = pmEoRounded ;
    pmEqValue.innerHTML = pmEqRounded;


}







