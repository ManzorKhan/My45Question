//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


function show_magicians4(magicians4: string[]): void {
    magicians4.forEach(magician =>console.log(magician));
    }

    function make_great2(magicians4: string[]): string[] {
        return magicians4.map(magicians => "the great" + magicians);
    }

    // define an array of magicians names
    let magicians4: string[] = [`mustafa`,`sohail`,`ali`,];
        
    
    let great_magicians5: string[] = make_great2([...magicians4]); // creating a copy using

    // call thow_magicians4() to show thew original array of magicians names
    console.log("original magicians:");
    show_magicians4(magicians4);

    // call show_magicians4() to show the array with "the great " added to each magicians
    console.log("\ngreat magicians:");
    show_magicians4(great_magicians5);
    
    