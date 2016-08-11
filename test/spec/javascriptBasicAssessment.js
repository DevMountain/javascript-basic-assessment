describe('javascriptBasicAssesment', function () {
    describe('up', function () {
		it('should exist', function () {
			expect(up).toEqual(jasmine.any(String));
		});
		it('should equal \'down\'', function () {
			expect(up).toEqual('down');
		});
	});

	describe('iHeartJavascript', function () {
		it('should exist', function () {
			expect(iHeart).toEqual(jasmine.any(String));
		});
		it('should equal \'I heart javascript\'', function () {
			expect(iHeartJavascript).toEqual('I heart javascript');
		});
	});

	describe('developer', function () {
		it('should exist', function () {
			expect(developer).toBeDefined();
		});
		it('should be as described', function () {
			expect(developer.title.toLowerCase()).toEqual("junior");
      expect(developer.salary).toEqual(jasmine.any(Number));
			expect(developer.salary).toEqual(55000);
			expect(developer.laptop.type.toLowerCase()).toEqual("macbook");
			// expect(developer.laptop.year).toEqual("2016");
      expect(developer.laptop.year == '2016').toBe(true);
			expect(developer.billGates).toEqual(false);
			expect(developer.likes).toContain('isolation');
			expect(developer.likes).toContain('caffeine');
			expect(developer.likes).toContain('pizza');
		});
	});

	describe('dogs', function () {
		it('should have a name of Fido', function () {
			expect(myDog.name.toLowerCase()).toEqual('fido');
		});

		it('should be hairless', function () {
			expect(myOtherDog.type.toLowerCase()).toEqual('hairless');
		});
	});


	describe('school', function () {
		it('should exist', function () {
			expect(school).toEqual(jasmine.any(Object));
		});
		it('should have \'first\' grade property', function () {
			expect(school.hasOwnProperty('first')).toEqual(true);
		});
		it('should have \'second\' grade property', function () {
			expect(school.hasOwnProperty('second')).toEqual(true);
		});

		it('should have \'third\' grade property', function () {
			expect(school.hasOwnProperty('third')).toEqual(true);
		});

		it('should count the children in each grade correctly', function () {
			expect(school.first).toEqual(50);
			expect(school.second).toEqual(30);
			expect(school.third).toEqual(80);
		});
	});

	describe('cow', function () {
		it('should have 5 properties', function () {
			var count = 0;
			for (var prop in cow) {
				count++;
			}
			expect(count).toEqual(5);
		});
		it('should change properties that start with secret', function () {
			expect(cow.eats).toEqual('grass');
      expect(cow.attitude).toEqual('m');
      expect(cow.says).toEqual('m');
      expect(cow.produces).toEqual('m');
      expect(cow.cares).toEqual(false);
		});
	});

	describe('daysOfWeek', function () {
		var check = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].sort();

		it('should exist', function () {
			expect(daysOfWeek).toEqual(jasmine.any(Array));
		});

		it('should have all 7 days of the week', function () {
      daysOfWeek = daysOfWeek.map(function(value) {
        return value.toLowerCase();
      }).sort();
			expect(daysOfWeek).toEqual(check);
		});
	});

	describe('jedi', function () {
		it('should add \'Luke\' to the end', function () {
			expect(jedi[jedi.length - 1].toLowerCase()).toEqual('luke');
		});
		it('should remove \'Yoda\' and store him in a variable', function () {
      expect(jedi.includes('Yoda')).toBe(false);
			expect(firstJedi.toLowerCase()).toEqual('yoda');
		});
		it('should add \'Mario\' to the start of the array', function () {
			expect(jedi[0].toLowerCase()).toEqual('mario');
		});
    it('should remove \'Obi-Wan\' and store him in a variable', function () {
      expect(jedi.includes('Obi-Wan')).toBe(false);
			expect(secondJedi.toLowerCase()).toEqual('obi-wan');
		});
		it('should copy Mace Windu from the array and store him in a variable', function () {
			expect(thirdJedi.toLowerCase()).toEqual('mace windu');
			expect(jedi.indexOf('Mace Windu') > 0).toEqual(true);
		});
	});



	describe('cutInLine', function () {
		it('should exist', function () {
			expect(cutInLine).toBeDefined();
		});
		it('should help an item cut in line', function () {
			expect(cutInLine([1,2,3,4], 8)).toEqual([1,8,2,3,4]);
      expect(cutInLine(['first', 'second', 'third'], 'fourth')).toEqual(['first', 'fourth', 'second', 'third']);
      expect(cutInLine(['a'], 8)).toEqual(['a', 8]);
      expect(cutInLine([], 8)).toEqual([8]);
		});
	});

	describe('removeThings', function () {
		it('should exist', function () {
			expect(removeThings).toBeDefined();
		});
		it('should remove item', function () {
			expect(removeThings(["A", "B", "C", "D"], "C")).toEqual(["A", "B", "D"]);
			expect(removeThings(["A", "B", "C", "D"], "A")).toEqual(["B", "C", "D"]);
			expect(removeThings(["A", "B", "C", "D"], "E")).toEqual(["A", "B", "C", "D"]);
      expect(removeThings([1,2,3], 2)).toEqual([1,3]);
		});
		it('should remove all instances of the item', function () {
			expect(removeThings(["A", "C", "A", "D"], "A")).toEqual(["C", "D"]);
			expect(removeThings(["A", "A", "C", "D"], "A")).toEqual(["C", "D"]);
			expect(removeThings(["A", "A", "A", "A"], "A")).toEqual([]);
      expect(removeThings([1,2,3,1], 1)).toEqual([2,3]);
		});
	});



	describe('tripleTheFun', function () {
		it('should exist', function () {
			expect(tripleTheFun).toBeDefined();
		});
		it('should triple numbers', function () {
			expect(tripleTheFun(2)).toEqual(6);
			expect(tripleTheFun(4)).toEqual(12);
			expect(tripleTheFun(3.5)).toEqual(10.5);
		});
		it('should repeat strings', function () {
			expect(tripleTheFun("A")).toEqual("AAA");
			expect(tripleTheFun("Double")).toEqual("DoubleDoubleDouble");
			expect(tripleTheFun("SuchFun")).toEqual("SuchFunSuchFunSuchFun");
		});
		it('should triple numbers pretending to be strings', function () {
			expect(tripleTheFun("1")).toEqual(3);
			expect(tripleTheFun("2.5")).toEqual(7.5);
			expect(tripleTheFun("4")).toEqual(12);
		});
	});

	describe('getPropertyValue', function () {
		it('should exist', function () {
			expect(getPropertyValue).toBeDefined();
		});
		it('should return a value of the obj\'s passed in property.', function () {
			expect(getPropertyValue({ a: 1, b: 2, c: 3 }, 'a')).toEqual(1);
			expect(getPropertyValue({ name: "Brack", bob: "Finicky", carlos: "What?" }, 'bob')).toEqual("Finicky");
			expect(getPropertyValue({ name: "Brack", bob: "Finicky", carlos: "What?" }, 'carlos')).toEqual("What?");
		});
	});

	describe('clockIn', function () {
		it('should exist', function () {
			expect(clockIn).toBeDefined();
		});
		it('should make chat message object', function () {
			expect(clockIn("Elon Musk", "CEO").name).toEqual("Elon Musk");
			expect(clockIn("Elon Musk", "CEO").department).toEqual("CEO");
			expect(clockIn("Elon Musk", "CEO").timestamp).toEqual(new Date());
		});
	});


	describe('spiderTest', function () {
		it('should exist', function () {
			expect(spiderTest).toBeDefined();
		});

		it('accurately rates Andrew Garfield\'s spiderman', function () {
			var actor = { name: 'Andrew Garfield' };
			spiderTest(actor);

			expect(actor.spiderRating).toEqual(10);
		});

		it('undervalues Tobey Maguire', function () {
			var actor = { name: 'Tobey Maguire' };
			spiderTest(actor);

			expect(actor.spiderRating).toEqual(0);
		});

		it('recognizes Jeremy is not spiderman', function () {
			var actor = { name: 'Jeremy' };
			spiderTest(actor);

			expect(actor.spiderRating.toLowerCase()).toEqual('not a spiderman');
		});
	});

	describe('whatIsItOutside', function () {
		it('should exist', function () {
			expect(whatIsItOutside).toBeDefined();
		});

		it('should warn me I will be sweaty', function () {
			var res = whatIsItOutside(86, 46);

			expect(res).toEqual("I'm all sweat");
		});

		it('should say something silly about icicles', function () {
			var res = whatIsItOutside(10, 0, 90);

			expect(res).toEqual("I have icicles");
		});

		it('should inform me I am in the desert', function () {
			var res = whatIsItOutside(86, 44, 19);

			expect(res).toEqual("I'm literally in the desert");
		});

		it('should make me hesitate about life choices - hot', function () {
      expect(whatIsItOutside(91, 20, 45)).toEqual("Hmm, probably not");
		});

		it('should make me hesitate about life choices - humid', function () {
      expect(whatIsItOutside(80, 56, 45)).toEqual("Hmm, probably not");
		});

		it('should make me hesitate about life choices - cloudy', function () {
      expect(whatIsItOutside(80, 20, 66)).toEqual("Hmm, probably not");
		});

		it('should encourage me to go whatIsItOutside', function () {
			expect(whatIsItOutside(79, 20, 45)).toEqual("I love outside");
		});
	});

	describe('callerBack', function () {
		it('should exist', function () {
			expect(callerBack).toBeDefined();
		});
		it('should call me back', function () {
			var called = false;
			function callback(ret) {
				called = true;
			}

			callerBack(callback, "Hey!");

			expect(called).toBeTruthy();
		});
		it('should call me back with the right message', function () {
			var calledMsg = "";
			function callback(ret) {
				calledMsg = ret;
			}
			callerBack(callback, "Hey!");
			expect(calledMsg).toBe('Hey! back');
		});
	});
});
