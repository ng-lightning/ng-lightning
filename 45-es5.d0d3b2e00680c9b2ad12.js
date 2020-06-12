function _classCallCheck(n,b){if(!(n instanceof b))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"0miD":function(n,b,c){"use strict";c.r(b),c.d(b,"NglDemoGetStartedModule",(function(){return p}));var s,a,e=c("ofXK"),o=c("tyNb"),B=c("fXoL"),t=[{path:"",component:(s=function n(){_classCallCheck(this,n)},s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=B.Gb({type:s,selectors:[["ng-component"]],decls:387,vars:18,consts:[[1,"page__header","slds-border_bottom","slds-grid","slds-wrap","slds-m-bottom_medium"],[1,"slds-has-flexi-truncate","slds-align-middle"],[1,"callout"],[1,"slds-text-heading_small","slds-m-top_large","slds-m-bottom_small"],[1,"code"],[1,"language-clike"],[1,"token","operator"],[1,"slds-text-heading_small","slds-m-top_xx-large","slds-m-bottom_small"],["href","https://material.angular.io/cdk/"],[1,"language-json"],[1,"token","property"],[1,"token","punctuation"],[1,"token","string"],["routerLink","/components"],[1,"language-typescript"],[1,"token","keyword"],[1,"token","function"],[1,"token","class-name"],[1,"token","constant"],[1,"slds-m-top_medium"]],template:function(n,b){1&n&&(B.Tb(0,"header",0),B.Tb(1,"div",1),B.Tb(2,"h1"),B.Bc(3,"Get Started"),B.Sb(),B.Sb(),B.Sb(),B.Tb(4,"p"),B.Bc(5,"This is an open source project that builds Angular widgets following UX guidelines and using HTML/CSS of Salesforce's Lightning Design System."),B.Sb(),B.Tb(6,"div"),B.Tb(7,"h2",2),B.Bc(8,"Installation"),B.Sb(),B.Tb(9,"div",3),B.Bc(10,"Step 1: Installing packages"),B.Sb(),B.Tb(11,"p"),B.Bc(12,"You can use either the "),B.Tb(13,"span",4),B.Bc(14,"npm"),B.Sb(),B.Bc(15," or "),B.Tb(16,"span",4),B.Bc(17,"yarn"),B.Sb(),B.Bc(18," command-line tool to install packages."),B.Sb(),B.Tb(19,"pre",5),B.Nb(),B.Tb(20,"code"),B.Bc(21,"npm install "),B.Tb(22,"span",6),B.Bc(23,"--"),B.Sb(),B.Bc(24,"save ng"),B.Tb(25,"span",6),B.Bc(26,"-"),B.Sb(),B.Bc(27,"lightning\n"),B.Sb(),B.Ub(),B.Sb(),B.Tb(28,"div",7),B.Bc(29,"Step 2: Installing dependencies"),B.Sb(),B.Tb(30,"p"),B.Bc(31,"Some components rely on "),B.Tb(32,"a",8),B.Bc(33,"Angular CDK"),B.Sb(),B.Bc(34," to work correctly. If you don't already have "),B.Tb(35,"b"),B.Tb(36,"span",4),B.Bc(37,"@angular/cdk"),B.Sb(),B.Sb(),B.Bc(38," as a dependency, you should also install it to your application via "),B.Tb(39,"span",4),B.Bc(40,"npm"),B.Sb(),B.Bc(41," or "),B.Tb(42,"span",4),B.Bc(43,"yarn"),B.Sb(),B.Bc(44,"."),B.Sb(),B.Tb(45,"p"),B.Bc(46,"If you are later going to use Salesforce's LDS SASS files or want to import their CSS from your "),B.Tb(47,"span",4),B.Bc(48,"node_modules"),B.Sb(),B.Bc(49," instead of CDN, you should also install "),B.Tb(50,"b"),B.Tb(51,"span",4),B.Bc(52,"@salesforce-ux/design-system"),B.Sb(),B.Sb(),B.Bc(53,"."),B.Sb(),B.Tb(54,"div",7),B.Bc(55,"Step 3: Adding styles"),B.Sb(),B.Tb(56,"p"),B.Bc(57,"Including SLDS CSS files and a small set of structural styles of CDK, is required for your application to work correctly."),B.Sb(),B.Tb(58,"p"),B.Bc(59,"If you are using the Angular CLI, you need to add the following to the "),B.Tb(60,"span",4),B.Bc(61,"styles"),B.Sb(),B.Bc(62," array of your "),B.Tb(63,"span",4),B.Bc(64,"angular.json"),B.Sb(),B.Bc(65," file."),B.Sb(),B.Tb(66,"pre",9),B.Nb(),B.Tb(67,"code"),B.Tb(68,"span",10),B.Bc(69,'"styles"'),B.Sb(),B.Tb(70,"span",6),B.Bc(71,":"),B.Sb(),B.Bc(72," "),B.Tb(73,"span",11),B.Bc(74,"["),B.Sb(),B.Bc(75,"\n  "),B.Tb(76,"span",12),B.Bc(77,'"node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css"'),B.Sb(),B.Tb(78,"span",11),B.Bc(79,","),B.Sb(),B.Bc(80,"\n  "),B.Tb(81,"span",12),B.Bc(82,'"node_modules/@angular/cdk/overlay-prebuilt.css"'),B.Sb(),B.Tb(83,"span",11),B.Bc(84,","),B.Sb(),B.Bc(85,"\n  ... any other styles\n"),B.Tb(86,"span",11),B.Bc(87,"]"),B.Sb(),B.Tb(88,"span",11),B.Bc(89,","),B.Sb(),B.Sb(),B.Ub(),B.Sb(),B.Tb(90,"p"),B.Bc(91,"If you are not using the CLI, you'll need to add the files listed above to your build tooling or you could also include them via "),B.Tb(92,"span",4),B.Bc(93,"<link>"),B.Sb(),B.Bc(94," elements in your "),B.Tb(95,"span",4),B.Bc(96,"index.html"),B.Sb(),B.Bc(97,"."),B.Sb(),B.Tb(98,"div",7),B.Bc(99,"Step 4 (optional): Setup SLDS icons"),B.Sb(),B.Tb(100,"p"),B.Bc(101," If you want to use SLDS icons, you must provide a copy of the various sprite files (ie "),B.Tb(102,"span",4),B.Bc(103,"@salesforce-ux/design-system/assets/icons/*-sprite/svg/symbols.svg"),B.Sb(),B.Bc(104,"), served through your server. If you are using the Angular CLI, here is an example configuration for your "),B.Tb(105,"span",4),B.Bc(106,"assets"),B.Sb(),B.Bc(107," property: "),B.Sb(),B.Tb(108,"pre",9),B.Tb(109,"code"),B.Tb(110,"span",10),B.Bc(111,'"assets"'),B.Sb(),B.Tb(112,"span",6),B.Bc(113,":"),B.Sb(),B.Bc(114," "),B.Tb(115,"span",11),B.Bc(116,"["),B.Sb(),B.Bc(117,"\n  "),B.Tb(118,"span",11),B.Bc(119),B.Sb(),B.Bc(120,"\n    "),B.Tb(121,"span",10),B.Bc(122,'"glob"'),B.Sb(),B.Tb(123,"span",6),B.Bc(124,":"),B.Sb(),B.Bc(125," "),B.Tb(126,"span",12),B.Bc(127,'"**/*"'),B.Sb(),B.Tb(128,"span",11),B.Bc(129,","),B.Sb(),B.Bc(130,"\n    "),B.Tb(131,"span",10),B.Bc(132,'"input"'),B.Sb(),B.Tb(133,"span",6),B.Bc(134,":"),B.Sb(),B.Bc(135," "),B.Tb(136,"span",12),B.Bc(137,'"node_modules/@salesforce-ux/design-system/assets/"'),B.Sb(),B.Tb(138,"span",11),B.Bc(139,","),B.Sb(),B.Bc(140,'\n    "output'),B.Tb(141,"span",12),B.Bc(142,'": "'),B.Sb(),B.Bc(143,'/assets"\n  '),B.Tb(144,"span",11),B.Bc(145),B.Sb(),B.Tb(146,"span",11),B.Bc(147,","),B.Sb(),B.Bc(148,"\n  ... any other assets\n"),B.Tb(149,"span",11),B.Bc(150,"]"),B.Sb(),B.Tb(151,"span",11),B.Bc(152,","),B.Sb(),B.Sb(),B.Sb(),B.Tb(153,"p"),B.Bc(154,"Based on your needs you can change what will be copied from SLDS "),B.Tb(155,"span",4),B.Bc(156,"assets"),B.Sb(),B.Bc(157," folder, and also change the "),B.Tb(158,"span",4),B.Bc(159,"output"),B.Sb(),B.Bc(160," folder, but remember to configure the "),B.Tb(161,"span",4),B.Bc(162,"svgPath"),B.Sb(),B.Bc(163," as described below."),B.Sb(),B.Sb(),B.Tb(164,"div"),B.Tb(165,"h2",2),B.Bc(166,"Reading the documentation"),B.Sb(),B.Tb(167,"p"),B.Bc(168," Each component has API documentation, examples, and a working demo. They can be found "),B.Tb(169,"a",13),B.Bc(170,"here"),B.Sb(),B.Bc(171,". "),B.Sb(),B.Sb(),B.Tb(172,"div"),B.Tb(173,"h2",2),B.Bc(174,"Usage"),B.Sb(),B.Tb(175,"p"),B.Bc(176,"Once installed you need to import our main module into your application module. You should end up with code similar to this:"),B.Sb(),B.Tb(177,"pre",14),B.Tb(178,"code"),B.Tb(179,"span",15),B.Bc(180,"import"),B.Sb(),B.Bc(181," "),B.Tb(182,"span",11),B.Bc(183),B.Sb(),B.Bc(184,"AppComponent"),B.Tb(185,"span",11),B.Bc(186),B.Sb(),B.Bc(187," "),B.Tb(188,"span",15),B.Bc(189,"from"),B.Sb(),B.Bc(190," "),B.Tb(191,"span",12),B.Bc(192,"'...'"),B.Sb(),B.Tb(193,"span",11),B.Bc(194,";"),B.Sb(),B.Bc(195,"\n"),B.Tb(196,"span",15),B.Bc(197,"import"),B.Sb(),B.Bc(198," "),B.Tb(199,"span",11),B.Bc(200),B.Sb(),B.Bc(201,"NglModule"),B.Tb(202,"span",11),B.Bc(203),B.Sb(),B.Bc(204," "),B.Tb(205,"span",15),B.Bc(206,"from"),B.Sb(),B.Bc(207," "),B.Tb(208,"span",12),B.Bc(209,"'ng-lightning'"),B.Sb(),B.Tb(210,"span",11),B.Bc(211,";"),B.Sb(),B.Bc(212,"\n\n@"),B.Tb(213,"span",16),B.Bc(214,"NgModule"),B.Sb(),B.Tb(215,"span",11),B.Bc(216,"("),B.Sb(),B.Tb(217,"span",11),B.Bc(218),B.Sb(),B.Bc(219,"\n  imports"),B.Tb(220,"span",11),B.Bc(221,":"),B.Sb(),B.Bc(222," "),B.Tb(223,"span",11),B.Bc(224,"["),B.Sb(),B.Tb(225,"span",6),B.Bc(226,"..."),B.Sb(),B.Tb(227,"span",11),B.Bc(228,","),B.Sb(),B.Bc(229," NglModule"),B.Tb(230,"span",11),B.Bc(231,"]"),B.Sb(),B.Tb(232,"span",11),B.Bc(233,","),B.Sb(),B.Bc(234,"\n  declarations"),B.Tb(235,"span",11),B.Bc(236,":"),B.Sb(),B.Bc(237," "),B.Tb(238,"span",11),B.Bc(239,"["),B.Sb(),B.Bc(240,"AppComponent"),B.Tb(241,"span",11),B.Bc(242,","),B.Sb(),B.Bc(243," "),B.Tb(244,"span",6),B.Bc(245,"..."),B.Sb(),B.Tb(246,"span",11),B.Bc(247,"]"),B.Sb(),B.Tb(248,"span",11),B.Bc(249,","),B.Sb(),B.Bc(250,"\n  bootstrap"),B.Tb(251,"span",11),B.Bc(252,":"),B.Sb(),B.Bc(253," "),B.Tb(254,"span",11),B.Bc(255,"["),B.Sb(),B.Bc(256,"AppComponent"),B.Tb(257,"span",11),B.Bc(258,"]"),B.Sb(),B.Tb(259,"span",11),B.Bc(260,","),B.Sb(),B.Bc(261,"\n"),B.Tb(262,"span",11),B.Bc(263),B.Sb(),B.Tb(264,"span",11),B.Bc(265,")"),B.Sb(),B.Bc(266,"\n"),B.Tb(267,"span",15),B.Bc(268,"export"),B.Sb(),B.Bc(269," "),B.Tb(270,"span",15),B.Bc(271,"class"),B.Sb(),B.Bc(272," "),B.Tb(273,"span",17),B.Bc(274,"AppModule"),B.Sb(),B.Bc(275," "),B.Tb(276,"span",11),B.Bc(277),B.Sb(),B.Tb(278,"span",11),B.Bc(279),B.Sb(),B.Bc(280,"\n"),B.Sb(),B.Sb(),B.Tb(281,"p"),B.Bc(282,"Alternatively you could only import (sub)modules with components you need. For example, if you only want to use the "),B.Tb(283,"span",4),B.Bc(284,"<ngl-modal>"),B.Sb(),B.Bc(285," component, you can import just "),B.Tb(286,"span",4),B.Bc(287,"NglModalsModule"),B.Sb(),B.Bc(288," instead of "),B.Tb(289,"span",4),B.Bc(290,"NglModule"),B.Sb(),B.Bc(291,". The resulting bundle will be smaller in this case."),B.Sb(),B.Sb(),B.Tb(292,"div"),B.Tb(293,"h2",2),B.Bc(294,"Configuration"),B.Sb(),B.Tb(295,"p"),B.Bc(296,"Optionally, you can configure and provide your own default values, using the various injection tokens available."),B.Sb(),B.Tb(297,"pre",14),B.Tb(298,"code"),B.Tb(299,"span",15),B.Bc(300,"import"),B.Sb(),B.Bc(301," "),B.Tb(302,"span",11),B.Bc(303),B.Sb(),B.Bc(304," "),B.Tb(305,"span",18),B.Bc(306,"NGL_ICON_CONFIG"),B.Sb(),B.Tb(307,"span",11),B.Bc(308,","),B.Sb(),B.Bc(309," NglIconConfig "),B.Tb(310,"span",11),B.Bc(311),B.Sb(),B.Bc(312," "),B.Tb(313,"span",15),B.Bc(314,"from"),B.Sb(),B.Bc(315," "),B.Tb(316,"span",12),B.Bc(317,"'ng-ligthning'"),B.Sb(),B.Tb(318,"span",11),B.Bc(319,";"),B.Sb(),B.Bc(320,"\n\n@"),B.Tb(321,"span",16),B.Bc(322,"NgModule"),B.Sb(),B.Tb(323,"span",11),B.Bc(324,"("),B.Sb(),B.Tb(325,"span",11),B.Bc(326),B.Sb(),B.Bc(327,"\n  providers"),B.Tb(328,"span",11),B.Bc(329,":"),B.Sb(),B.Bc(330," "),B.Tb(331,"span",11),B.Bc(332,"["),B.Sb(),B.Bc(333,"\n    "),B.Tb(334,"span",6),B.Bc(335,"..."),B.Sb(),B.Tb(336,"span",11),B.Bc(337,","),B.Sb(),B.Bc(338,"\n    "),B.Tb(339,"span",11),B.Bc(340),B.Sb(),B.Bc(341," provide"),B.Tb(342,"span",11),B.Bc(343,":"),B.Sb(),B.Bc(344," "),B.Tb(345,"span",18),B.Bc(346,"NGL_ICON_CONFIG"),B.Sb(),B.Tb(347,"span",11),B.Bc(348,","),B.Sb(),B.Bc(349," useValue"),B.Tb(350,"span",11),B.Bc(351,":"),B.Sb(),B.Bc(352," "),B.Tb(353,"span",6),B.Bc(354,"<"),B.Sb(),B.Bc(355,"NglIconConfig"),B.Tb(356,"span",6),B.Bc(357,">"),B.Sb(),B.Tb(358,"span",11),B.Bc(359),B.Sb(),B.Bc(360," svgPath"),B.Tb(361,"span",11),B.Bc(362,":"),B.Sb(),B.Bc(363," "),B.Tb(364,"span",12),B.Bc(365,"'/my/path'"),B.Sb(),B.Bc(366," "),B.Tb(367,"span",11),B.Bc(368),B.Sb(),B.Bc(369," "),B.Tb(370,"span",11),B.Bc(371),B.Sb(),B.Tb(372,"span",11),B.Bc(373,","),B.Sb(),B.Bc(374,"\n  "),B.Tb(375,"span",11),B.Bc(376,"]"),B.Sb(),B.Tb(377,"span",11),B.Bc(378,","),B.Sb(),B.Bc(379,"\n"),B.Tb(380,"span",11),B.Bc(381),B.Sb(),B.Tb(382,"span",11),B.Bc(383,")"),B.Sb(),B.Bc(384,"\n"),B.Sb(),B.Sb(),B.Tb(385,"p",19),B.Bc(386,"Currently available options are documented in the API section of each component on which are available."),B.Sb(),B.Sb()),2&n&&(B.Bb(119),B.Cc("{"),B.Bb(26),B.Cc("}"),B.Bb(38),B.Cc("{"),B.Bb(3),B.Cc("}"),B.Bb(14),B.Cc("{"),B.Bb(3),B.Cc("}"),B.Bb(15),B.Cc("{"),B.Bb(45),B.Cc("}"),B.Bb(14),B.Cc("{"),B.Bb(2),B.Cc("}"),B.Bb(24),B.Cc("{"),B.Bb(8),B.Cc("}"),B.Bb(15),B.Cc("{"),B.Bb(14),B.Cc("{"),B.Bb(19),B.Cc("{"),B.Bb(9),B.Cc("}"),B.Bb(3),B.Cc("}"),B.Bb(10),B.Cc("}"))},directives:[o.b],encapsulation:2,changeDetection:0}),s)}],p=((a=function n(){_classCallCheck(this,n)}).\u0275mod=B.Kb({type:a}),a.\u0275inj=B.Jb({factory:function(n){return new(n||a)},imports:[[e.c,o.c.forChild(t)]]}),a)}}]);