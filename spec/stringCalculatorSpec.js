describe("StringCalculator!!", function() {
  
  it("If the chain is empty", function() {
    const string = '';

    const result = add(string)
    
    expect(result).toEqual(0);
    
  });

  function add(string){
    if(string.length == 0){
      return 0;
    }
  }
  
});
