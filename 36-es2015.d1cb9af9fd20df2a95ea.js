(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{Wx56:function(b,c,n){"use strict";n.r(c),n.d(c,"NglDemoRatingsModule",(function(){return v}));var a=n("ofXK"),s=n("tyNb"),B=n("vc5p"),t=n("dH7C"),p=n("fXoL"),e=n("0VfZ"),T=n("hk0e"),S=n("4YWo"),o=n("S9nO");function i(b,c){if(1&b&&p.Ob(0,"ngl-avatar",7),2&b){const b=c.$implicit,n=p.gc();p.mc("src",n.customImage(b))}}let l=(()=>{class b{constructor(){this.value=3,this.readonly=!1,this.size="small",this.color="#FFB75D",this.sizes=["x-small","small","","large"],this.colors=["#FFB75D","#F5675B","#9FDB66"]}changeSize(){this.size=this.sizes[(this.sizes.indexOf(this.size)+1)%this.sizes.length]}changeColor(){this.color=this.colors[(this.colors.indexOf(this.color)+1)%this.colors.length]}customImage(b){return`assets/images/avatar${b?3:2}.jpg`}}return b.\u0275fac=function(c){return new(c||b)},b.\u0275cmp=p.Gb({type:b,selectors:[["app-demo-ratings-basic"]],decls:20,vars:7,consts:[[3,"rate","isReadonly","size","colorOn","rateChange"],[1,"slds-grid","slds-m-top_large"],["type","button","nglButton","","variant","destructive",3,"disabled","click"],["type","button","nglButton","",3,"click"],[1,"slds-text-title_caps","slds-m-bottom_small","slds-m-top_x-large"],[3,"rate","rateChange"],["nglRatingIcon",""],["type","circle",3,"src"]],template:function(b,c){1&b&&(p.Bc(0),p.Tb(1,"ngl-rating",0),p.cc("rateChange",(function(b){return c.value=b})),p.Sb(),p.Ob(2,"div",1),p.Tb(3,"button",2),p.cc("click",(function(){return c.value=0})),p.Bc(4,"Clear"),p.Sb(),p.Tb(5,"button",3),p.cc("click",(function(){return c.readonly=!c.readonly})),p.Bc(6,"Toggle readonly"),p.Sb(),p.Tb(7,"button",3),p.cc("click",(function(){return c.changeSize()})),p.Bc(8,"Change Size"),p.Sb(),p.Tb(9,"button",3),p.cc("click",(function(){return c.changeColor()})),p.Bc(10,"Change Color"),p.Sb(),p.Ob(11,"div",1),p.Tb(12,"button",3),p.cc("click",(function(){return c.value=1.8})),p.Bc(13,"1.80"),p.Sb(),p.Tb(14,"button",3),p.cc("click",(function(){return c.value=4.25})),p.Bc(15,"4.25"),p.Sb(),p.Tb(16,"div",4),p.Bc(17,"Custom icon"),p.Sb(),p.Tb(18,"ngl-rating",5),p.cc("rateChange",(function(b){return c.value=b})),p.zc(19,i,1,1,"ng-template",6),p.Sb()),2&b&&(p.Dc("Value is: ",c.value,"\n"),p.Bb(1),p.mc("rate",c.value)("isReadonly",c.readonly)("size",c.size)("colorOn",c.color),p.Bb(2),p.mc("disabled",c.readonly),p.Bb(15),p.mc("rate",c.value))},directives:[e.a,T.a,S.a,o.a],encapsulation:2}),b})();var r=n("M6rV");let d=(()=>{class b{constructor(){this.value=3}}return b.\u0275fac=function(c){return new(c||b)},b.\u0275cmp=p.Gb({type:b,selectors:[["app-demo-ratings-config"]],features:[p.Ab([{provide:B.c,useValue:{colorOn:"green",colorOff:"pink"}}])],decls:1,vars:1,consts:[[3,"rate","rateChange"]],template:function(b,c){1&b&&(p.Tb(0,"ngl-rating",0),p.cc("rateChange",(function(b){return c.value=b})),p.Sb()),2&b&&p.mc("rate",c.value)},directives:[e.a],encapsulation:2}),b})();function g(b,c){1&b&&(p.Bc(0,"\n      "),p.Tb(1,"pre",21),p.Nb(),p.Tb(2,"code"),p.Bc(3,"Value is: {{value}}\n"),p.Tb(4,"span",22),p.Tb(5,"span",22),p.Tb(6,"span",23),p.Bc(7,"<"),p.Sb(),p.Bc(8,"ngl-rating"),p.Sb(),p.Bc(9," "),p.Tb(10,"span",24),p.Bc(11,"[(rate)]"),p.Sb(),p.Tb(12,"span",25),p.Tb(13,"span",23),p.Bc(14,"="),p.Sb(),p.Tb(15,"span",23),p.Bc(16,'"'),p.Sb(),p.Bc(17,"value"),p.Tb(18,"span",23),p.Bc(19,'"'),p.Sb(),p.Sb(),p.Bc(20," "),p.Tb(21,"span",24),p.Bc(22,"[isReadonly]"),p.Sb(),p.Tb(23,"span",25),p.Tb(24,"span",23),p.Bc(25,"="),p.Sb(),p.Tb(26,"span",23),p.Bc(27,'"'),p.Sb(),p.Bc(28,"readonly"),p.Tb(29,"span",23),p.Bc(30,'"'),p.Sb(),p.Sb(),p.Bc(31," "),p.Tb(32,"span",24),p.Bc(33,"[size]"),p.Sb(),p.Tb(34,"span",25),p.Tb(35,"span",23),p.Bc(36,"="),p.Sb(),p.Tb(37,"span",23),p.Bc(38,'"'),p.Sb(),p.Bc(39,"size"),p.Tb(40,"span",23),p.Bc(41,'"'),p.Sb(),p.Sb(),p.Bc(42," "),p.Tb(43,"span",24),p.Bc(44,"[colorOn]"),p.Sb(),p.Tb(45,"span",25),p.Tb(46,"span",23),p.Bc(47,"="),p.Sb(),p.Tb(48,"span",23),p.Bc(49,'"'),p.Sb(),p.Bc(50,"color"),p.Tb(51,"span",23),p.Bc(52,'"'),p.Sb(),p.Sb(),p.Tb(53,"span",23),p.Bc(54,">"),p.Sb(),p.Sb(),p.Tb(55,"span",22),p.Tb(56,"span",22),p.Tb(57,"span",23),p.Bc(58,"</"),p.Sb(),p.Bc(59,"ngl-rating"),p.Sb(),p.Tb(60,"span",23),p.Bc(61,">"),p.Sb(),p.Sb(),p.Bc(62,"\n"),p.Tb(63,"span",22),p.Tb(64,"span",22),p.Tb(65,"span",23),p.Bc(66,"<"),p.Sb(),p.Bc(67,"div"),p.Sb(),p.Bc(68," "),p.Tb(69,"span",24),p.Bc(70,"class"),p.Sb(),p.Tb(71,"span",25),p.Tb(72,"span",23),p.Bc(73,"="),p.Sb(),p.Tb(74,"span",23),p.Bc(75,'"'),p.Sb(),p.Bc(76,"slds-grid slds-m-top_large"),p.Tb(77,"span",23),p.Bc(78,'"'),p.Sb(),p.Sb(),p.Tb(79,"span",23),p.Bc(80,">"),p.Sb(),p.Sb(),p.Tb(81,"span",22),p.Tb(82,"span",22),p.Tb(83,"span",23),p.Bc(84,"</"),p.Sb(),p.Bc(85,"div"),p.Sb(),p.Tb(86,"span",23),p.Bc(87,">"),p.Sb(),p.Sb(),p.Bc(88,"\n"),p.Tb(89,"span",22),p.Tb(90,"span",22),p.Tb(91,"span",23),p.Bc(92,"<"),p.Sb(),p.Bc(93,"button"),p.Sb(),p.Bc(94," "),p.Tb(95,"span",24),p.Bc(96,"type"),p.Sb(),p.Tb(97,"span",25),p.Tb(98,"span",23),p.Bc(99,"="),p.Sb(),p.Tb(100,"span",23),p.Bc(101,'"'),p.Sb(),p.Bc(102,"button"),p.Tb(103,"span",23),p.Bc(104,'"'),p.Sb(),p.Sb(),p.Bc(105," "),p.Tb(106,"span",24),p.Bc(107,"nglButton"),p.Sb(),p.Bc(108," "),p.Tb(109,"span",24),p.Bc(110,"variant"),p.Sb(),p.Tb(111,"span",25),p.Tb(112,"span",23),p.Bc(113,"="),p.Sb(),p.Tb(114,"span",23),p.Bc(115,'"'),p.Sb(),p.Bc(116,"destructive"),p.Tb(117,"span",23),p.Bc(118,'"'),p.Sb(),p.Sb(),p.Bc(119," "),p.Tb(120,"span",24),p.Bc(121,"(click)"),p.Sb(),p.Tb(122,"span",25),p.Tb(123,"span",23),p.Bc(124,"="),p.Sb(),p.Tb(125,"span",23),p.Bc(126,'"'),p.Sb(),p.Bc(127,"value = 0"),p.Tb(128,"span",23),p.Bc(129,'"'),p.Sb(),p.Sb(),p.Bc(130," "),p.Tb(131,"span",24),p.Bc(132,"[disabled]"),p.Sb(),p.Tb(133,"span",25),p.Tb(134,"span",23),p.Bc(135,"="),p.Sb(),p.Tb(136,"span",23),p.Bc(137,'"'),p.Sb(),p.Bc(138,"readonly"),p.Tb(139,"span",23),p.Bc(140,'"'),p.Sb(),p.Sb(),p.Tb(141,"span",23),p.Bc(142,">"),p.Sb(),p.Sb(),p.Bc(143,"Clear"),p.Tb(144,"span",22),p.Tb(145,"span",22),p.Tb(146,"span",23),p.Bc(147,"</"),p.Sb(),p.Bc(148,"button"),p.Sb(),p.Tb(149,"span",23),p.Bc(150,">"),p.Sb(),p.Sb(),p.Bc(151,"\n"),p.Tb(152,"span",22),p.Tb(153,"span",22),p.Tb(154,"span",23),p.Bc(155,"<"),p.Sb(),p.Bc(156,"button"),p.Sb(),p.Bc(157," "),p.Tb(158,"span",24),p.Bc(159,"type"),p.Sb(),p.Tb(160,"span",25),p.Tb(161,"span",23),p.Bc(162,"="),p.Sb(),p.Tb(163,"span",23),p.Bc(164,'"'),p.Sb(),p.Bc(165,"button"),p.Tb(166,"span",23),p.Bc(167,'"'),p.Sb(),p.Sb(),p.Bc(168," "),p.Tb(169,"span",24),p.Bc(170,"nglButton"),p.Sb(),p.Bc(171," "),p.Tb(172,"span",24),p.Bc(173,"(click)"),p.Sb(),p.Tb(174,"span",25),p.Tb(175,"span",23),p.Bc(176,"="),p.Sb(),p.Tb(177,"span",23),p.Bc(178,'"'),p.Sb(),p.Bc(179,"readonly = !readonly"),p.Tb(180,"span",23),p.Bc(181,'"'),p.Sb(),p.Sb(),p.Tb(182,"span",23),p.Bc(183,">"),p.Sb(),p.Sb(),p.Bc(184,"Toggle readonly"),p.Tb(185,"span",22),p.Tb(186,"span",22),p.Tb(187,"span",23),p.Bc(188,"</"),p.Sb(),p.Bc(189,"button"),p.Sb(),p.Tb(190,"span",23),p.Bc(191,">"),p.Sb(),p.Sb(),p.Bc(192,"\n"),p.Tb(193,"span",22),p.Tb(194,"span",22),p.Tb(195,"span",23),p.Bc(196,"<"),p.Sb(),p.Bc(197,"button"),p.Sb(),p.Bc(198," "),p.Tb(199,"span",24),p.Bc(200,"type"),p.Sb(),p.Tb(201,"span",25),p.Tb(202,"span",23),p.Bc(203,"="),p.Sb(),p.Tb(204,"span",23),p.Bc(205,'"'),p.Sb(),p.Bc(206,"button"),p.Tb(207,"span",23),p.Bc(208,'"'),p.Sb(),p.Sb(),p.Bc(209," "),p.Tb(210,"span",24),p.Bc(211,"nglButton"),p.Sb(),p.Bc(212," "),p.Tb(213,"span",24),p.Bc(214,"(click)"),p.Sb(),p.Tb(215,"span",25),p.Tb(216,"span",23),p.Bc(217,"="),p.Sb(),p.Tb(218,"span",23),p.Bc(219,'"'),p.Sb(),p.Bc(220,"changeSize()"),p.Tb(221,"span",23),p.Bc(222,'"'),p.Sb(),p.Sb(),p.Tb(223,"span",23),p.Bc(224,">"),p.Sb(),p.Sb(),p.Bc(225,"Change Size"),p.Tb(226,"span",22),p.Tb(227,"span",22),p.Tb(228,"span",23),p.Bc(229,"</"),p.Sb(),p.Bc(230,"button"),p.Sb(),p.Tb(231,"span",23),p.Bc(232,">"),p.Sb(),p.Sb(),p.Bc(233,"\n"),p.Tb(234,"span",22),p.Tb(235,"span",22),p.Tb(236,"span",23),p.Bc(237,"<"),p.Sb(),p.Bc(238,"button"),p.Sb(),p.Bc(239," "),p.Tb(240,"span",24),p.Bc(241,"type"),p.Sb(),p.Tb(242,"span",25),p.Tb(243,"span",23),p.Bc(244,"="),p.Sb(),p.Tb(245,"span",23),p.Bc(246,'"'),p.Sb(),p.Bc(247,"button"),p.Tb(248,"span",23),p.Bc(249,'"'),p.Sb(),p.Sb(),p.Bc(250," "),p.Tb(251,"span",24),p.Bc(252,"nglButton"),p.Sb(),p.Bc(253," "),p.Tb(254,"span",24),p.Bc(255,"(click)"),p.Sb(),p.Tb(256,"span",25),p.Tb(257,"span",23),p.Bc(258,"="),p.Sb(),p.Tb(259,"span",23),p.Bc(260,'"'),p.Sb(),p.Bc(261,"changeColor()"),p.Tb(262,"span",23),p.Bc(263,'"'),p.Sb(),p.Sb(),p.Tb(264,"span",23),p.Bc(265,">"),p.Sb(),p.Sb(),p.Bc(266,"Change Color"),p.Tb(267,"span",22),p.Tb(268,"span",22),p.Tb(269,"span",23),p.Bc(270,"</"),p.Sb(),p.Bc(271,"button"),p.Sb(),p.Tb(272,"span",23),p.Bc(273,">"),p.Sb(),p.Sb(),p.Bc(274,"\n"),p.Tb(275,"span",22),p.Tb(276,"span",22),p.Tb(277,"span",23),p.Bc(278,"<"),p.Sb(),p.Bc(279,"div"),p.Sb(),p.Bc(280," "),p.Tb(281,"span",24),p.Bc(282,"class"),p.Sb(),p.Tb(283,"span",25),p.Tb(284,"span",23),p.Bc(285,"="),p.Sb(),p.Tb(286,"span",23),p.Bc(287,'"'),p.Sb(),p.Bc(288,"slds-grid slds-m-top_large"),p.Tb(289,"span",23),p.Bc(290,'"'),p.Sb(),p.Sb(),p.Tb(291,"span",23),p.Bc(292,">"),p.Sb(),p.Sb(),p.Tb(293,"span",22),p.Tb(294,"span",22),p.Tb(295,"span",23),p.Bc(296,"</"),p.Sb(),p.Bc(297,"div"),p.Sb(),p.Tb(298,"span",23),p.Bc(299,">"),p.Sb(),p.Sb(),p.Bc(300,"\n"),p.Tb(301,"span",22),p.Tb(302,"span",22),p.Tb(303,"span",23),p.Bc(304,"<"),p.Sb(),p.Bc(305,"button"),p.Sb(),p.Bc(306," "),p.Tb(307,"span",24),p.Bc(308,"type"),p.Sb(),p.Tb(309,"span",25),p.Tb(310,"span",23),p.Bc(311,"="),p.Sb(),p.Tb(312,"span",23),p.Bc(313,'"'),p.Sb(),p.Bc(314,"button"),p.Tb(315,"span",23),p.Bc(316,'"'),p.Sb(),p.Sb(),p.Bc(317," "),p.Tb(318,"span",24),p.Bc(319,"nglButton"),p.Sb(),p.Bc(320," "),p.Tb(321,"span",24),p.Bc(322,"(click)"),p.Sb(),p.Tb(323,"span",25),p.Tb(324,"span",23),p.Bc(325,"="),p.Sb(),p.Tb(326,"span",23),p.Bc(327,'"'),p.Sb(),p.Bc(328,"value = 1.8"),p.Tb(329,"span",23),p.Bc(330,'"'),p.Sb(),p.Sb(),p.Tb(331,"span",23),p.Bc(332,">"),p.Sb(),p.Sb(),p.Bc(333,"1.80"),p.Tb(334,"span",22),p.Tb(335,"span",22),p.Tb(336,"span",23),p.Bc(337,"</"),p.Sb(),p.Bc(338,"button"),p.Sb(),p.Tb(339,"span",23),p.Bc(340,">"),p.Sb(),p.Sb(),p.Bc(341,"\n"),p.Tb(342,"span",22),p.Tb(343,"span",22),p.Tb(344,"span",23),p.Bc(345,"<"),p.Sb(),p.Bc(346,"button"),p.Sb(),p.Bc(347," "),p.Tb(348,"span",24),p.Bc(349,"type"),p.Sb(),p.Tb(350,"span",25),p.Tb(351,"span",23),p.Bc(352,"="),p.Sb(),p.Tb(353,"span",23),p.Bc(354,'"'),p.Sb(),p.Bc(355,"button"),p.Tb(356,"span",23),p.Bc(357,'"'),p.Sb(),p.Sb(),p.Bc(358," "),p.Tb(359,"span",24),p.Bc(360,"nglButton"),p.Sb(),p.Bc(361," "),p.Tb(362,"span",24),p.Bc(363,"(click)"),p.Sb(),p.Tb(364,"span",25),p.Tb(365,"span",23),p.Bc(366,"="),p.Sb(),p.Tb(367,"span",23),p.Bc(368,'"'),p.Sb(),p.Bc(369,"value = 4.25"),p.Tb(370,"span",23),p.Bc(371,'"'),p.Sb(),p.Sb(),p.Tb(372,"span",23),p.Bc(373,">"),p.Sb(),p.Sb(),p.Bc(374,"4.25"),p.Tb(375,"span",22),p.Tb(376,"span",22),p.Tb(377,"span",23),p.Bc(378,"</"),p.Sb(),p.Bc(379,"button"),p.Sb(),p.Tb(380,"span",23),p.Bc(381,">"),p.Sb(),p.Sb(),p.Bc(382,"\n"),p.Tb(383,"span",22),p.Tb(384,"span",22),p.Tb(385,"span",23),p.Bc(386,"<"),p.Sb(),p.Bc(387,"div"),p.Sb(),p.Bc(388," "),p.Tb(389,"span",24),p.Bc(390,"class"),p.Sb(),p.Tb(391,"span",25),p.Tb(392,"span",23),p.Bc(393,"="),p.Sb(),p.Tb(394,"span",23),p.Bc(395,'"'),p.Sb(),p.Bc(396,"slds-text-title_caps slds-m-bottom_small slds-m-top_x-large"),p.Tb(397,"span",23),p.Bc(398,'"'),p.Sb(),p.Sb(),p.Tb(399,"span",23),p.Bc(400,">"),p.Sb(),p.Sb(),p.Bc(401,"Custom icon"),p.Tb(402,"span",22),p.Tb(403,"span",22),p.Tb(404,"span",23),p.Bc(405,"</"),p.Sb(),p.Bc(406,"div"),p.Sb(),p.Tb(407,"span",23),p.Bc(408,">"),p.Sb(),p.Sb(),p.Bc(409,"\n"),p.Tb(410,"span",22),p.Tb(411,"span",22),p.Tb(412,"span",23),p.Bc(413,"<"),p.Sb(),p.Bc(414,"ngl-rating"),p.Sb(),p.Bc(415," "),p.Tb(416,"span",24),p.Bc(417,"[(rate)]"),p.Sb(),p.Tb(418,"span",25),p.Tb(419,"span",23),p.Bc(420,"="),p.Sb(),p.Tb(421,"span",23),p.Bc(422,'"'),p.Sb(),p.Bc(423,"value"),p.Tb(424,"span",23),p.Bc(425,'"'),p.Sb(),p.Sb(),p.Tb(426,"span",23),p.Bc(427,">"),p.Sb(),p.Sb(),p.Bc(428,"\n  "),p.Tb(429,"span",22),p.Tb(430,"span",22),p.Tb(431,"span",23),p.Bc(432,"<"),p.Sb(),p.Bc(433,"ng-template"),p.Sb(),p.Bc(434," "),p.Tb(435,"span",24),p.Bc(436,"nglRatingIcon"),p.Sb(),p.Bc(437," "),p.Tb(438,"span",24),p.Bc(439,"let-active"),p.Sb(),p.Tb(440,"span",23),p.Bc(441,">"),p.Sb(),p.Sb(),p.Bc(442,"\n    "),p.Tb(443,"span",22),p.Tb(444,"span",22),p.Tb(445,"span",23),p.Bc(446,"<"),p.Sb(),p.Bc(447,"ngl-avatar"),p.Sb(),p.Bc(448," "),p.Tb(449,"span",24),p.Bc(450,"[src]"),p.Sb(),p.Tb(451,"span",25),p.Tb(452,"span",23),p.Bc(453,"="),p.Sb(),p.Tb(454,"span",23),p.Bc(455,'"'),p.Sb(),p.Bc(456,"customImage(active)"),p.Tb(457,"span",23),p.Bc(458,'"'),p.Sb(),p.Sb(),p.Bc(459," "),p.Tb(460,"span",24),p.Bc(461,"type"),p.Sb(),p.Tb(462,"span",25),p.Tb(463,"span",23),p.Bc(464,"="),p.Sb(),p.Tb(465,"span",23),p.Bc(466,'"'),p.Sb(),p.Bc(467,"circle"),p.Tb(468,"span",23),p.Bc(469,'"'),p.Sb(),p.Sb(),p.Tb(470,"span",23),p.Bc(471,">"),p.Sb(),p.Sb(),p.Tb(472,"span",22),p.Tb(473,"span",22),p.Tb(474,"span",23),p.Bc(475,"</"),p.Sb(),p.Bc(476,"ngl-avatar"),p.Sb(),p.Tb(477,"span",23),p.Bc(478,">"),p.Sb(),p.Sb(),p.Bc(479,"\n  "),p.Tb(480,"span",22),p.Tb(481,"span",22),p.Tb(482,"span",23),p.Bc(483,"</"),p.Sb(),p.Bc(484,"ng-template"),p.Sb(),p.Tb(485,"span",23),p.Bc(486,">"),p.Sb(),p.Sb(),p.Bc(487,"\n"),p.Tb(488,"span",22),p.Tb(489,"span",22),p.Tb(490,"span",23),p.Bc(491,"</"),p.Sb(),p.Bc(492,"ngl-rating"),p.Sb(),p.Tb(493,"span",23),p.Bc(494,">"),p.Sb(),p.Sb(),p.Sb(),p.Ub(),p.Sb(),p.Bc(495,"\n    "))}function u(b,c){1&b&&(p.Bc(0,"\n      "),p.Tb(1,"pre",26),p.Tb(2,"code"),p.Tb(3,"span",27),p.Bc(4,"import"),p.Sb(),p.Bc(5," "),p.Tb(6,"span",23),p.Bc(7),p.Sb(),p.Bc(8," Component "),p.Tb(9,"span",23),p.Bc(10),p.Sb(),p.Bc(11," "),p.Tb(12,"span",27),p.Bc(13,"from"),p.Sb(),p.Bc(14," "),p.Tb(15,"span",28),p.Bc(16,"'@angular/core'"),p.Sb(),p.Tb(17,"span",23),p.Bc(18,";"),p.Sb(),p.Bc(19,"\n\n@"),p.Tb(20,"span",29),p.Bc(21,"Component"),p.Sb(),p.Tb(22,"span",23),p.Bc(23,"("),p.Sb(),p.Tb(24,"span",23),p.Bc(25),p.Sb(),p.Bc(26,"\n  selector"),p.Tb(27,"span",23),p.Bc(28,":"),p.Sb(),p.Bc(29," "),p.Tb(30,"span",28),p.Bc(31,"'app-demo-ratings-basic'"),p.Sb(),p.Tb(32,"span",23),p.Bc(33,","),p.Sb(),p.Bc(34,"\n  templateUrl"),p.Tb(35,"span",23),p.Bc(36,":"),p.Sb(),p.Bc(37," "),p.Tb(38,"span",28),p.Bc(39,"'./basic.html'"),p.Sb(),p.Tb(40,"span",23),p.Bc(41,","),p.Sb(),p.Bc(42,"\n"),p.Tb(43,"span",23),p.Bc(44),p.Sb(),p.Tb(45,"span",23),p.Bc(46,")"),p.Sb(),p.Bc(47,"\n"),p.Tb(48,"span",27),p.Bc(49,"export"),p.Sb(),p.Bc(50," "),p.Tb(51,"span",27),p.Bc(52,"class"),p.Sb(),p.Bc(53," "),p.Tb(54,"span",30),p.Bc(55,"DemoRatingsBasic"),p.Sb(),p.Bc(56," "),p.Tb(57,"span",23),p.Bc(58),p.Sb(),p.Bc(59,"\n  value "),p.Tb(60,"span",31),p.Bc(61,"="),p.Sb(),p.Bc(62," "),p.Tb(63,"span",32),p.Bc(64,"3"),p.Sb(),p.Tb(65,"span",23),p.Bc(66,";"),p.Sb(),p.Bc(67,"\n  "),p.Tb(68,"span",27),p.Bc(69,"readonly"),p.Sb(),p.Bc(70," "),p.Tb(71,"span",31),p.Bc(72,"="),p.Sb(),p.Bc(73," "),p.Tb(74,"span",33),p.Bc(75,"false"),p.Sb(),p.Tb(76,"span",23),p.Bc(77,";"),p.Sb(),p.Bc(78,"\n  size "),p.Tb(79,"span",31),p.Bc(80,"="),p.Sb(),p.Bc(81," "),p.Tb(82,"span",28),p.Bc(83,"'small'"),p.Sb(),p.Tb(84,"span",23),p.Bc(85,";"),p.Sb(),p.Bc(86,"\n  color "),p.Tb(87,"span",31),p.Bc(88,"="),p.Sb(),p.Bc(89," "),p.Tb(90,"span",28),p.Bc(91,"'#FFB75D'"),p.Sb(),p.Tb(92,"span",23),p.Bc(93,";"),p.Sb(),p.Bc(94,"\n\n  "),p.Tb(95,"span",27),p.Bc(96,"private"),p.Sb(),p.Bc(97," sizes "),p.Tb(98,"span",31),p.Bc(99,"="),p.Sb(),p.Bc(100," "),p.Tb(101,"span",23),p.Bc(102,"["),p.Sb(),p.Tb(103,"span",28),p.Bc(104,"'x-small'"),p.Sb(),p.Tb(105,"span",23),p.Bc(106,","),p.Sb(),p.Bc(107," "),p.Tb(108,"span",28),p.Bc(109,"'small'"),p.Sb(),p.Tb(110,"span",23),p.Bc(111,","),p.Sb(),p.Bc(112," "),p.Tb(113,"span",28),p.Bc(114,"''"),p.Sb(),p.Tb(115,"span",23),p.Bc(116,","),p.Sb(),p.Bc(117," "),p.Tb(118,"span",28),p.Bc(119,"'large'"),p.Sb(),p.Tb(120,"span",23),p.Bc(121,"]"),p.Sb(),p.Tb(122,"span",23),p.Bc(123,";"),p.Sb(),p.Bc(124,"\n  "),p.Tb(125,"span",27),p.Bc(126,"private"),p.Sb(),p.Bc(127," colors "),p.Tb(128,"span",31),p.Bc(129,"="),p.Sb(),p.Bc(130," "),p.Tb(131,"span",23),p.Bc(132,"["),p.Sb(),p.Tb(133,"span",28),p.Bc(134,"'#FFB75D'"),p.Sb(),p.Tb(135,"span",23),p.Bc(136,","),p.Sb(),p.Bc(137," "),p.Tb(138,"span",28),p.Bc(139,"'#F5675B'"),p.Sb(),p.Tb(140,"span",23),p.Bc(141,","),p.Sb(),p.Bc(142," "),p.Tb(143,"span",28),p.Bc(144,"'#9FDB66'"),p.Sb(),p.Tb(145,"span",23),p.Bc(146,"]"),p.Sb(),p.Tb(147,"span",23),p.Bc(148,";"),p.Sb(),p.Bc(149,"\n\n  "),p.Tb(150,"span",29),p.Bc(151,"changeSize"),p.Sb(),p.Tb(152,"span",23),p.Bc(153,"("),p.Sb(),p.Tb(154,"span",23),p.Bc(155,")"),p.Sb(),p.Bc(156," "),p.Tb(157,"span",23),p.Bc(158),p.Sb(),p.Bc(159,"\n    "),p.Tb(160,"span",27),p.Bc(161,"this"),p.Sb(),p.Tb(162,"span",23),p.Bc(163,"."),p.Sb(),p.Bc(164,"size "),p.Tb(165,"span",31),p.Bc(166,"="),p.Sb(),p.Bc(167," "),p.Tb(168,"span",27),p.Bc(169,"this"),p.Sb(),p.Tb(170,"span",23),p.Bc(171,"."),p.Sb(),p.Bc(172,"sizes"),p.Tb(173,"span",23),p.Bc(174,"["),p.Sb(),p.Tb(175,"span",23),p.Bc(176,"("),p.Sb(),p.Tb(177,"span",27),p.Bc(178,"this"),p.Sb(),p.Tb(179,"span",23),p.Bc(180,"."),p.Sb(),p.Bc(181,"sizes"),p.Tb(182,"span",23),p.Bc(183,"."),p.Sb(),p.Tb(184,"span",29),p.Bc(185,"indexOf"),p.Sb(),p.Tb(186,"span",23),p.Bc(187,"("),p.Sb(),p.Tb(188,"span",27),p.Bc(189,"this"),p.Sb(),p.Tb(190,"span",23),p.Bc(191,"."),p.Sb(),p.Bc(192,"size"),p.Tb(193,"span",23),p.Bc(194,")"),p.Sb(),p.Bc(195," "),p.Tb(196,"span",31),p.Bc(197,"+"),p.Sb(),p.Bc(198," "),p.Tb(199,"span",32),p.Bc(200,"1"),p.Sb(),p.Tb(201,"span",23),p.Bc(202,")"),p.Sb(),p.Bc(203," "),p.Tb(204,"span",31),p.Bc(205,"%"),p.Sb(),p.Bc(206," "),p.Tb(207,"span",27),p.Bc(208,"this"),p.Sb(),p.Tb(209,"span",23),p.Bc(210,"."),p.Sb(),p.Bc(211,"sizes"),p.Tb(212,"span",23),p.Bc(213,"."),p.Sb(),p.Bc(214,"length"),p.Tb(215,"span",23),p.Bc(216,"]"),p.Sb(),p.Tb(217,"span",23),p.Bc(218,";"),p.Sb(),p.Bc(219,"\n  "),p.Tb(220,"span",23),p.Bc(221),p.Sb(),p.Bc(222,"\n\n  "),p.Tb(223,"span",29),p.Bc(224,"changeColor"),p.Sb(),p.Tb(225,"span",23),p.Bc(226,"("),p.Sb(),p.Tb(227,"span",23),p.Bc(228,")"),p.Sb(),p.Bc(229," "),p.Tb(230,"span",23),p.Bc(231),p.Sb(),p.Bc(232,"\n    "),p.Tb(233,"span",27),p.Bc(234,"this"),p.Sb(),p.Tb(235,"span",23),p.Bc(236,"."),p.Sb(),p.Bc(237,"color "),p.Tb(238,"span",31),p.Bc(239,"="),p.Sb(),p.Bc(240," "),p.Tb(241,"span",27),p.Bc(242,"this"),p.Sb(),p.Tb(243,"span",23),p.Bc(244,"."),p.Sb(),p.Bc(245,"colors"),p.Tb(246,"span",23),p.Bc(247,"["),p.Sb(),p.Tb(248,"span",23),p.Bc(249,"("),p.Sb(),p.Tb(250,"span",27),p.Bc(251,"this"),p.Sb(),p.Tb(252,"span",23),p.Bc(253,"."),p.Sb(),p.Bc(254,"colors"),p.Tb(255,"span",23),p.Bc(256,"."),p.Sb(),p.Tb(257,"span",29),p.Bc(258,"indexOf"),p.Sb(),p.Tb(259,"span",23),p.Bc(260,"("),p.Sb(),p.Tb(261,"span",27),p.Bc(262,"this"),p.Sb(),p.Tb(263,"span",23),p.Bc(264,"."),p.Sb(),p.Bc(265,"color"),p.Tb(266,"span",23),p.Bc(267,")"),p.Sb(),p.Bc(268," "),p.Tb(269,"span",31),p.Bc(270,"+"),p.Sb(),p.Bc(271," "),p.Tb(272,"span",32),p.Bc(273,"1"),p.Sb(),p.Tb(274,"span",23),p.Bc(275,")"),p.Sb(),p.Bc(276," "),p.Tb(277,"span",31),p.Bc(278,"%"),p.Sb(),p.Bc(279," "),p.Tb(280,"span",27),p.Bc(281,"this"),p.Sb(),p.Tb(282,"span",23),p.Bc(283,"."),p.Sb(),p.Bc(284,"colors"),p.Tb(285,"span",23),p.Bc(286,"."),p.Sb(),p.Bc(287,"length"),p.Tb(288,"span",23),p.Bc(289,"]"),p.Sb(),p.Tb(290,"span",23),p.Bc(291,";"),p.Sb(),p.Bc(292,"\n  "),p.Tb(293,"span",23),p.Bc(294),p.Sb(),p.Bc(295,"\n\n  "),p.Tb(296,"span",29),p.Bc(297,"customImage"),p.Sb(),p.Tb(298,"span",23),p.Bc(299,"("),p.Sb(),p.Tb(300,"span",34),p.Bc(301,"isActive"),p.Tb(302,"span",23),p.Bc(303,":"),p.Sb(),p.Bc(304," "),p.Tb(305,"span",35),p.Bc(306,"boolean"),p.Sb(),p.Sb(),p.Tb(307,"span",23),p.Bc(308,")"),p.Sb(),p.Bc(309," "),p.Tb(310,"span",23),p.Bc(311),p.Sb(),p.Bc(312,"\n    "),p.Tb(313,"span",27),p.Bc(314,"return"),p.Sb(),p.Bc(315," "),p.Tb(316,"span",36),p.Tb(317,"span",28),p.Bc(318,"`assets/images/avatar"),p.Sb(),p.Tb(319,"span",37),p.Tb(320,"span",38),p.Bc(321),p.Sb(),p.Bc(322,"isActive "),p.Tb(323,"span",31),p.Bc(324,"?"),p.Sb(),p.Bc(325," "),p.Tb(326,"span",32),p.Bc(327,"3"),p.Sb(),p.Bc(328," "),p.Tb(329,"span",23),p.Bc(330,":"),p.Sb(),p.Bc(331," "),p.Tb(332,"span",32),p.Bc(333,"2"),p.Sb(),p.Tb(334,"span",38),p.Bc(335),p.Sb(),p.Sb(),p.Tb(336,"span",28),p.Bc(337,".jpg`"),p.Sb(),p.Sb(),p.Tb(338,"span",23),p.Bc(339,";"),p.Sb(),p.Bc(340,"\n  "),p.Tb(341,"span",23),p.Bc(342),p.Sb(),p.Bc(343,"\n"),p.Tb(344,"span",23),p.Bc(345),p.Sb(),p.Bc(346,"\n"),p.Sb(),p.Sb(),p.Bc(347,"\n    ")),2&b&&(p.Bb(7),p.Cc("{"),p.Bb(3),p.Cc("}"),p.Bb(15),p.Cc("{"),p.Bb(19),p.Cc("}"),p.Bb(14),p.Cc("{"),p.Bb(100),p.Cc("{"),p.Bb(63),p.Cc("}"),p.Bb(10),p.Cc("{"),p.Bb(63),p.Cc("}"),p.Bb(17),p.Cc("{"),p.Bb(10),p.Dc("$","{",""),p.Bb(14),p.Cc("}"),p.Bb(7),p.Cc("}"),p.Bb(3),p.Cc("}"))}function m(b,c){1&b&&(p.Bc(0,"\n      "),p.Tb(1,"pre",21),p.Nb(),p.Tb(2,"code"),p.Tb(3,"span",22),p.Tb(4,"span",22),p.Tb(5,"span",23),p.Bc(6,"<"),p.Sb(),p.Bc(7,"ngl-rating"),p.Sb(),p.Bc(8," "),p.Tb(9,"span",24),p.Bc(10,"[(rate)]"),p.Sb(),p.Tb(11,"span",25),p.Tb(12,"span",23),p.Bc(13,"="),p.Sb(),p.Tb(14,"span",23),p.Bc(15,'"'),p.Sb(),p.Bc(16,"value"),p.Tb(17,"span",23),p.Bc(18,'"'),p.Sb(),p.Sb(),p.Tb(19,"span",23),p.Bc(20,">"),p.Sb(),p.Sb(),p.Tb(21,"span",22),p.Tb(22,"span",22),p.Tb(23,"span",23),p.Bc(24,"</"),p.Sb(),p.Bc(25,"ngl-rating"),p.Sb(),p.Tb(26,"span",23),p.Bc(27,">"),p.Sb(),p.Sb(),p.Sb(),p.Ub(),p.Sb(),p.Bc(28,"\n    "))}function h(b,c){1&b&&(p.Bc(0,"\n      "),p.Tb(1,"pre",26),p.Tb(2,"code"),p.Tb(3,"span",27),p.Bc(4,"import"),p.Sb(),p.Bc(5," "),p.Tb(6,"span",23),p.Bc(7),p.Sb(),p.Bc(8," Component "),p.Tb(9,"span",23),p.Bc(10),p.Sb(),p.Bc(11," "),p.Tb(12,"span",27),p.Bc(13,"from"),p.Sb(),p.Bc(14," "),p.Tb(15,"span",28),p.Bc(16,"'@angular/core'"),p.Sb(),p.Tb(17,"span",23),p.Bc(18,";"),p.Sb(),p.Bc(19,"\n"),p.Tb(20,"span",27),p.Bc(21,"import"),p.Sb(),p.Bc(22," "),p.Tb(23,"span",23),p.Bc(24),p.Sb(),p.Bc(25," "),p.Tb(26,"span",39),p.Bc(27,"NGL_RATING_CONFIG"),p.Sb(),p.Tb(28,"span",23),p.Bc(29,","),p.Sb(),p.Bc(30," NglRatingConfig "),p.Tb(31,"span",23),p.Bc(32),p.Sb(),p.Bc(33," "),p.Tb(34,"span",27),p.Bc(35,"from"),p.Sb(),p.Bc(36," "),p.Tb(37,"span",28),p.Bc(38,"'ng-lightning'"),p.Sb(),p.Tb(39,"span",23),p.Bc(40,";"),p.Sb(),p.Bc(41,"\n\n@"),p.Tb(42,"span",29),p.Bc(43,"Component"),p.Sb(),p.Tb(44,"span",23),p.Bc(45,"("),p.Sb(),p.Tb(46,"span",23),p.Bc(47),p.Sb(),p.Bc(48,"\n  selector"),p.Tb(49,"span",23),p.Bc(50,":"),p.Sb(),p.Bc(51," "),p.Tb(52,"span",28),p.Bc(53,"'app-demo-ratings-config'"),p.Sb(),p.Tb(54,"span",23),p.Bc(55,","),p.Sb(),p.Bc(56,"\n  templateUrl"),p.Tb(57,"span",23),p.Bc(58,":"),p.Sb(),p.Bc(59," "),p.Tb(60,"span",28),p.Bc(61,"'./config.html'"),p.Sb(),p.Tb(62,"span",23),p.Bc(63,","),p.Sb(),p.Bc(64,"\n  providers"),p.Tb(65,"span",23),p.Bc(66,":"),p.Sb(),p.Bc(67," "),p.Tb(68,"span",23),p.Bc(69,"["),p.Sb(),p.Bc(70,"\n    "),p.Tb(71,"span",23),p.Bc(72),p.Sb(),p.Bc(73," provide"),p.Tb(74,"span",23),p.Bc(75,":"),p.Sb(),p.Bc(76," "),p.Tb(77,"span",39),p.Bc(78,"NGL_RATING_CONFIG"),p.Sb(),p.Tb(79,"span",23),p.Bc(80,","),p.Sb(),p.Bc(81," useValue"),p.Tb(82,"span",23),p.Bc(83,":"),p.Sb(),p.Bc(84," "),p.Tb(85,"span",31),p.Bc(86,"<"),p.Sb(),p.Bc(87,"NglRatingConfig"),p.Tb(88,"span",31),p.Bc(89,">"),p.Sb(),p.Tb(90,"span",23),p.Bc(91),p.Sb(),p.Bc(92," colorOn"),p.Tb(93,"span",23),p.Bc(94,":"),p.Sb(),p.Bc(95," "),p.Tb(96,"span",28),p.Bc(97,"'green'"),p.Sb(),p.Tb(98,"span",23),p.Bc(99,","),p.Sb(),p.Bc(100," colorOff"),p.Tb(101,"span",23),p.Bc(102,":"),p.Sb(),p.Bc(103," "),p.Tb(104,"span",28),p.Bc(105,"'pink'"),p.Sb(),p.Bc(106," "),p.Tb(107,"span",23),p.Bc(108),p.Sb(),p.Bc(109," "),p.Tb(110,"span",23),p.Bc(111),p.Sb(),p.Tb(112,"span",23),p.Bc(113,","),p.Sb(),p.Bc(114,"\n  "),p.Tb(115,"span",23),p.Bc(116,"]"),p.Sb(),p.Tb(117,"span",23),p.Bc(118,","),p.Sb(),p.Bc(119,"\n"),p.Tb(120,"span",23),p.Bc(121),p.Sb(),p.Tb(122,"span",23),p.Bc(123,")"),p.Sb(),p.Bc(124,"\n"),p.Tb(125,"span",27),p.Bc(126,"export"),p.Sb(),p.Bc(127," "),p.Tb(128,"span",27),p.Bc(129,"class"),p.Sb(),p.Bc(130," "),p.Tb(131,"span",30),p.Bc(132,"DemoRatingsConfig"),p.Sb(),p.Bc(133," "),p.Tb(134,"span",23),p.Bc(135),p.Sb(),p.Bc(136,"\n  value "),p.Tb(137,"span",31),p.Bc(138,"="),p.Sb(),p.Bc(139," "),p.Tb(140,"span",32),p.Bc(141,"3"),p.Sb(),p.Tb(142,"span",23),p.Bc(143,";"),p.Sb(),p.Bc(144,"\n"),p.Tb(145,"span",23),p.Bc(146),p.Sb(),p.Bc(147,"\n"),p.Sb(),p.Sb(),p.Bc(148,"\n    ")),2&b&&(p.Bb(7),p.Cc("{"),p.Bb(3),p.Cc("}"),p.Bb(14),p.Cc("{"),p.Bb(8),p.Cc("}"),p.Bb(15),p.Cc("{"),p.Bb(25),p.Cc("{"),p.Bb(19),p.Cc("{"),p.Bb(17),p.Cc("}"),p.Bb(3),p.Cc("}"),p.Bb(10),p.Cc("}"),p.Bb(14),p.Cc("{"),p.Bb(11),p.Cc("}"))}const C=[{path:"",component:(()=>{class b{}return b.\u0275fac=function(c){return new(c||b)},b.\u0275cmp=p.Gb({type:b,selectors:[["app-demo-ratings"]],decls:207,vars:4,consts:[[1,"component__header","slds-border_bottom","slds-grid","slds-wrap","slds-m-bottom_medium"],[1,"slds-has-flexi-truncate","slds-align-middle"],[2,"text-transform","capitalize"],[1,"slds-align-middle","slds-text-body_small"],["href","https://github.com/ng-lightning/ng-lightning/tree/master/projects/ng-lightning/src/lib/ratings","target","_blank",1,"slds-button","slds-button_neutral"],[1,"slds-grid","slds-grid_vertical-align-center"],["src","assets/images/github.svg",2,"height","15px","width","15px","margin-right","0.5rem"],[1,"slds-m-vertical_medium","readme"],[1,"slds-m-vertical_medium"],[1,"callout"],[1,"slds-box","slds-is-relative","slds-theme_default","slds-m-bottom_large",2,"padding-top","1.5rem"],[1,"example__header","slds-text-heading_small"],["markupbasic",""],["tsbasic",""],[1,"slds-is-relative","slds-m-top_large",2,"min-height","25px"],["dir","ratings","file","basic","tsRaw","import%20%7B%20Component%20%7D%20from%20'%40angular%2Fcore'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-demo-ratings-basic'%2C%0A%20%20templateUrl%3A%20'.%2Fbasic.html'%2C%0A%7D)%0Aexport%20class%20DemoRatingsBasic%20%7B%0A%20%20value%20%3D%203%3B%0A%20%20readonly%20%3D%20false%3B%0A%20%20size%20%3D%20'small'%3B%0A%20%20color%20%3D%20'%23FFB75D'%3B%0A%0A%20%20private%20sizes%20%3D%20%5B'x-small'%2C%20'small'%2C%20''%2C%20'large'%5D%3B%0A%20%20private%20colors%20%3D%20%5B'%23FFB75D'%2C%20'%23F5675B'%2C%20'%239FDB66'%5D%3B%0A%0A%20%20changeSize()%20%7B%0A%20%20%20%20this.size%20%3D%20this.sizes%5B(this.sizes.indexOf(this.size)%20%2B%201)%20%25%20this.sizes.length%5D%3B%0A%20%20%7D%0A%0A%20%20changeColor()%20%7B%0A%20%20%20%20this.color%20%3D%20this.colors%5B(this.colors.indexOf(this.color)%20%2B%201)%20%25%20this.colors.length%5D%3B%0A%20%20%7D%0A%0A%20%20customImage(isActive%3A%20boolean)%20%7B%0A%20%20%20%20return%20%60assets%2Fimages%2Favatar%24%7BisActive%20%3F%203%20%3A%202%7D.jpg%60%3B%0A%20%20%7D%0A%7D%0A","markupRaw","Value%20is%3A%20%7B%7Bvalue%7D%7D%0A%3Cngl-rating%20%5B(rate)%5D%3D%22value%22%20%5BisReadonly%5D%3D%22readonly%22%20%5Bsize%5D%3D%22size%22%20%5BcolorOn%5D%3D%22color%22%3E%3C%2Fngl-rating%3E%0A%3Cdiv%20class%3D%22slds-grid%20slds-m-top_large%22%3E%3C%2Fdiv%3E%0A%3Cbutton%20type%3D%22button%22%20nglButton%20variant%3D%22destructive%22%20(click)%3D%22value%20%3D%200%22%20%5Bdisabled%5D%3D%22readonly%22%3EClear%3C%2Fbutton%3E%0A%3Cbutton%20type%3D%22button%22%20nglButton%20(click)%3D%22readonly%20%3D%20!readonly%22%3EToggle%20readonly%3C%2Fbutton%3E%0A%3Cbutton%20type%3D%22button%22%20nglButton%20(click)%3D%22changeSize()%22%3EChange%20Size%3C%2Fbutton%3E%0A%3Cbutton%20type%3D%22button%22%20nglButton%20(click)%3D%22changeColor()%22%3EChange%20Color%3C%2Fbutton%3E%0A%3Cdiv%20class%3D%22slds-grid%20slds-m-top_large%22%3E%3C%2Fdiv%3E%0A%3Cbutton%20type%3D%22button%22%20nglButton%20(click)%3D%22value%20%3D%201.8%22%3E1.80%3C%2Fbutton%3E%0A%3Cbutton%20type%3D%22button%22%20nglButton%20(click)%3D%22value%20%3D%204.25%22%3E4.25%3C%2Fbutton%3E%0A%3Cdiv%20class%3D%22slds-text-title_caps%20slds-m-bottom_small%20slds-m-top_x-large%22%3ECustom%20icon%3C%2Fdiv%3E%0A%3Cngl-rating%20%5B(rate)%5D%3D%22value%22%3E%0A%20%20%3Cng-template%20nglRatingIcon%20let-active%3E%0A%20%20%20%20%3Cngl-avatar%20%5Bsrc%5D%3D%22customImage(active)%22%20type%3D%22circle%22%3E%3C%2Fngl-avatar%3E%0A%20%20%3C%2Fng-template%3E%0A%3C%2Fngl-rating%3E",3,"ts","markup"],["markupconfig",""],["tsconfig",""],["dir","ratings","file","config","tsRaw","import%20%7B%20Component%20%7D%20from%20'%40angular%2Fcore'%3B%0Aimport%20%7B%20NGL_RATING_CONFIG%2C%20NglRatingConfig%20%7D%20from%20'ng-lightning'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-demo-ratings-config'%2C%0A%20%20templateUrl%3A%20'.%2Fconfig.html'%2C%0A%20%20providers%3A%20%5B%0A%20%20%20%20%7B%20provide%3A%20NGL_RATING_CONFIG%2C%20useValue%3A%20%3CNglRatingConfig%3E%7B%20colorOn%3A%20'green'%2C%20colorOff%3A%20'pink'%20%7D%20%7D%2C%0A%20%20%5D%2C%0A%7D)%0Aexport%20class%20DemoRatingsConfig%20%7B%0A%20%20value%20%3D%203%3B%0A%7D%0A","markupRaw","%0A%3Cngl-rating%20%5B(rate)%5D%3D%22value%22%3E%3C%2Fngl-rating%3E",3,"ts","markup"],[1,"slds-box","slds-theme_default"],[1,"api"],[1,"language-markup"],[1,"token","tag"],[1,"token","punctuation"],[1,"token","attr-name"],[1,"token","attr-value"],[1,"language-typescript"],[1,"token","keyword"],[1,"token","string"],[1,"token","function"],[1,"token","class-name"],[1,"token","operator"],[1,"token","number"],[1,"token","boolean"],[1,"token","parameter"],[1,"token","builtin"],[1,"token","template-string"],[1,"token","interpolation"],[1,"token","interpolation-punctuation","punctuation"],[1,"token","constant"]],template:function(b,c){if(1&b&&(p.Tb(0,"header",0),p.Tb(1,"div",1),p.Tb(2,"h1",2),p.Bc(3," ratings "),p.Sb(),p.Sb(),p.Tb(4,"div",3),p.Tb(5,"a",4),p.Tb(6,"div",5),p.Ob(7,"img",6),p.Bc(8,"Source"),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Tb(9,"div",7),p.Tb(10,"p"),p.Bc(11,"Rating directive that will take care of visualizing a star rating bar."),p.Sb(),p.Tb(12,"p"),p.Bc(13,"You can specify a custom icon, size and color for on/off state if you want."),p.Sb(),p.Tb(14,"p"),p.Bc(15,"In case you want to use your own custom icons you can just use "),p.Tb(16,"code"),p.Bc(17,"ng-template[nglRatingIcon]"),p.Sb(),p.Bc(18,"."),p.Sb(),p.Tb(19,"p"),p.Tb(20,"strong"),p.Bc(21,"Changing the default behavior"),p.Sb(),p.Ob(22,"br"),p.Bc(23,"\nYou can configure your app's default on/off colors by configuring and providing your options using the "),p.Tb(24,"code"),p.Bc(25,"NGL_RATING_CONFIG"),p.Sb(),p.Bc(26," injection token."),p.Sb(),p.Sb(),p.Tb(27,"div",8),p.Tb(28,"h2",9),p.Bc(29,"Examples"),p.Sb(),p.Tb(30,"div",10),p.Tb(31,"div",11),p.Bc(32,"Basic Usage"),p.Sb(),p.Ob(33,"app-demo-ratings-basic"),p.zc(34,g,496,0,"ng-template",null,12,p.Ac),p.zc(36,u,348,14,"ng-template",null,13,p.Ac),p.Tb(38,"div",14),p.Ob(39,"app-demo-example-docs",15),p.Sb(),p.Sb(),p.Tb(40,"div",10),p.Tb(41,"div",11),p.Bc(42,"Custom configuration"),p.Sb(),p.Ob(43,"app-demo-ratings-config"),p.zc(44,m,29,0,"ng-template",null,16,p.Ac),p.zc(46,h,149,12,"ng-template",null,17,p.Ac),p.Tb(48,"div",14),p.Ob(49,"app-demo-example-docs",18),p.Sb(),p.Sb(),p.Sb(),p.Tb(50,"div",8),p.Tb(51,"h2",9),p.Bc(52,"API"),p.Sb(),p.Tb(53,"div",19),p.Tb(54,"div",20),p.Tb(55,"h3"),p.Bc(56,"<ngl-rating>"),p.Sb(),p.Tb(57,"h4"),p.Bc(58,"NglRating"),p.Sb(),p.Tb(59,"table"),p.Tb(60,"thead"),p.Tb(61,"tr"),p.Tb(62,"th"),p.Bc(63,"Property"),p.Sb(),p.Tb(64,"th"),p.Bc(65,"Description"),p.Sb(),p.Tb(66,"th"),p.Bc(67,"Type"),p.Sb(),p.Tb(68,"th"),p.Bc(69,"Default"),p.Sb(),p.Sb(),p.Sb(),p.Tb(70,"tbody"),p.Tb(71,"tr"),p.Tb(72,"td"),p.Tb(73,"code"),p.Bc(74,"[rate]"),p.Sb(),p.Sb(),p.Tb(75,"td"),p.Bc(76,"Current rate value."),p.Sb(),p.Tb(77,"td"),p.Bc(78,"number"),p.Sb(),p.Tb(79,"td"),p.Bc(80,"0"),p.Sb(),p.Sb(),p.Tb(81,"tr"),p.Tb(82,"td"),p.Tb(83,"code"),p.Bc(84,"[max]"),p.Sb(),p.Sb(),p.Tb(85,"td"),p.Bc(86,"Maximum rate number."),p.Sb(),p.Tb(87,"td"),p.Bc(88,"number"),p.Sb(),p.Tb(89,"td"),p.Bc(90,"5"),p.Sb(),p.Sb(),p.Tb(91,"tr"),p.Tb(92,"td"),p.Tb(93,"code"),p.Bc(94,"[isReadonly]"),p.Sb(),p.Sb(),p.Tb(95,"td"),p.Bc(96,"Prevent user's interaction."),p.Sb(),p.Tb(97,"td"),p.Bc(98,"boolean"),p.Sb(),p.Tb(99,"td"),p.Bc(100,"false"),p.Sb(),p.Sb(),p.Tb(101,"tr"),p.Tb(102,"td"),p.Tb(103,"code"),p.Bc(104,"[icon]"),p.Sb(),p.Sb(),p.Tb(105,"td"),p.Bc(106,"LDS icon used to display the available rates."),p.Sb(),p.Tb(107,"td"),p.Bc(108,"string"),p.Sb(),p.Tb(109,"td"),p.Bc(110,"'favorite'"),p.Sb(),p.Sb(),p.Tb(111,"tr"),p.Tb(112,"td"),p.Tb(113,"code"),p.Bc(114,"[size]"),p.Sb(),p.Sb(),p.Tb(115,"td"),p.Bc(116,"Icon sizes."),p.Sb(),p.Tb(117,"td"),p.Bc(118,"string"),p.Sb(),p.Ob(119,"td"),p.Sb(),p.Tb(120,"tr"),p.Tb(121,"td"),p.Tb(122,"code"),p.Bc(123,"[colorOn]"),p.Sb(),p.Sb(),p.Tb(124,"td"),p.Bc(125,"Color when active."),p.Sb(),p.Tb(126,"td"),p.Bc(127,"string"),p.Sb(),p.Tb(128,"td"),p.Bc(129,"'#FFB75D'"),p.Sb(),p.Sb(),p.Tb(130,"tr"),p.Tb(131,"td"),p.Tb(132,"code"),p.Bc(133,"[colorOff]"),p.Sb(),p.Sb(),p.Tb(134,"td"),p.Bc(135,"Color when not active."),p.Sb(),p.Tb(136,"td"),p.Bc(137,"string"),p.Sb(),p.Tb(138,"td"),p.Bc(139,"'#54698D'"),p.Sb(),p.Sb(),p.Tb(140,"tr"),p.Tb(141,"td"),p.Tb(142,"code"),p.Bc(143,"(rateChange)"),p.Sb(),p.Sb(),p.Tb(144,"td"),p.Bc(145,"The clicked rate."),p.Sb(),p.Tb(146,"td"),p.Bc(147,"EventEmitter<number>"),p.Sb(),p.Ob(148,"td"),p.Sb(),p.Tb(149,"tr"),p.Tb(150,"td"),p.Tb(151,"code"),p.Bc(152,"(hover)"),p.Sb(),p.Sb(),p.Tb(153,"td"),p.Bc(154,"The currently hovered rate."),p.Sb(),p.Tb(155,"td"),p.Bc(156,"EventEmitter<number>"),p.Sb(),p.Ob(157,"td"),p.Sb(),p.Sb(),p.Sb(),p.Tb(158,"h3"),p.Bc(159,"<ng-template nglRatingIcon>"),p.Sb(),p.Tb(160,"h4"),p.Bc(161,"NglRatingIconTemplate"),p.Sb(),p.Tb(162,"table"),p.Tb(163,"thead"),p.Tb(164,"tr"),p.Tb(165,"th"),p.Bc(166,"Variable"),p.Sb(),p.Tb(167,"th"),p.Bc(168,"Description"),p.Sb(),p.Tb(169,"th"),p.Bc(170,"Type"),p.Sb(),p.Sb(),p.Sb(),p.Tb(171,"tbody"),p.Tb(172,"tr"),p.Tb(173,"td"),p.Tb(174,"code"),p.Bc(175,"$implicit"),p.Sb(),p.Sb(),p.Tb(176,"td"),p.Bc(177,"Whether icon should be active or not."),p.Sb(),p.Tb(178,"td"),p.Bc(179,"boolean"),p.Sb(),p.Sb(),p.Tb(180,"tr"),p.Tb(181,"td"),p.Tb(182,"code"),p.Bc(183,"index"),p.Sb(),p.Sb(),p.Tb(184,"td"),p.Bc(185,"Icon index."),p.Sb(),p.Tb(186,"td"),p.Bc(187,"number"),p.Sb(),p.Sb(),p.Tb(188,"tr"),p.Tb(189,"td"),p.Tb(190,"code"),p.Bc(191,"fill"),p.Sb(),p.Sb(),p.Tb(192,"td"),p.Bc(193,"Fill percentage. An integer value between 0 and 100."),p.Sb(),p.Tb(194,"td"),p.Bc(195,"number"),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Tb(196,"h3"),p.Bc(197,"NGL_RATING_CONFIG<NglRatingConfig>"),p.Sb(),p.Tb(198,"p"),p.Bc(199,"Injection token that can be used to specify default rating options."),p.Sb(),p.Tb(200,"p"),p.Bc(201,"Available properties: "),p.Tb(202,"code"),p.Bc(203,"colorOn"),p.Sb(),p.Bc(204,", "),p.Tb(205,"code"),p.Bc(206,"colorOff"),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb()),2&b){const b=p.rc(35),c=p.rc(37),n=p.rc(45),a=p.rc(47);p.Bb(39),p.mc("ts",c)("markup",b),p.Bb(10),p.mc("ts",a)("markup",n)}},directives:[l,r.a,d],encapsulation:2}),b})()}];let v=(()=>{class b{}return b.\u0275mod=p.Kb({type:b}),b.\u0275inj=p.Jb({factory:function(c){return new(c||b)},imports:[[a.c,s.c.forChild(C),B.E,B.g,B.k,t.a]]}),b})()}}]);