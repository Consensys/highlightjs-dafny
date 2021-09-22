/*
Language: Dafny
Author: Roberto Saltini
Description: Grammar definition for the Dafny language
Website: https://github.com/dafny-lang/dafny
*/   

/**
 * Copyright 2021, ConsenSys Software Inc.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

export default function(hljs)     {
    const IDENT_WITH_BRACKETS = /[a-zA-Z_<>]*/
    
    const DAFNY_KEYWORDS = [    
        "abstract", 
        "allocated", 
        "as", 
        "assert", 
        "assume",
        "break", 
        "by" ,
        "calc" , 
        "case" , 
        "class" , 
        "codatatype" ,
        "colemma" , 
        "const" , 
        "constructor" , 
        "copredicate" ,
        "datatype" , 
        "decreases" ,
        "else" , 
        "ensures" , 
        "exists" , 
        "export" , 
        "extends" ,
        "forall" , 
        "fresh" , 
        "function" , 
        "ghost" ,
        "if" , , 
        "import" ,  , 
        "include" , 
        "inductive" ,
        "invariant" , 
        "is" ,  
        "iterator" ,
        "label" , 
        "lemma" , 
        "match" , 
        "method" ,
        "modifies" , 
        "modify" , 
        "module" , 
        "nameonly" , 
        "new" , 
        "newtype" , 
        "old" , 
        "opened" , 
        "predicate" , 
        "print" , 
        "provides" ,
        "reads" , 
        "real" , 
        "refines" , 
        "requires" , 
        "return" ,
        "returns" , 
        "reveal" , 
        "reveals" ,
        "static" , 
        "string" ,
        "then" , 
        "this" , 
        "trait" , 
        "twostate" , 
        "type" ,
        "unchanged" , 
        "var" , 
        "while" , 
        "witness" ,
        "yield" , 
        "yields" , 
    ];

    const DAFNY_TYPES = [
        "bool",         
        "char" , 
        "imap" ,
        "iset" ,   
        "int" , 
        "map" ,  
        "multiset" ,        
        "nat" ,     
        "object" , 
        "object?" ,    
        "ORDINAL",     
        "seq" , 
        "set" ,   
        "array", 
        "bc"                                                      
    ];
    const DAFNY_LITERALS = [
        "false" , 
        "null" ,  
        "true"               
    ];
    const KEYWORDS = {
        keyword: DAFNY_KEYWORDS,
        type: DAFNY_TYPES,
        literal: DAFNY_LITERALS
    };
    const TYPE_FOR_IDENTIFIERS = {
                begin: new RegExp(
                    /(?<=[^:]:[\s\n]*)/.source +
                    IDENT_WITH_BRACKETS.source
                ),
                scope: 'type'
            };
    
    const OPERATORS = {
        begin: /(?<!\w)/.source +
            "(" + 
            [
            "&&", 
            "\\|\\|",
            "<==>",
            "==>",
            "<==",
            "==",
            "!=",
            "!",
            ">",
            "<",
            ">=",
            "<=",
            "\\+",
            "-",
            "\\*",
            "/",
            "%",
            ">>",
            "<<",
            "&",
            "\\|",
            "\\^",
            "!!",
            "in",
            "!in",
            ":=",
            ":\\|",
            "::",
            "="
        ].join("|") + 
        ")" + 
        /(?!\w)/.source ,
        scope: 'operator',

    };
    return {
        case_insensitive: false,
        keywords: KEYWORDS,
        contains: [
            hljs.QUOTE_STRING_MODE,
            hljs.C_LINE_COMMENT_MODE,
            hljs.NUMBER_MODE,
            hljs.COMMENT(
                '/\\*', // begin
                '\\*/', // end
                {
                    contains: [
                    {
                        scope: 'doctag', begin: '@\\w+'
                    }
                    ]
                }
            ),
            TYPE_FOR_IDENTIFIERS,
            OPERATORS,
            {
                begin: "\\b(" + DAFNY_TYPES.join("|") + ")\\b" + IDENT_WITH_BRACKETS.source,
                scope: "type"
            },
            {
                begin: ["(?:" + hljs.IDENT_RE + "\\s+)", IDENT_WITH_BRACKETS, /\s*(?=\()/], 
                scope: {
                    2: "title.function"
                }, 
                keywords: KEYWORDS, 
                contains: [{
                    className: "params", 
                    begin: /\(/,
                    end: /\)/, 
                    keywords: KEYWORDS, 
                    relevance: 0,
                    contains: [hljs.QUOTE_STRING_MODE, hljs.C_BLOCK_COMMENT_MODE, TYPE_FOR_IDENTIFIERS, OPERATORS, hljs.NUMBER_MODE]
                }, 
                hljs.C_LINE_COMMENT_MODE, 
                hljs.C_BLOCK_COMMENT_MODE]
            }    
        ]
    };

}