var fill = '';
var sudoku = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.']
]

document.querySelector(".one").addEventListener('click', e => {
    fill = '1';
})
document.querySelector(".two").addEventListener('click', e => {
    fill = '2';
})
document.querySelector(".three").addEventListener('click', e => {
    fill = '3';
})
document.querySelector(".four").addEventListener('click', e => {
    fill = '4';
})
document.querySelector(".five").addEventListener('click', e => {
    fill = '5';
})
document.querySelector(".six").addEventListener('click', e => {
    fill = '6';
})
document.querySelector(".seven").addEventListener('click', e => {
    fill = '7';
})
document.querySelector(".eight").addEventListener('click', e => {
    fill = '8';
})
document.querySelector(".nine").addEventListener('click', e => {
    fill = '9';
})

window.addEventListener("keydown", e => {
    switch (e.key) {
        case '1':
            fill = '1';
            break;
        case '2':
            fill = '2';
            break;
        case '3':
            fill = '3';
            break;
        case '4':
            fill = '4';
            break;
        case '5':
            fill = '5';
            break;
        case '6':
            fill = '6';
            break;
        case '7':
            fill = '7';
            break;
        case '8':
            fill = '8';
            break;
        case '9':
            fill = '9';
            break;
        case ' ':
            fill = ' ';
            break;
    }
});

