(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{240:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"password-finder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#password-finder"}},[e._v("#")]),e._v(" Password Finder")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#limitations"}},[e._v("Limitations")])]),a("li",[a("a",{attrs:{href:"#usage"}},[e._v("Usage")])])])]),a("p"),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Wasabi Password Finder is a tool for helping those who made a mistake typing the password during the wallet creation process.\nThis tool tries to find the password that decrypts the encrypted secret key stored in a given wallet file.")]),e._v(" "),a("h2",{attrs:{id:"limitations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[e._v("#")]),e._v(" Limitations")]),e._v(" "),a("p",[e._v("Wasabi Wallet protects the encrypted secret key with the same technology used to protect paper wallets (bip 38) and for that reason it is computationally infeasible to brute force the password using all the possible combinations.\nIt is important to know that Wasabi Password Finder is not for breaking wallet passwords but for finding errors (typos) in an already known password.")]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("To use Wasabi's command line tools on Windows you have to use "),a("code",[e._v("wassabeed.exe")]),e._v(" that is inside your "),a("code",[e._v("Program Files\\WasabiWallet")]),e._v(".\nOn Linux and OSX you can use the same software that you use for launching the GUI ("),a("code",[e._v("wassabee")]),e._v(").")]),e._v(" "),a("p",[e._v("Let us start giving a glance to the command "),a("code",[e._v("help")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ wassabee run help findpassword\nusage: findpassword --wallet:WalletName --language:lang --numbers:[TRUE|FALSE] --symbold:[TRUE|FALSE]\n\nTries to find typing mistakes in the user password by brute forcing it char by char.\neg: ./wassabee findpassword --wallet:MyWalletName --numbers:false --symbold:true\n\n  -w, --wallet=VALUE         The name of the wallet file.\n  -s, --secret=VALUE         You can specify an encrypted secret key instead of wallet. Example of encrypted secret:\n                               6PYTMDmkxQrSv8TK4761tuKrV8yFwPyZDqjJafcGEiLBHiqBV6WviFxJV4\n  -l, --language=VALUE       The charset to use: en, es, it, fr, pt. Default=en.\n  -n, --numbers=VALUE        Try passwords with numbers. Default=true.\n  -x, --symbols=VALUE        Try passwords with symbolds. Default=true.\n  -h, --help                 Show Help\n")])])]),a("p",[e._v("Now, let us find a typo in a wallet called "),a("code",[e._v("MagicalCryptoWallet.json")]),e._v(".\nFor the sake of the example let us say I have created this wallet and I think the password is "),a("code",[e._v("pasd")]),e._v(" but it was created with the password "),a("code",[e._v("pass")]),e._v(" by accident.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ wassabee findpassword --wallet:MagicalCryptoWallet\nWARNING: This tool will display you password if it finds it. Also, the process status displays your wrong password chars.\n         You can cancel this by CTRL+C combination anytime.\n\nEnter password: ****    <---- Here I typed the password that I think used to create the wallet (`pasd`)\n\n[##################################################################################                  ] 82% - ET: 00:00:15.4120338\n\nCompleted in 00:01:11.5134519\nSUCCESS: Password found: >>> pass <<<\n\n")])])]),a("p",[e._v("Note that you can also specify an encrypted secret instead of the wallet file.\nThis is useful if you lost your password for a Bitcoin wallet, other than Wasabi.")]),e._v(" "),a("p",[e._v("Note that for a 4 characters length password it took more than a minute to find.\nMoreover, the process is heavy in CPU and for that reason it can be a good idea to use the best combination of parameters to reduce the search space.")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("language")]),e._v(" (default: en) specify the charset (characters to search in) to reduce the search space.\nFor example, while the "),a("em",[e._v("Italian")]),e._v(' charset is "abcdefghimnopqrstuvxyzABCDEFGHILMNOPQRSTUVXYZ", the '),a("em",[e._v("French")]),e._v(' charset is "aâàbcçdæeéèëœfghiîïjkmnoôpqrstuùüvwxyÿzAÂÀBCÇDÆEÉÈËŒFGHIÎÏJKMNOÔPQRSTUÙÜVWXYŸZ".')])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("numbers")]),e._v(" (default: true) is for indicating that our password contains, or could contain, at least one digit. This increases the charset by 10 (from 0 to 9).")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("symbols")]),e._v(' (default: true) is for indicating that our password contains, or could contain, at least one symbol.\nThis increases the charset by 34 (|!¡@$¿?_-"#$/%&()´+*=[]{},;:.^`<>). Note that only the most commonly used characters are available.')])])])])}),[],!1,null,null,null);t.default=o.exports}}]);