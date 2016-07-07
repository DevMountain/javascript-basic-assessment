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

	describe('addItem', function(){
		it('should exist', function(){
			expect(addItem).toBeDefined();
		})
		it('should add an item', function(){
			expect(addItem(["A","B","C"],"D")).toEqual(["A","B","C","D"]);
			expect(addItem(["A","A","A"],"D")).toEqual(["A","A","A","D"]);
			expect(addItem(["A","B","C"],"E")).toEqual(["A","B","C","E"]);
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

	describe('getValueOfProperty', function(){
		it('should exist', function(){
			expect(getValueOfProperty).toBeDefined();
		})
		it('should return a value of the obj\'s passed in property.', function(){
			expect(getValueOfProperty({a:1,b:2,c:3},'a')).toEqual(1)
			expect(getValueOfProperty({name:"Brack",bob:"Finicky",carlos:"What?"},'bob')).toEqual("Finicky")
			expect(getValueOfProperty({name:"Brack",bob:"Finicky",carlos:"What?"},'carlos')).toEqual("What?")
		})
	})

	describe('makeChatMessage', function(){
		it('should exist', function(){
			expect(makeChatMessage).toBeDefined();
		})
		it('should make chat message object', function(){
			expect(makeChatMessage("Brack is awesome","Brack").message).toEqual("Brack is awesome");
			expect(makeChatMessage("Brack is awesome","Brack").author).toEqual("Brack");
			expect(makeChatMessage("Brack is awesome","Brack").timestamp).toEqual(new Date());
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
