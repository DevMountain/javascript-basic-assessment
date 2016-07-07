describe('javascriptBasicAssesment', function(){
	describe('bob', function(){
		it('should exist', function(){
			expect(bob).toBeDefined();
		})
		it('should be as described', function(){
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

	describe('removeItem', function(){
		it('should exist', function(){
			expect(removeItem).toBeDefined();
		})
		it('should remove item', function(){
			expect(removeItem(["A","B","C","D"],"C")).toEqual(["A","B","D"]);
			expect(removeItem(["A","B","C","D"],"A")).toEqual(["B","C","D"]);
			expect(removeItem(["A","B","C","D"],"E")).toEqual(["A","B","C","D"]);
		})
		it('should remove all instanced of the item', function(){
			expect(removeItem(["A","C","A","D"],"A")).toEqual(["C","D"]);
			expect(removeItem(["A","A","C","D"],"A")).toEqual(["C","D"]);
			expect(removeItem(["A","A","A","A"],"A")).toEqual([]);
		})
	})

	describe('doubleTheFun', function(){
		it('should exist', function(){
			expect(doubleTheFun).toBeDefined();
		})
		it('should double numbers', function(){
			expect(doubleTheFun(2)).toEqual(4);
			expect(doubleTheFun(4)).toEqual(8);
			expect(doubleTheFun(3.5)).toEqual(7);
		})
		it('should repeat strings', function(){
			expect(doubleTheFun("A")).toEqual("AA");
			expect(doubleTheFun("Double")).toEqual("DoubleDouble");
			expect(doubleTheFun("SuchFun")).toEqual("SuchFunSuchFun");
		})
		it('should double numbers pretending to be strings', function(){
			expect(doubleTheFun("1")).toEqual(2);
			expect(doubleTheFun("2.5")).toEqual(5);
			expect(doubleTheFun("4")).toEqual(8);
		})
	})
	describe('descriptions', function(){
		it('should exist', function(){
			expect(descriptions).toBeDefined();
		})
		it('should have the same number of elements as the users array', function(){
			expect(descriptions.length).toEqual(users.length);
		})
		it('should describe each user', function(){
			expect(descriptions).toEqual(users.map(describer));
		})
	})
})
