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

  it("Case in which there are two chains", function() {
    const string1 = "palabra";
    const string2 = "toma"

    const result = add(string1 , string2);

    expect(result).toEqual(11);
  });

  function add(string){
    if(string.length == 0){
      return 0;
    }
    else{
      return string.length;
    }
  }

  
  
});
