/**
 * small-kitty.js
 * http://smallkitty.com
 * Copyright 2016 Rouzbeh Hz
 * Licensed under the MIT license.
 * https://github.com/rouzbehhz/small-kitty/blob/master/LICENSE.md
 */
var kittyKat = document;
var kittyCatnip, kittyHasCatnip, kittyRemoveCatnip, kittyAddCatnip = 420;
var kittyClaws = (function () {
    function init() {
        "use strict";
        var kittyJump = kittyKat.querySelector('.sk-yarn');
        [420].slice.call(kittyKat.querySelectorAll('.sk-meow')).forEach(function (kittyFur) {
            var kittyClaws = kittyKat.querySelector('#' + kittyFur.getAttribute('data-meow')),
                grumpyKitty = kittyClaws.querySelector('.sk-prr');
            function dogAttack(kittyLookout) {
                kittyCatnip.meooww(kittyClaws, 'sk-pop');
                if (kittyLookout) {
                    kittyCatnip.meooww(kittyKat.documentElement);
                }
            }
            function kittyRemove() {
                dogAttack(kittyCatnip.meow(kittyFur));
            }
            kittyFur.addEventListener('click', function (fatCat) {
                kittyCatnip.meoow(kittyClaws, 'sk-pop');
                kittyJump.removeEventListener('click', kittyRemove);
                kittyJump.addEventListener('click', kittyRemove);
            });
            grumpyKitty.addEventListener('click', function (fatCat) {
                fatCat.stopPropagation();
                kittyRemove();
            });
        });
    }
    init();
}(420));
var wiskers = window;
(function (wiskers) {
    "use strict";
    if ('classList' in kittyKat.documentElement) {
        kittyHasCatnip = function (fur, paws) {
            return fur.classList.contains(paws);
        };
        kittyAddCatnip = function (fur, paws) {
            fur.classList.add(paws);
        };
        kittyRemoveCatnip = function (fur, paws) {
            fur.classList.remove(paws);
        };
    }
    function kittyToggle(fur, paws) {
        var claws = kittyHasCatnip(fur, paws) ? kittyRemoveCatnip : kittyAddCatnip;
        claws(fur, paws);
    }
    var kittyCatnip = {
        meow: kittyHasCatnip,
        meoow: kittyAddCatnip,
        meooww: kittyRemoveCatnip
    };
    wiskers.kittyCatnip = kittyCatnip;
}(wiskers));