var assert = require('assert');

function romanDigitToNumber(letter) {
        if(letter=='I')
            return 1;
        if(letter=='V')
            return 5;
        if(letter=='X')
            return 10;
        if(letter=='L')
            return 50;
        if(letter=='C')
            return 100;
        if(letter=='D')
            return 500;
        if(letter=='M')
            return 1000;
    ;
}

function romanNumber(str) {
    var result = 0;

    //gehe über jeden Buchstaben
    for (var i=0; i < str.length; i++) {

        // Konvertiere aktuellen Buchstaben zu einer Zahl
        var currentLetter = str[i];
        var currentNumber = romanDigitToNumber(currentLetter);

        // wenn es einen Nachfolger gibt ...
        var nextPos = i + 1;
        if(nextPos < str.length) {
            var nextLetter = str[nextPos];
            var nextNumber = romanDigitToNumber(nextLetter);

            // und dieser größer ist, dann drehe das Vorzeichen
            if (nextNumber > currentNumber) {
                currentNumber = -1 * currentNumber;
            }
        }

        result += currentNumber;
    }
    return result;
}


describe('roman numbers', function() {
    it('letter I should be 1', function() {

        //given
        var letter = 'I';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 1);
    });

    it('letter V should be 5', function() {

        //given
        var letter = 'V';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 5);
    });

    it('letter X should be 10', function() {

        //given
        var letter = 'X';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 10);
    });

    it('letter L should be 50', function() {

        //given
        var letter = 'L';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 50);
    });

    it('letter C should be 100', function() {

        //given
        var letter = 'C';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 100);
    });

    it('letter D should be 500', function() {

        //given
        var letter = 'D';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 500);
    });

    it('letter M should be 1000', function() {

        //given
        var letter = 'M';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 1000);
    });

    it('letter II should be 2', function() {

        //given
        var letter = 'II';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 2);
    });

    it('letter IX should be 9', function() {

        //given
        var letter = 'IX';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 9);
    });

    it('letter MDCCCCLXXXIIII should be 1984', function() {

        //given
        var letter = 'MDCCCCLXXXIIII';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 1984);
    });

    it('letter MCMLXXXIV should be 1984', function() {

        //given
        var letter = 'MCMLXXXIV';

        //when
        var number = romanNumber(letter);

        //then
        assert.equal(number, 1984);
    });

  });