document.querySelector(".z0").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".z0").innerHTML = ' ';
        sudoku[0][0] = '.';
        return;
    }
    if (fill == '' || check('z0'))
        return;
    document.querySelector(".z0").innerHTML = parseInt(fill, 10);
    sudoku[0][0] = fill;
})
document.querySelector(".z1").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".z1").innerHTML = ' ';
        sudoku[0][1] = '.';
        return;
    }
    if (fill == '' || check('z1'))
        return;
    document.querySelector(".z1").innerHTML = parseInt(fill, 10);
    sudoku[0][1] = fill;
})
document.querySelector(".z2").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".z2").innerHTML = ' ';
        sudoku[0][2] = '.';
        return;
    }
    if (fill == '' || check('z2'))
        return;
    document.querySelector(".z2").innerHTML = parseInt(fill, 10);
    sudoku[0][2] = fill;
})
document.querySelector(".z3").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".z3").innerHTML = ' ';
        sudoku[0][3] = '.';
        return;
    }
    if (fill == '' || check('z3'))
        return;
    document.querySelector(".z3").innerHTML = parseInt(fill, 10);
    sudoku[0][3] = fill;
})
document.querySelector(".z4").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".z4").innerHTML = ' ';
        sudoku[0][4] = '.';
        return;
    }
    if (fill == '' || check('z4'))
        return;
    document.querySelector(".z4").innerHTML = parseInt(fill, 10);
    sudoku[0][4] = fill;
})
document.querySelector(".z5").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".z5").innerHTML = ' ';
        sudoku[0][5] = '.';
        return;
    }
    if (fill == '' || check('z5'))
        return;
    document.querySelector(".z5").innerHTML = parseInt(fill, 10);
    sudoku[0][5] = fill;
})
document.querySelector(".z6").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".z6").innerHTML = ' ';
        sudoku[0][6] = '.';
        return;
    }
    if (fill == '' || check('z6'))
        return;
    document.querySelector(".z6").innerHTML = parseInt(fill, 10);
    sudoku[0][6] = fill;
})
document.querySelector(".z7").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".z7").innerHTML = ' ';
        sudoku[0][7] = '.';
        return;
    }
    if (fill == '' || check('z7'))
        return;
    document.querySelector(".z7").innerHTML = parseInt(fill, 10);
    sudoku[0][7] = fill;
})
document.querySelector(".z8").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".z8").innerHTML = ' ';
        sudoku[0][8] = '.';
        return;
    }
    if (fill == '' || check('z8'))
        return;
    document.querySelector(".z8").innerHTML = parseInt(fill, 10);
    sudoku[0][8] = fill;
})
document.querySelector(".o0").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".o0").innerHTML = ' ';
        sudoku[1][0] = '.';
        return;
    }
    if (fill == '' || check('o0'))
        return;
    document.querySelector(".o0").innerHTML = parseInt(fill, 10);
    sudoku[1][0] = fill;
})
document.querySelector(".o1").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".o1").innerHTML = ' ';
        sudoku[1][1] = '.';
        return;
    }
    if (fill == '' || check('o1'))
        return;
    document.querySelector(".o1").innerHTML = parseInt(fill, 10);
    sudoku[1][1] = fill;
})
document.querySelector(".o2").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".o2").innerHTML = ' ';
        sudoku[1][2] = '.';
        return;
    }
    if (fill == '' || check('o2'))
        return;
    document.querySelector(".o2").innerHTML = parseInt(fill, 10);
    sudoku[1][2] = fill;
})
document.querySelector(".o3").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".o3").innerHTML = ' ';
        sudoku[1][3] = '.';
        return;
    }
    if (fill == '' || check('o3'))
        return;
    document.querySelector(".o3").innerHTML = parseInt(fill, 10);
    sudoku[1][3] = fill;
})
document.querySelector(".o4").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".o4").innerHTML = ' ';
        sudoku[1][4] = '.';
        return;
    }
    if (fill == '' || check('o4'))
        return;
    document.querySelector(".o4").innerHTML = parseInt(fill, 10);
    sudoku[1][4] = fill;
})
document.querySelector(".o5").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".o5").innerHTML = ' ';
        sudoku[1][5] = '.';
        return;
    }
    if (fill == '' || check('o5'))
        return;
    document.querySelector(".o5").innerHTML = parseInt(fill, 10);
    sudoku[1][5] = fill;
})
document.querySelector(".o6").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".o6").innerHTML = ' ';
        sudoku[1][6] = '.';
        return;
    }
    if (fill == '' || check('o6'))
        return;
    document.querySelector(".o6").innerHTML = parseInt(fill, 10);
    sudoku[1][6] = fill;
})
document.querySelector(".o7").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".o7").innerHTML = ' ';
        sudoku[1][7] = '.';
        return;
    }
    if (fill == '' || check('o7'))
        return;
    document.querySelector(".o7").innerHTML = parseInt(fill, 10);
    sudoku[1][7] = fill;
})
document.querySelector(".o8").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".o8").innerHTML = ' ';
        sudoku[1][8] = '.';
        return;
    }
    if (fill == '' || check('o8'))
        return;
    document.querySelector(".o8").innerHTML = parseInt(fill, 10);
    sudoku[1][8] = fill;
})
document.querySelector(".t0").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".t0").innerHTML = ' ';
        sudoku[2][0] = '.';
        return;
    }
    if (fill == '' || check('t0'))
        return;
    document.querySelector(".t0").innerHTML = parseInt(fill, 10);
    sudoku[2][0] = fill;
})
document.querySelector(".t1").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".t1").innerHTML = ' ';
        sudoku[2][1] = '.';
        return;
    }
    if (fill == '' || check('t1'))
        return;
    document.querySelector(".t1").innerHTML = parseInt(fill, 10);
    sudoku[2][1] = fill;
})
document.querySelector(".t2").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".t2").innerHTML = ' ';
        sudoku[2][2] = '.';
        return;
    }
    if (fill == '' || check('t2'))
        return;
    document.querySelector(".t2").innerHTML = parseInt(fill, 10);
    sudoku[2][2] = fill;
})
document.querySelector(".t3").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".t3").innerHTML = ' ';
        sudoku[2][3] = '.';
        return;
    }
    if (fill == '' || check('t3'))
        return;
    document.querySelector(".t3").innerHTML = parseInt(fill, 10);
    sudoku[2][3] = fill;
})
document.querySelector(".t4").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".t4").innerHTML = ' ';
        sudoku[2][4] = '.';
        return;
    }
    if (fill == '' || check('t4'))
        return;
    document.querySelector(".t4").innerHTML = parseInt(fill, 10);
    sudoku[2][4] = fill;
})
document.querySelector(".t5").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".t5").innerHTML = ' ';
        sudoku[2][5] = '.';
        return;
    }
    if (fill == '' || check('t5'))
        return;
    document.querySelector(".t5").innerHTML = parseInt(fill, 10);
    sudoku[2][5] = fill;
})
document.querySelector(".t6").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".t6").innerHTML = ' ';
        sudoku[2][6] = '.';
        return;
    }
    if (fill == '' || check('t6'))
        return;
    document.querySelector(".t6").innerHTML = parseInt(fill, 10);
    sudoku[2][6] = fill;
})
document.querySelector(".t7").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".t7").innerHTML = ' ';
        sudoku[2][7] = '.';
        return;
    }
    if (fill == '' || check('t7'))
        return;
    document.querySelector(".t7").innerHTML = parseInt(fill, 10);
    sudoku[2][7] = fill;
})
document.querySelector(".t8").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".t8").innerHTML = ' ';
        sudoku[2][8] = '.';
        return;
    }
    if (fill == '' || check('t8'))
        return;
    document.querySelector(".t8").innerHTML = parseInt(fill, 10);
    sudoku[2][8] = fill;
})
document.querySelector(".th0").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".th0").innerHTML = ' ';
        sudoku[3][0] = '.';
        return;
    }
    if (fill == '' || check('th0'))
        return;
    document.querySelector(".th0").innerHTML = parseInt(fill, 10);
    sudoku[3][0] = fill;
})
document.querySelector(".th1").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".th1").innerHTML = ' ';
        sudoku[3][1] = '.';
        return;
    }
    if (fill == '' || check('th1'))
        return;
    document.querySelector(".th1").innerHTML = parseInt(fill, 10);
    sudoku[3][1] = fill;
})
document.querySelector(".th2").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".th2").innerHTML = ' ';
        sudoku[3][2] = '.';
        return;
    }
    if (fill == '' || check('th2'))
        return;
    document.querySelector(".th2").innerHTML = parseInt(fill, 10);
    sudoku[3][2] = fill;
})
document.querySelector(".th3").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".th3").innerHTML = ' ';
        sudoku[3][3] = '.';
        return;
    }
    if (fill == '' || check('th3'))
        return;
    document.querySelector(".th3").innerHTML = parseInt(fill, 10);
    sudoku[3][3] = fill;
})
document.querySelector(".th4").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".th4").innerHTML = ' ';
        sudoku[3][4] = '.';
        return;
    }
    if (fill == '' || check('th4'))
        return;
    document.querySelector(".th4").innerHTML = parseInt(fill, 10);
    sudoku[3][4] = fill;
})
document.querySelector(".th5").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".th5").innerHTML = ' ';
        sudoku[3][5] = '.';
        return;
    }
    if (fill == '' || check('th5'))
        return;
    document.querySelector(".th5").innerHTML = parseInt(fill, 10);
    sudoku[3][5] = fill;
})
document.querySelector(".th6").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".th6").innerHTML = ' ';
        sudoku[3][6] = '.';
        return;
    }
    if (fill == '' || check('th6'))
        return;
    document.querySelector(".th6").innerHTML = parseInt(fill, 10);
    sudoku[3][6] = fill;
})
document.querySelector(".th7").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".th7").innerHTML = ' ';
        sudoku[3][7] = '.';
        return;
    }
    if (fill == '' || check('th7'))
        return;
    document.querySelector(".th7").innerHTML = parseInt(fill, 10);
    sudoku[3][7] = fill;
})
document.querySelector(".th8").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".th8").innerHTML = ' ';
        sudoku[3][8] = '.';
        return;
    }
    if (fill == '' || check('th8'))
        return;
    document.querySelector(".th8").innerHTML = parseInt(fill, 10);
    sudoku[3][8] = fill;
})
document.querySelector(".f0").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".f0").innerHTML = ' ';
        sudoku[4][0] = '.';
        return;
    }
    if (fill == '' || check('f0'))
        return;
    document.querySelector(".f0").innerHTML = parseInt(fill, 10);
    sudoku[4][0] = fill;
})
document.querySelector(".f1").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".f1").innerHTML = ' ';
        sudoku[4][1] = '.';
        return;
    }
    if (fill == '' || check('f1'))
        return;
    document.querySelector(".f1").innerHTML = parseInt(fill, 10);
    sudoku[4][1] = fill;
})
document.querySelector(".f2").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".f2").innerHTML = ' ';
        sudoku[4][2] = '.';
        return;
    }
    if (fill == '' || check('f2'))
        return;
    document.querySelector(".f2").innerHTML = parseInt(fill, 10);
    sudoku[4][2] = fill;
})
document.querySelector(".f3").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".f3").innerHTML = ' ';
        sudoku[4][3] = '.';
        return;
    }
    if (fill == '' || check('f3'))
        return;
    document.querySelector(".f3").innerHTML = parseInt(fill, 10);
    sudoku[4][3] = fill;
})
document.querySelector(".f4").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".f4").innerHTML = ' ';
        sudoku[4][4] = '.';
        return;
    }
    if (fill == '' || check('f4'))
        return;
    document.querySelector(".f4").innerHTML = parseInt(fill, 10);
    sudoku[4][4] = fill;
})
document.querySelector(".f5").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".f5").innerHTML = ' ';
        sudoku[4][5] = '.';
        return;
    }
    if (fill == '' || check('f5'))
        return;
    document.querySelector(".f5").innerHTML = parseInt(fill, 10);
    sudoku[4][5] = fill;
})
document.querySelector(".f6").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".f6").innerHTML = ' ';
        sudoku[4][6] = '.';
        return;
    }
    if (fill == '' || check('f6'))
        return;
    document.querySelector(".f6").innerHTML = parseInt(fill, 10);
    sudoku[4][6] = fill;
})
document.querySelector(".f7").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".f7").innerHTML = ' ';
        sudoku[4][7] = '.';
        return;
    }
    if (fill == '' || check('f7'))
        return;
    document.querySelector(".f7").innerHTML = parseInt(fill, 10);
    sudoku[4][7] = fill;
})
document.querySelector(".f8").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".f8").innerHTML = ' ';
        sudoku[4][8] = '.';
        return;
    }
    if (fill == '' || check('f8'))
        return;
    document.querySelector(".f8").innerHTML = parseInt(fill, 10);
    sudoku[4][8] = fill;
})
document.querySelector(".fi0").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".fi0").innerHTML = ' ';
        sudoku[5][0] = '.';
        return;
    }
    if (fill == '' || check('fi0'))
        return;
    document.querySelector(".fi0").innerHTML = parseInt(fill, 10);
    sudoku[5][0] = fill;
})
document.querySelector(".fi1").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".fi1").innerHTML = ' ';
        sudoku[5][1] = '.';
        return;
    }
    if (fill == '' || check('fi1'))
        return;
    document.querySelector(".fi1").innerHTML = parseInt(fill, 10);
    sudoku[5][1] = fill;
})
document.querySelector(".fi2").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".fi2").innerHTML = ' ';
        sudoku[5][2] = '.';
        return;
    }
    if (fill == '' || check('fi2'))
        return;
    document.querySelector(".fi2").innerHTML = parseInt(fill, 10);
    sudoku[5][2] = fill;
})
document.querySelector(".fi3").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".fi3").innerHTML = ' ';
        sudoku[5][3] = '.';
        return;
    }
    if (fill == '' || check('fi3'))
        return;
    document.querySelector(".fi3").innerHTML = parseInt(fill, 10);
    sudoku[5][3] = fill;
})
document.querySelector(".fi4").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".fi4").innerHTML = ' ';
        sudoku[5][4] = '.';
        return;
    }
    if (fill == '' || check('fi4'))
        return;
    document.querySelector(".fi4").innerHTML = parseInt(fill, 10);
    sudoku[5][4] = fill;
})
document.querySelector(".fi5").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".fi5").innerHTML = ' ';
        sudoku[5][5] = '.';
        return;
    }
    if (fill == '' || check('fi5'))
        return;
    document.querySelector(".fi5").innerHTML = parseInt(fill, 10);
    sudoku[5][5] = fill;
})
document.querySelector(".fi6").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".fi6").innerHTML = ' ';
        sudoku[5][6] = '.';
        return;
    }
    if (fill == '' || check('fi6'))
        return;
    document.querySelector(".fi6").innerHTML = parseInt(fill, 10);
    sudoku[5][6] = fill;
})
document.querySelector(".fi7").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".fi7").innerHTML = ' ';
        sudoku[5][7] = '.';
        return;
    }
    if (fill == '' || check('fi7'))
        return;
    document.querySelector(".fi7").innerHTML = parseInt(fill, 10);
    sudoku[5][7] = fill;
})
document.querySelector(".fi8").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".fi8").innerHTML = ' ';
        sudoku[5][8] = '.';
        return;
    }
    if (fill == '' || check('fi8'))
        return;
    document.querySelector(".fi8").innerHTML = parseInt(fill, 10);
    sudoku[5][8] = fill;
})
document.querySelector(".s0").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".s0").innerHTML = ' ';
        sudoku[6][0] = '.';
        return;
    }
    if (fill == '' || check('s0'))
        return;
    document.querySelector(".s0").innerHTML = parseInt(fill, 10);
    sudoku[6][0] = fill;
})
document.querySelector(".s1").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".s1").innerHTML = ' ';
        sudoku[6][1] = '.';
        return;
    }
    if (fill == '' || check('s1'))
        return;
    document.querySelector(".s1").innerHTML = parseInt(fill, 10);
    sudoku[6][1] = fill;
})
document.querySelector(".s2").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".s2").innerHTML = ' ';
        sudoku[6][2] = '.';
        return;
    }
    if (fill == '' || check('s2'))
        return;
    document.querySelector(".s2").innerHTML = parseInt(fill, 10);
    sudoku[6][2] = fill;
})
document.querySelector(".s3").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".s3").innerHTML = ' ';
        sudoku[6][3] = '.';
        return;
    }
    if (fill == '' || check('s3'))
        return;
    document.querySelector(".s3").innerHTML = parseInt(fill, 10);
    sudoku[6][3] = fill;
})
document.querySelector(".s4").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".s4").innerHTML = ' ';
        sudoku[6][4] = '.';
        return;
    }
    if (fill == '' || check('s4'))
        return;
    document.querySelector(".s4").innerHTML = parseInt(fill, 10);
    sudoku[6][4] = fill;
})
document.querySelector(".s5").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".s5").innerHTML = ' ';
        sudoku[6][5] = '.';
        return;
    }
    if (fill == '' || check('s5'))
        return;
    document.querySelector(".s5").innerHTML = parseInt(fill, 10);
    sudoku[6][5] = fill;
})
document.querySelector(".s6").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".s6").innerHTML = ' ';
        sudoku[6][6] = '.';
        return;
    }
    if (fill == '' || check('s6'))
        return;
    document.querySelector(".s6").innerHTML = parseInt(fill, 10);
    sudoku[6][6] = fill;
})
document.querySelector(".s7").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".s7").innerHTML = ' ';
        sudoku[6][7] = '.';
        return;
    }
    if (fill == '' || check('s7'))
        return;
    document.querySelector(".s7").innerHTML = parseInt(fill, 10);
    sudoku[6][7] = fill;
})
document.querySelector(".s8").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".s8").innerHTML = ' ';
        sudoku[6][8] = '.';
        return;
    }
    if (fill == '' || check('s8'))
        return;
    document.querySelector(".s8").innerHTML = parseInt(fill, 10);
    sudoku[6][8] = fill;
})
document.querySelector(".se0").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".se0").innerHTML = ' ';
        sudoku[7][0] = '.';
        return;
    }
    if (fill == '' || check('se0'))
        return;
    document.querySelector(".se0").innerHTML = parseInt(fill, 10);
    sudoku[7][0] = fill;
})
document.querySelector(".se1").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".se1").innerHTML = ' ';
        sudoku[7][1] = '.';
        return;
    }
    if (fill == '' || check('se1'))
        return;
    document.querySelector(".se1").innerHTML = parseInt(fill, 10);
    sudoku[7][1] = fill;
})
document.querySelector(".se2").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".se2").innerHTML = ' ';
        sudoku[7][2] = '.';
        return;
    }
    if (fill == '' || check('se2'))
        return;
    document.querySelector(".se2").innerHTML = parseInt(fill, 10);
    sudoku[7][2] = fill;
})
document.querySelector(".se3").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".se3").innerHTML = ' ';
        sudoku[7][3] = '.';
        return;
    }
    if (fill == '' || check('se3'))
        return;
    document.querySelector(".se3").innerHTML = parseInt(fill, 10);
    sudoku[7][3] = fill;
})
document.querySelector(".se4").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".se4").innerHTML = ' ';
        sudoku[7][4] = '.';
        return;
    }
    if (fill == '' || check('se4'))
        return;
    document.querySelector(".se4").innerHTML = parseInt(fill, 10);
    sudoku[7][4] = fill;
})
document.querySelector(".se5").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".se5").innerHTML = ' ';
        sudoku[7][5] = '.';
        return;
    }
    if (fill == '' || check('se5'))
        return;
    document.querySelector(".se5").innerHTML = parseInt(fill, 10);
    sudoku[7][5] = fill;
})
document.querySelector(".se6").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".se6").innerHTML = ' ';
        sudoku[7][6] = '.';
        return;
    }
    if (fill == '' || check('se6'))
        return;
    document.querySelector(".se6").innerHTML = parseInt(fill, 10);
    sudoku[7][6] = fill;
})
document.querySelector(".se7").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".se7").innerHTML = ' ';
        sudoku[7][7] = '.';
        return;
    }
    if (fill == '' || check('se7'))
        return;
    document.querySelector(".se7").innerHTML = parseInt(fill, 10);
    sudoku[7][7] = fill;
})
document.querySelector(".se8").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".se8").innerHTML = ' ';
        sudoku[7][8] = '.';
        return;
    }
    if (fill == '' || check('se8'))
        return;
    document.querySelector(".se8").innerHTML = parseInt(fill, 10);
    sudoku[7][8] = fill;
})
document.querySelector(".e0").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".e0").innerHTML = ' ';
        sudoku[8][0] = '.';
        return;
    }
    if (fill == '' || check('e0'))
        return;
    document.querySelector(".e0").innerHTML = parseInt(fill, 10);
    sudoku[8][0] = fill;
})
document.querySelector(".e1").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".e1").innerHTML = ' ';
        sudoku[8][1] = '.';
        return;
    }
    if (fill == '' || check('e1'))
        return;
    document.querySelector(".e1").innerHTML = parseInt(fill, 10);
    sudoku[8][1] = fill;
})
document.querySelector(".e2").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".e2").innerHTML = ' ';
        sudoku[8][2] = '.';
        return;
    }
    if (fill == '' || check('e2'))
        return;
    document.querySelector(".e2").innerHTML = parseInt(fill, 10);
    sudoku[8][2] = fill;
})
document.querySelector(".e3").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".e3").innerHTML = ' ';
        sudoku[8][3] = '.';
        return;
    }
    if (fill == '' || check('e3'))
        return;
    document.querySelector(".e3").innerHTML = parseInt(fill, 10);
    sudoku[8][3] = fill;
})
document.querySelector(".e4").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".e4").innerHTML = ' ';
        sudoku[8][4] = '.';
        return;
    }
    if (fill == '' || check('e4'))
        return;
    document.querySelector(".e4").innerHTML = parseInt(fill, 10);
    sudoku[8][4] = fill;
})
document.querySelector(".e5").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".e5").innerHTML = ' ';
        sudoku[8][5] = '.';
        return;
    }
    if (fill == '' || check('e5'))
        return;
    document.querySelector(".e5").innerHTML = parseInt(fill, 10);
    sudoku[8][5] = fill;
})
document.querySelector(".e6").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".e6").innerHTML = ' ';
        sudoku[8][6] = '.';
        return;
    }
    if (fill == '' || check('e6'))
        return;
    document.querySelector(".e6").innerHTML = parseInt(fill, 10);
    sudoku[8][6] = fill;
})
document.querySelector(".e7").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".e7").innerHTML = ' ';
        sudoku[8][7] = '.';
        return;
    }
    if (fill == '' || check('e7'))
        return;
    document.querySelector(".e7").innerHTML = parseInt(fill, 10);
    sudoku[8][7] = fill;
})
document.querySelector(".e8").addEventListener('click', e => {
    if (fill == ' ') {
        document.querySelector(".e8").innerHTML = ' ';
        sudoku[8][8] = '.';
        return;
    }
    if (fill == '' || check('e8'))
        return;
    document.querySelector(".e8").innerHTML = parseInt(fill, 10);
    sudoku[8][8] = fill;
})

