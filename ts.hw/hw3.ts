function printMultiplicationTable(): void {
    const size = 9; 
    for (let i = 1; i <= size; i++) {
      let row = ''; 
      for (let j = 1; j <= size; j++) {
        row += `${i} x ${j} = ${i * j}\t`; 
      }
      console.log(row.trim()); 
    }
  }
  printMultiplicationTable();
  