/*

    https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/

    Count minimal number of jumps from position X to Y.

*/

class StackAndQueues {

    static brackets(S: string) {
        
        let sourceInitals = ['(', '{', '['];
        let sourceEndings = [')', '}', ']'];
    
        if (S.length < 1) return false;
        if (S.length % 2 !== 0) return false;
    
        return this.cleanS(S).length < 1;

    }


    static cleanS(S: string): string {
        let filtered = S.replace('()', '').replace('{}', '').replace('[]', '')

        let index1 = filtered.indexOf('()');
        let index2 = filtered.indexOf('{}');
        let index3 = filtered.indexOf('[]');

        if ((index1 !== -1) || (index2 !== -1) || (index3 !== -1)) {
            return this.cleanS(filtered);
        }
        return filtered;
    }


}

class StackAndQueuesTest {

    constructor() {

        console.log('// BRACKETS //');

        // TEST 1
        this.exec('{[()()]}');

        // TEST 2
        this.exec('([)()]');
    }

    exec(S: string) {
        const result = StackAndQueues.brackets(S);

        console.log('');
        console.log('(', S, ')');
        console.log('');
        console.log('=>', result);
        console.log('');
        console.log('--------------------------------------');
        console.log('');
    }

}

new StackAndQueuesTest();