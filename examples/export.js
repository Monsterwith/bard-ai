import Bard from "bard-ai";

await Bard.init("g.a000zggOsMrgcQ0YOvjrCvhyMaLKLF-JMP9rSi1bG1ALxOYCWtCnAU0xH_jYfejvgwoihQk80gACgYKAaYSARMSFQHGX2MiWW5g4-Pw1qxeAtRbzJX08xoVAUF8yKp5p8ZcLXm3-FiYeE-dbC8M0076");

// ! Comment out code block underneath, and uncomment this
let myConversation = new Bard.Chat();
console.log(await myConversation.ask("What is 1+1?"));
console.log(await myConversation.export());

// ! Comment out previous, and uncomment this
let continuedConversation = new Bard.Chat(/* Paste your exported JSON here */);
console.log(
    await continuedConversation.ask("What do you get if you add 1 to that?")
);
console.log(await continuedConversation.export());

// Observe how the AI remembers the previous conversation!
