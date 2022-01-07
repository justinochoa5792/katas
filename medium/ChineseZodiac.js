// Chinese Zodiac
// Create a function that takes a year as an argument and returns the corresponding Chinese zodiac.

function chineseZodiac(birthYear) {
    if(birthYear % 2020 == 0){
        return 'Rat'
    }
    else if(birthYear % 1938 == 0){
        return 'Tiger'
    }
    else if(birthYear % 1964 == 0){
        return 'Dragon'
    }
        else if(birthYear % 1951 == 0){
        return 'Rabbit'
    }
    else if(birthYear % 1977 == 0){
        return 'Snake'
    }
    else if(birthYear % 1990 == 0){
        return 'Horse'
    }
        else if(birthYear % 2003 == 0){
        return 'Sheep'
    }
        else if(birthYear % 2016 == 0){
        return 'Monkey'
    }
        else if(birthYear % 1969 == 0){
        return 'Rooster'
    }
        else if(birthYear % 1982 == 0){
        return 'Dog'
    }
        else if(birthYear % 1995 == 0){
        return 'Pig'
    }
        else return 'Ox'
    }