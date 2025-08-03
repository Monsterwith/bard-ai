import Bard from "bard-ai";

await Bard.init("g.a000zggOsMrgcQ0YOvjrCvhyMaLKLF-JMP9rSi1bG1ALxOYCWtCnAU0xH_jYfejvgwoihQk80gACgYKAaYSARMSFQHGX2MiWW5g4-Pw1qxeAtRbzJX08xoVAUF8yKp5p8ZcLXm3-FiYeE-dbC8M0076");

let myConversation = new Bard.Chat();
console.log(await myConversation.ask("How are you?"));
console.log(await myConversation.ask("What's the last thing I said?"));