function check(cord) {
    const y = cord[cord.length - 1];
    const x = cord.slice(0, cord.length - 1);
    for (let i = 0; i < 9; i++) {
        var clname;
        switch (i) {
            case 0:
                clname = 'z' + y;
                break;
            case 1:
                clname = 'o' + y;
                break;
            case 2:
                clname = 't' + y;
                break;
            case 3:
                clname = 'th' + y;
                break;
            case 4:
                clname = 'f' + y;
                break;
            case 5:
                clname = 'fi' + y;
                break;
            case 6:
                clname = 's' + y;
                break;
            case 7:
                clname = 'se' + y;
                break;
            case 8:
                clname = 'e' + y;
                break;
        }
        if (document.querySelector('.' + clname).innerHTML == fill && clname.slice(0, clname.length - 1) != x)
            return true;
    }
    for (let i = 0; i < 9; i++) {
        var clname = x + i;
        if (document.querySelector('.' + clname).innerHTML == fill && i != y)
            return true;
    }
    if ((x == 'z' || x == 'o' || x == 't') && (y >= 0 && y < 3)) {
        for (let j = 0; j < 3; j++) {
            let clname1 = 'z' + j;
            let clname2 = 'o' + j;
            let clname3 = 't' + j;
            if (document.querySelector('.' + clname1).innerHTML == fill && (x != 'z' && j != y))
                return true;
            if (document.querySelector('.' + clname2).innerHTML == fill && (x != 'o' && j != y))
                return true;
            if (document.querySelector('.' + clname3).innerHTML == fill && (x != 't' && j != y))
                return true;
        }
    }
    else if ((x == 'z' || x == 'o' || x == 't') && (y >= 3 && y < 6)) {
        for (let j = 3; j < 6; j++) {
            let clname1 = 'z' + j;
            let clname2 = 'o' + j;
            let clname3 = 't' + j;
            if (document.querySelector('.' + clname1).innerHTML == fill && (x != 'z' && j != y))
                return true;
            if (document.querySelector('.' + clname2).innerHTML == fill && (x != 'o' && j != y))
                return true;
            if (document.querySelector('.' + clname3).innerHTML == fill && (x != 't' && j != y))
                return true;
        }
    }
    else if ((x == 'z' || x == 'o' || x == 't') && (y >= 6 && y < 9)) {
        for (let j = 6; j < 9; j++) {
            let clname1 = 'z' + j;
            let clname2 = 'o' + j;
            let clname3 = 't' + j;
            if (document.querySelector('.' + clname1).innerHTML == fill && (x != 'z' && j != y))
                return true;
            if (document.querySelector('.' + clname2).innerHTML == fill && (x != 'o' && j != y))
                return true;
            if (document.querySelector('.' + clname3).innerHTML == fill && (x != 't' && j != y))
                return true;
        }
    }
    else if ((x == 'th' || x == 'f' || x == 'fi') && (y >= 0 && y < 3)) {
        for (let j = 0; j < 3; j++) {
            let clname1 = 'th' + j;
            let clname2 = 'f' + j;
            let clname3 = 'fi' + j;
            if (document.querySelector('.' + clname1).innerHTML == fill && (x != 'th' && j != y))
                return true;
            if (document.querySelector('.' + clname2).innerHTML == fill && (x != 'f' && j != y))
                return true;
            if (document.querySelector('.' + clname3).innerHTML == fill && (x != 'fi' && j != y))
                return true;
        }
    }
    else if ((x == 'th' || x == 'f' || x == 'fi') && (y >= 3 && y < 6)) {
        for (let j = 3; j < 6; j++) {
            let clname1 = 'th' + j;
            let clname2 = 'f' + j;
            let clname3 = 'fi' + j;
            if (document.querySelector('.' + clname1).innerHTML == fill && (x != 'th' && j != y))
                return true;
            if (document.querySelector('.' + clname2).innerHTML == fill && (x != 'f' && j != y))
                return true;
            if (document.querySelector('.' + clname3).innerHTML == fill && (x != 'fi' && j != y))
                return true;
        }
    }
    else if ((x == 'th' || x == 'f' || x == 'fi') && (y >= 6 && y < 9)) {
        for (let j = 6; j < 9; j++) {
            let clname1 = 'th' + j;
            let clname2 = 'f' + j;
            let clname3 = 'fi' + j;
            if (document.querySelector('.' + clname1).innerHTML == fill && (x != 'th' && j != y))
                return true;
            if (document.querySelector('.' + clname2).innerHTML == fill && (x != 'f' && j != y))
                return true;
            if (document.querySelector('.' + clname3).innerHTML == fill && (x != 'fi' && j != y))
                return true;
        }
    }
    else if ((x == 's' || x == 'se' || x == 'e') && (y >= 0 && y < 3)) {
        for (let j = 0; j < 3; j++) {
            let clname1 = 's' + j;
            let clname2 = 'se' + j;
            let clname3 = 'e' + j;
            if (document.querySelector('.' + clname1).innerHTML == fill && (x != 's' && j != y))
                return true;
            if (document.querySelector('.' + clname2).innerHTML == fill && (x != 'se' && j != y))
                return true;
            if (document.querySelector('.' + clname3).innerHTML == fill && (x != 'e' && j != y))
                return true;
        }
    }
    else if ((x == 's' || x == 'se' || x == 'e') && (y >= 3 && y < 6)) {
        for (let j = 3; j < 6; j++) {
            let clname1 = 's' + j;
            let clname2 = 'se' + j;
            let clname3 = 'e' + j;
            if (document.querySelector('.' + clname1).innerHTML == fill && (x != 's' && j != y))
                return true;
            if (document.querySelector('.' + clname2).innerHTML == fill && (x != 'se' && j != y))
                return true;
            if (document.querySelector('.' + clname3).innerHTML == fill && (x != 'e' && j != y))
                return true;
        }
    }
    else if ((x == 's' || x == 'se' || x == 'e') && (y >= 6 && y < 9)) {
        for (let j = 6; j < 9; j++) {
            let clname1 = 's' + j;
            let clname2 = 'se' + j;
            let clname3 = 'e' + j;
            if (document.querySelector('.' + clname1).innerHTML == fill && (x != 's' && j != y))
                return true;
            if (document.querySelector('.' + clname2).innerHTML == fill && (x != 'se' && j != y))
                return true;
            if (document.querySelector('.' + clname3).innerHTML == fill && (x != 'e' && j != y))
                return true;
        }
    }
    return false;
}

