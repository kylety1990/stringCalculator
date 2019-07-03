describe("StringCalculator!!", function() {
  
  it("If the chain is empty", function() {
    const string = '';

    const result = add(string)
    
    expect(result).toEqual(0);
    
  });

  it("In case the string has only one text", function() {
    const string = "palabrejassss";

    const result = add(string);

    expect(result).toEqual(13);
  });

  function add(string){
    if(string.length == 0){
      return 0;
    }
  }
  
});
