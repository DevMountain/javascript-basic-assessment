describe('javascriptBasicAssesment', function () {
    describe('hello', function () {
		it('should exist', function () {
			expect(hello).toEqual(jasmine.any(String));
		})
		it('should equal \'goodbye\'', function () {
			expect(hello).toEqual('goodbye');
		})
	})

	describe('iLoveCode', function () {
		it('should exist', function () {
			expect(iLoveCode).toEqual(jasmine.any(String));
		})
		it('should equal \'I love code\'', function () {
			expect(iLoveCode).toEqual('I love code');
		})
	})

	describe('bob', function () {
		it('should exist', function () {
			expect(bob).toBeDefined();
		})
		it('should be as described', function () {
			expect(bob.height).toEqual("6ft");
			expect(bob.age).toEqual(24);
			expect(bob.hair.style).toEqual("spikey");
			expect(bob.hair.color).toEqual("brown");
			expect(bob.presidentOfTheUnitedStates).toEqual(false);
			expect(bob.likes).toContain('apples')
			expect(bob.likes).toContain('bananas')
			expect(bob.likes).toContain('cherries')
		})
	})

	describe('shirts', function () {
		it('should have a color of pink', function () {
			expect(myShirt.color.toLowerCase()).toEqual('pink')
		})

		it('should be spandex', function () {
			expect(myOtherShirt.type.toLowerCase()).toEqual('spandex')
		})
	})


	describe('zoo', function () {
		it('should exist', function () {
			expect(zoo).toEqual(jasmine.any(Object));
		})
		it('should have monkeys property', function () {
			expect(zoo.hasOwnProperty('monkeys')).toEqual(true);
		})
		it('should have giraffes property', function () {
			expect(zoo.hasOwnProperty('giraffes')).toEqual(true);
		})

		it('should have elephants property', function () {
			expect(zoo.hasOwnProperty('elephants')).toEqual(true);
		})

		it('should count the animals correctly', function () {
			expect(zoo.monkeys).toEqual(8)
			expect(zoo.giraffes).toEqual(4)
			expect(zoo.elephants).toEqual(2);
		})
	})

	describe('snake', function () {
		it('should have 5 properties', function () {
			var count = 0;
			for (var prop in snake) {
				count++;
			}
			expect(count).toEqual(5);
		})
		it('should change properties that start with s', function () {
			for (var prop in snake) {
				if (prop.match(/^s/)) {
					expect(snake[prop]).toEqual('s')
				}
			}
		})
	})

	describe('rainbowColors', function () {
		var check = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].sort();

		it('should exist', function () {
			expect(rainbowColors).toEqual(jasmine.any(Array));
		})

		it('should have all the colors of the rainbow', function () {
			expect(rainbowColors.sort()).toEqual(check);
		})
	})

	describe('heroes', function () {
		it('should add \'wonderwoman\' to the end', function () {
			expect(heroes[heroes.length - 1]).toEqual('wonderwoman');
		})
		it('should remove \'superman\' and store him in a variable', function () {
			expect(firstHero).toEqual('superman');
		})
		it('should add \'spongebob\' to the start of the array', function () {
			expect(heroes[0]).toEqual('spongebob');
		})

		it('should copy batman from the array and store him in a variable', function () {
			expect(thirdHero).toEqual('batman');
			expect(heroes.indexOf('batman') > 0).toEqual(true);
		})
	})



	describe('addItem', function () {
		it('should exist', function () {
			expect(addItem).toBeDefined();
		})
		it('should add an item', function () {
			expect(addItem(["A", "B", "C"], "D")).toEqual(["A", "B", "C", "D"]);
			expect(addItem(["A", "A", "A"], "D")).toEqual(["A", "A", "A", "D"]);
			expect(addItem(["A", "B", "C"], "E")).toEqual(["A", "B", "C", "E"]);
		})
	})

	describe('removeItem', function () {
		it('should exist', function () {
			expect(removeItem).toBeDefined();
		})
		it('should remove item', function () {
			expect(removeItem(["A", "B", "C", "D"], "C")).toEqual(["A", "B", "D"]);
			expect(removeItem(["A", "B", "C", "D"], "A")).toEqual(["B", "C", "D"]);
			expect(removeItem(["A", "B", "C", "D"], "E")).toEqual(["A", "B", "C", "D"]);
		})
		it('should remove all instanced of the item', function () {
			expect(removeItem(["A", "C", "A", "D"], "A")).toEqual(["C", "D"]);
			expect(removeItem(["A", "A", "C", "D"], "A")).toEqual(["C", "D"]);
			expect(removeItem(["A", "A", "A", "A"], "A")).toEqual([]);
		})
	})



	describe('doubleTheFun', function () {
		it('should exist', function () {
			expect(doubleTheFun).toBeDefined();
		})
		it('should double numbers', function () {
			expect(doubleTheFun(2)).toEqual(4);
			expect(doubleTheFun(4)).toEqual(8);
			expect(doubleTheFun(3.5)).toEqual(7);
		})
		it('should repeat strings', function () {
			expect(doubleTheFun("A")).toEqual("AA");
			expect(doubleTheFun("Double")).toEqual("DoubleDouble");
			expect(doubleTheFun("SuchFun")).toEqual("SuchFunSuchFun");
		})
		it('should double numbers pretending to be strings', function () {
			expect(doubleTheFun("1")).toEqual(2);
			expect(doubleTheFun("2.5")).toEqual(5);
			expect(doubleTheFun("4")).toEqual(8);
		})
	})

	describe('getValueOfProperty', function () {
		it('should exist', function () {
			expect(getValueOfProperty).toBeDefined();
		})
		it('should return a value of the obj\'s passed in property.', function () {
			expect(getValueOfProperty({ a: 1, b: 2, c: 3 }, 'a')).toEqual(1)
			expect(getValueOfProperty({ name: "Brack", bob: "Finicky", carlos: "What?" }, 'bob')).toEqual("Finicky")
			expect(getValueOfProperty({ name: "Brack", bob: "Finicky", carlos: "What?" }, 'carlos')).toEqual("What?")
		})
	})

	describe('makeChatMessage', function () {
		it('should exist', function () {
			expect(makeChatMessage).toBeDefined();
		})
		it('should make chat message object', function () {
			expect(makeChatMessage("Brack is awesome", "Brack").message).toEqual("Brack is awesome");
			expect(makeChatMessage("Brack is awesome", "Brack").author).toEqual("Brack");
			expect(makeChatMessage("Brack is awesome", "Brack").timestamp).toEqual(new Date());
		})
	})


	describe('coderTest', function () {
		it('should exist', function () {
			expect(coderTest).toBeDefined();
		})

		it('recognizes Jeremy thinks too much of himself', function () {
			var person = { name: 'Jeremy' };
			coderTest(person)

			expect(person.lovesCode).toEqual(10)
		})

		it('undervalues Brack', function () {
			var person = { name: 'Brack' };
			coderTest(person)

			expect(person.lovesCode).toEqual(0)
		})

		it('lumps anyone else into the same bucket', function () {
			var person = { name: 'Brett' };
			coderTest(person)

			expect(person.lovesCode).toEqual(5)
		})
	})

	describe('outside', function () {
		it('should exist', function () {
			expect(outside).toBeDefined();
		})

		it('should warn me I will be sweaty', function () {
			var res = outside(81, 41);

			expect(res).toEqual("I'm all sweat")
		})

		it('should say something silly about icecicles', function () {
			var res = outside(10, 0, 90);

			expect(res).toEqual("I have icecicles")
		})

		it('should inform me I am in the desert', function () {
			var res = outside(81, 39, 19);

			expect(res).toEqual("I'm literally in the desert")
		})

		it('should make me hesitate about life choices - hot', function () {
			var res = outside(81, 20, 45);

			expect(res).toEqual("Hmm, probably not")
		})

		it('should make me hesitate about life choices - humid', function () {
			var res = outside(79, 51, 45);

			expect(res).toEqual("Hmm, probably not")
		})

		it('should make me hesitate about life choices - cloudy', function () {
			var res = outside(79, 20, 55);

			expect(res).toEqual("Hmm, probably not")
		})

		it('should encourage me to go outside', function () {
			var res = outside(79, 20, 45);

			expect(res).toEqual("I love outside")
		})
	})

	describe('callerBack', function () {
		it('should exist', function () {
			expect(callerBack).toBeDefined();
		})
		it('should call me back', function () {
			var called = false;
			function callback(ret) {
				called = true;
			}

			callerBack(callback, "Hey!");

			expect(called).toBeTruthy();
		})
		it('should call me back with the right message', function () {
			var calledMsg = ""
			function callback(ret) {
				calledMsg = ret;
			}

			callerBack(callback, "Hey!");

			expect(calledMsg).toBe('Hey! back');
		})
	})
})