document.querySelector(".solve").addEventListener('click', e => {
    var sud = solve(sudoku);
    if (sud != false) {
        sudoku=sud;
        for (let i = 0; i < 9; i++) {
            let str;
            switch (i) {
                case 0:
                    str = 'z';
                    break;
                case 1:
                    str = 'o';
                    break;
                case 2:
                    str = 't';
                    break;
                case 3:
                    str = 'th';
                    break;
                case 4:
                    str = 'f';
                    break;
                case 5:
                    str = 'fi';
                    break;
                case 6:
                    str = 's';
                    break;
                case 7:
                    str = 'se';
                    break;
                case 8:
                    str = 'e';
                    break;
            }
            setTimeout(() => {
                for (let j = 0; j < 9; j++) {
                    const interval = setInterval(() => {
                        let clname = str + j;
                        document.querySelector('.' + clname).innerHTML = sudoku[i][j];
                        j++;
                        if (j === 9) {
                            clearInterval(interval);
                        }
                    }, 30 * j);
                }
            }, 60 * (i));
        }
    }
    else {
        console.log(alert("NO SOLUTION EXISTS"));
    }
})

document.querySelector(".erase").addEventListener('click', e => {
    fill = ' ';
})

document.querySelector(".reset").addEventListener('click', e => {
    for (let i = 0; i < 9; i++) {
        let str;
        switch (i) {
            case 0:
                str = 'z';
                break;
            case 1:
                str = 'o';
                break;
            case 2:
                str = 't';
                break;
            case 3:
                str = 'th';
                break;
            case 4:
                str = 'f';
                break;
            case 5:
                str = 'fi';
                break;
            case 6:
                str = 's';
                break;
            case 7:
                str = 'se';
                break;
            case 8:
                str = 'e';
                break;
        }
        for (let j = 0; j < 9; j++) {
            let clname = str + j;
            document.querySelector('.' + clname).innerHTML = ' ';
            sudoku[i][j] = '.';
        }
    }
})

function solve(board) {
    if (solved(board))
        return board;
    else {
        var isudoku = validboard(board);
        return solvesudoku(isudoku);
    }
}

function solvesudoku(boards) {
    if (boards.length == 0) {
        return false;
    }
    else {
        var one = boards.shift();
        var isvalid = solve(one);
        if (isvalid != false) {
            return isvalid;
        }
        else {
            return solvesudoku(boards);
        }
    }
}

function validboard(board) {
    let sarr = [];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                for (let n = 1; n <= 9; n++) {
                    if (issafe(board, i, j, n)) {
                        var newboard = [...board];
                        var row = [...newboard[i]];
                        row[j] = n;
                        newboard[i] = row;
                        sarr.push(newboard);
                    }
                }
                return sarr;
            }
        }
    }
}

function issafe(board, row, col, n) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] == n)
            return false;
    }
    for (let i = 0; i < 9; i++) {
        if (board[i][col] == n)
            return false;
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i + (row - (row % 3))][j + (col - (col % 3))] == n)
                return false;
        }
    }
    return true;
}

function solved(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                return false;
            }
        }
    }
    return true;
}
