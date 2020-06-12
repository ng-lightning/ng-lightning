function _classCallCheck(b,n){if(!(b instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{D2Ny:function(b,n,c){"use strict";c.r(n),c.d(n,"NglDemoInputModule",(function(){return C}));var a=c("ofXK"),s=c("3Pt+"),e=c("tyNb"),p=c("vc5p"),B=c("dH7C"),T=c("fXoL"),l=c("Ec5N"),S=c("Ub2j"),t=c("Rb9z"),r=c("XC9z");function d(b,n){1&b&&(T.Tb(0,"i"),T.Bc(1,"Template Label"),T.Sb())}var i,o=((i=function b(){_classCallCheck(this,b),this.required=!0,this.hasError=!1,this.error="The input has an error!",this.disabled=!1}).\u0275fac=function(b){return new(b||i)},i.\u0275cmp=T.Gb({type:i,selectors:[["app-demo-input-basic"]],decls:19,vars:10,consts:[[1,"slds-grid","slds-grid_pull-padded","slds-grid_vertical-align-center","slds-m-top_large"],[1,"slds-col_padded"],["label","Required"],["ngl","","type","checkbox",3,"ngModel","ngModelChange"],["label","Error"],["label","Disabled"],["label","Input Label","fieldLevelHelpTooltip","Some helpful information",3,"error"],["ngl","","type","input","placeholder","Placeholder Text",3,"required","disabled"],["customInput",""],[3,"label","error"],["ngl","","type","input","value","Lorem Ipsum",3,"required","disabled"]],template:function(b,n){if(1&b&&(T.Tb(0,"div",0),T.Tb(1,"div",1),T.Tb(2,"ngl-checkbox",2),T.Tb(3,"input",3),T.cc("ngModelChange",(function(b){return n.required=b})),T.Sb(),T.Sb(),T.Sb(),T.Tb(4,"div",1),T.Tb(5,"ngl-checkbox",4),T.Tb(6,"input",3),T.cc("ngModelChange",(function(b){return n.hasError=b})),T.Sb(),T.Sb(),T.Sb(),T.Tb(7,"div",1),T.Tb(8,"ngl-checkbox",5),T.Tb(9,"input",3),T.cc("ngModelChange",(function(b){return n.disabled=b})),T.Sb(),T.Sb(),T.Sb(),T.Sb(),T.Tb(10,"div",0),T.Tb(11,"div",1),T.Tb(12,"ngl-input",6),T.Ob(13,"input",7),T.Sb(),T.Sb(),T.Tb(14,"div",1),T.zc(15,d,2,0,"ng-template",null,8,T.Ac),T.Tb(17,"ngl-input",9),T.Ob(18,"input",10),T.Sb(),T.Sb(),T.Sb()),2&b){var c=T.rc(16);T.Bb(3),T.mc("ngModel",n.required),T.Bb(3),T.mc("ngModel",n.hasError),T.Bb(3),T.mc("ngModel",n.disabled),T.Bb(3),T.mc("error",n.hasError?n.error:null),T.Bb(1),T.mc("required",n.required)("disabled",n.disabled),T.Bb(4),T.mc("label",c)("error",n.hasError?n.error:null),T.Bb(1),T.mc("required",n.required)("disabled",n.disabled)}},directives:[l.a,S.a,s.a,s.l,s.o,t.a,r.a],encapsulation:2}),i),u=c("M6rV");function g(b,n){if(1&b){T.Bc(0,"\n      "),T.Tb(1,"pre",19),T.Nb(),T.Tb(2,"code"),T.Tb(3,"span",20),T.Tb(4,"span",20),T.Tb(5,"span",21),T.Bc(6,"<"),T.Sb(),T.Bc(7,"div"),T.Sb(),T.Bc(8," "),T.Tb(9,"span",22),T.Bc(10,"class"),T.Sb(),T.Tb(11,"span",23),T.Tb(12,"span",21),T.Bc(13,"="),T.Sb(),T.Tb(14,"span",21),T.Bc(15,'"'),T.Sb(),T.Bc(16,"slds-grid slds-grid_pull-padded slds-grid_vertical-align-center slds-m-top_large"),T.Tb(17,"span",21),T.Bc(18,'"'),T.Sb(),T.Sb(),T.Tb(19,"span",21),T.Bc(20,">"),T.Sb(),T.Sb(),T.Bc(21,"\n  "),T.Tb(22,"span",20),T.Tb(23,"span",20),T.Tb(24,"span",21),T.Bc(25,"<"),T.Sb(),T.Bc(26,"div"),T.Sb(),T.Bc(27," "),T.Tb(28,"span",22),T.Bc(29,"class"),T.Sb(),T.Tb(30,"span",23),T.Tb(31,"span",21),T.Bc(32,"="),T.Sb(),T.Tb(33,"span",21),T.Bc(34,'"'),T.Sb(),T.Bc(35,"slds-col_padded"),T.Tb(36,"span",21),T.Bc(37,'"'),T.Sb(),T.Sb(),T.Tb(38,"span",21),T.Bc(39,">"),T.Sb(),T.Sb(),T.Bc(40,"\n    "),T.Tb(41,"span",20),T.Tb(42,"span",20),T.Tb(43,"span",21),T.Bc(44,"<"),T.Sb(),T.Bc(45,"ngl-checkbox"),T.Sb(),T.Bc(46," "),T.Tb(47,"span",22),T.Bc(48,"label"),T.Sb(),T.Tb(49,"span",23),T.Tb(50,"span",21),T.Bc(51,"="),T.Sb(),T.Tb(52,"span",21),T.Bc(53,'"'),T.Sb(),T.Bc(54,"Required"),T.Tb(55,"span",21),T.Bc(56,'"'),T.Sb(),T.Sb(),T.Tb(57,"span",21),T.Bc(58,">"),T.Sb(),T.Sb(),T.Bc(59,"\n      "),T.Tb(60,"span",20),T.Tb(61,"span",20),T.Tb(62,"span",21),T.Bc(63,"<"),T.Sb(),T.Bc(64,"input"),T.Sb(),T.Bc(65," "),T.Tb(66,"span",22),T.Bc(67,"ngl"),T.Sb(),T.Bc(68," "),T.Tb(69,"span",22),T.Bc(70,"type"),T.Sb(),T.Tb(71,"span",23),T.Tb(72,"span",21),T.Bc(73,"="),T.Sb(),T.Tb(74,"span",21),T.Bc(75,'"'),T.Sb(),T.Bc(76,"checkbox"),T.Tb(77,"span",21),T.Bc(78,'"'),T.Sb(),T.Sb(),T.Bc(79," "),T.Tb(80,"span",22),T.Bc(81,"[(ngModel)]"),T.Sb(),T.Tb(82,"span",23),T.Tb(83,"span",21),T.Bc(84,"="),T.Sb(),T.Tb(85,"span",21),T.Bc(86,'"'),T.Sb(),T.Bc(87,"required"),T.Tb(88,"span",21),T.Bc(89,'"'),T.Sb(),T.Sb(),T.Tb(90,"span",21),T.Bc(91,">"),T.Sb(),T.Sb(),T.Bc(92,"\n    "),T.Tb(93,"span",20),T.Tb(94,"span",20),T.Tb(95,"span",21),T.Bc(96,"</"),T.Sb(),T.Bc(97,"ngl-checkbox"),T.Sb(),T.Tb(98,"span",21),T.Bc(99,">"),T.Sb(),T.Sb(),T.Bc(100,"\n  "),T.Tb(101,"span",20),T.Tb(102,"span",20),T.Tb(103,"span",21),T.Bc(104,"</"),T.Sb(),T.Bc(105,"div"),T.Sb(),T.Tb(106,"span",21),T.Bc(107,">"),T.Sb(),T.Sb(),T.Bc(108,"\n  "),T.Tb(109,"span",20),T.Tb(110,"span",20),T.Tb(111,"span",21),T.Bc(112,"<"),T.Sb(),T.Bc(113,"div"),T.Sb(),T.Bc(114," "),T.Tb(115,"span",22),T.Bc(116,"class"),T.Sb(),T.Tb(117,"span",23),T.Tb(118,"span",21),T.Bc(119,"="),T.Sb(),T.Tb(120,"span",21),T.Bc(121,'"'),T.Sb(),T.Bc(122,"slds-col_padded"),T.Tb(123,"span",21),T.Bc(124,'"'),T.Sb(),T.Sb(),T.Tb(125,"span",21),T.Bc(126,">"),T.Sb(),T.Sb(),T.Bc(127,"\n    "),T.Tb(128,"span",20),T.Tb(129,"span",20),T.Tb(130,"span",21),T.Bc(131,"<"),T.Sb(),T.Bc(132,"ngl-checkbox"),T.Sb(),T.Bc(133," "),T.Tb(134,"span",22),T.Bc(135,"label"),T.Sb(),T.Tb(136,"span",23),T.Tb(137,"span",21),T.Bc(138,"="),T.Sb(),T.Tb(139,"span",21),T.Bc(140,'"'),T.Sb(),T.Bc(141,"Error"),T.Tb(142,"span",21),T.Bc(143,'"'),T.Sb(),T.Sb(),T.Tb(144,"span",21),T.Bc(145,">"),T.Sb(),T.Sb(),T.Bc(146,"\n      "),T.Tb(147,"span",20),T.Tb(148,"span",20),T.Tb(149,"span",21),T.Bc(150,"<"),T.Sb(),T.Bc(151,"input"),T.Sb(),T.Bc(152," "),T.Tb(153,"span",22),T.Bc(154,"ngl"),T.Sb(),T.Bc(155," "),T.Tb(156,"span",22),T.Bc(157,"type"),T.Sb(),T.Tb(158,"span",23),T.Tb(159,"span",21),T.Bc(160,"="),T.Sb(),T.Tb(161,"span",21),T.Bc(162,'"'),T.Sb(),T.Bc(163,"checkbox"),T.Tb(164,"span",21),T.Bc(165,'"'),T.Sb(),T.Sb(),T.Bc(166," "),T.Tb(167,"span",22),T.Bc(168,"[(ngModel)]"),T.Sb(),T.Tb(169,"span",23),T.Tb(170,"span",21),T.Bc(171,"="),T.Sb(),T.Tb(172,"span",21),T.Bc(173,'"'),T.Sb(),T.Bc(174,"hasError"),T.Tb(175,"span",21),T.Bc(176,'"'),T.Sb(),T.Sb(),T.Tb(177,"span",21),T.Bc(178,">"),T.Sb(),T.Sb(),T.Bc(179,"\n    "),T.Tb(180,"span",20),T.Tb(181,"span",20),T.Tb(182,"span",21),T.Bc(183,"</"),T.Sb(),T.Bc(184,"ngl-checkbox"),T.Sb(),T.Tb(185,"span",21),T.Bc(186,">"),T.Sb(),T.Sb(),T.Bc(187,"\n  "),T.Tb(188,"span",20),T.Tb(189,"span",20),T.Tb(190,"span",21),T.Bc(191,"</"),T.Sb(),T.Bc(192,"div"),T.Sb(),T.Tb(193,"span",21),T.Bc(194,">"),T.Sb(),T.Sb(),T.Bc(195,"\n  "),T.Tb(196,"span",20),T.Tb(197,"span",20),T.Tb(198,"span",21),T.Bc(199,"<"),T.Sb(),T.Bc(200,"div"),T.Sb(),T.Bc(201," "),T.Tb(202,"span",22),T.Bc(203,"class"),T.Sb(),T.Tb(204,"span",23),T.Tb(205,"span",21),T.Bc(206,"="),T.Sb(),T.Tb(207,"span",21),T.Bc(208,'"'),T.Sb(),T.Bc(209,"slds-col_padded"),T.Tb(210,"span",21),T.Bc(211,'"'),T.Sb(),T.Sb(),T.Tb(212,"span",21),T.Bc(213,">"),T.Sb(),T.Sb(),T.Bc(214,"\n    "),T.Tb(215,"span",20),T.Tb(216,"span",20),T.Tb(217,"span",21),T.Bc(218,"<"),T.Sb(),T.Bc(219,"ngl-checkbox"),T.Sb(),T.Bc(220," "),T.Tb(221,"span",22),T.Bc(222,"label"),T.Sb(),T.Tb(223,"span",23),T.Tb(224,"span",21),T.Bc(225,"="),T.Sb(),T.Tb(226,"span",21),T.Bc(227,'"'),T.Sb(),T.Bc(228,"Disabled"),T.Tb(229,"span",21),T.Bc(230,'"'),T.Sb(),T.Sb(),T.Tb(231,"span",21),T.Bc(232,">"),T.Sb(),T.Sb(),T.Bc(233,"\n      "),T.Tb(234,"span",20),T.Tb(235,"span",20),T.Tb(236,"span",21),T.Bc(237,"<"),T.Sb(),T.Bc(238,"input"),T.Sb(),T.Bc(239," "),T.Tb(240,"span",22),T.Bc(241,"ngl"),T.Sb(),T.Bc(242," "),T.Tb(243,"span",22),T.Bc(244,"type"),T.Sb(),T.Tb(245,"span",23),T.Tb(246,"span",21),T.Bc(247,"="),T.Sb(),T.Tb(248,"span",21),T.Bc(249,'"'),T.Sb(),T.Bc(250,"checkbox"),T.Tb(251,"span",21),T.Bc(252,'"'),T.Sb(),T.Sb(),T.Bc(253," "),T.Tb(254,"span",22),T.Bc(255,"[(ngModel)]"),T.Sb(),T.Tb(256,"span",23),T.Tb(257,"span",21),T.Bc(258,"="),T.Sb(),T.Tb(259,"span",21),T.Bc(260,'"'),T.Sb(),T.Bc(261,"disabled"),T.Tb(262,"span",21),T.Bc(263,'"'),T.Sb(),T.Sb(),T.Tb(264,"span",21),T.Bc(265,">"),T.Sb(),T.Sb(),T.Bc(266,"\n    "),T.Tb(267,"span",20),T.Tb(268,"span",20),T.Tb(269,"span",21),T.Bc(270,"</"),T.Sb(),T.Bc(271,"ngl-checkbox"),T.Sb(),T.Tb(272,"span",21),T.Bc(273,">"),T.Sb(),T.Sb(),T.Bc(274,"\n  "),T.Tb(275,"span",20),T.Tb(276,"span",20),T.Tb(277,"span",21),T.Bc(278,"</"),T.Sb(),T.Bc(279,"div"),T.Sb(),T.Tb(280,"span",21),T.Bc(281,">"),T.Sb(),T.Sb(),T.Bc(282,"\n"),T.Tb(283,"span",20),T.Tb(284,"span",20),T.Tb(285,"span",21),T.Bc(286,"</"),T.Sb(),T.Bc(287,"div"),T.Sb(),T.Tb(288,"span",21),T.Bc(289,">"),T.Sb(),T.Sb(),T.Bc(290,"\n"),T.Tb(291,"span",20),T.Tb(292,"span",20),T.Tb(293,"span",21),T.Bc(294,"<"),T.Sb(),T.Bc(295,"div"),T.Sb(),T.Bc(296," "),T.Tb(297,"span",22),T.Bc(298,"class"),T.Sb(),T.Tb(299,"span",23),T.Tb(300,"span",21),T.Bc(301,"="),T.Sb(),T.Tb(302,"span",21),T.Bc(303,'"'),T.Sb(),T.Bc(304,"slds-grid slds-grid_pull-padded slds-grid_vertical-align-center slds-m-top_large"),T.Tb(305,"span",21),T.Bc(306,'"'),T.Sb(),T.Sb(),T.Tb(307,"span",21),T.Bc(308,">"),T.Sb(),T.Sb(),T.Bc(309,"\n  "),T.Tb(310,"span",20),T.Tb(311,"span",20),T.Tb(312,"span",21),T.Bc(313,"<"),T.Sb(),T.Bc(314,"div"),T.Sb(),T.Bc(315," "),T.Tb(316,"span",22),T.Bc(317,"class"),T.Sb(),T.Tb(318,"span",23),T.Tb(319,"span",21),T.Bc(320,"="),T.Sb(),T.Tb(321,"span",21),T.Bc(322,'"'),T.Sb(),T.Bc(323,"slds-col_padded"),T.Tb(324,"span",21),T.Bc(325,'"'),T.Sb(),T.Sb(),T.Tb(326,"span",21),T.Bc(327,">"),T.Sb(),T.Sb(),T.Bc(328,"\n    "),T.Tb(329,"span",20),T.Tb(330,"span",20),T.Tb(331,"span",21),T.Bc(332,"<"),T.Sb(),T.Bc(333,"ngl-input"),T.Sb(),T.Bc(334," "),T.Tb(335,"span",22),T.Bc(336,"label"),T.Sb(),T.Tb(337,"span",23),T.Tb(338,"span",21),T.Bc(339,"="),T.Sb(),T.Tb(340,"span",21),T.Bc(341,'"'),T.Sb(),T.Bc(342,"Input Label"),T.Tb(343,"span",21),T.Bc(344,'"'),T.Sb(),T.Sb(),T.Bc(345," "),T.Tb(346,"span",22),T.Bc(347,"fieldLevelHelpTooltip"),T.Sb(),T.Tb(348,"span",23),T.Tb(349,"span",21),T.Bc(350,"="),T.Sb(),T.Tb(351,"span",21),T.Bc(352,'"'),T.Sb(),T.Bc(353,"Some helpful information"),T.Tb(354,"span",21),T.Bc(355,'"'),T.Sb(),T.Sb(),T.Bc(356," "),T.Tb(357,"span",22),T.Bc(358,"[error]"),T.Sb(),T.Tb(359,"span",23),T.Tb(360,"span",21),T.Bc(361,"="),T.Sb(),T.Tb(362,"span",21),T.Bc(363,'"'),T.Sb(),T.Bc(364,"hasError ? error : null"),T.Tb(365,"span",21),T.Bc(366,'"'),T.Sb(),T.Sb(),T.Tb(367,"span",21),T.Bc(368,">"),T.Sb(),T.Sb(),T.Bc(369,"\n      "),T.Tb(370,"span",20),T.Tb(371,"span",20),T.Tb(372,"span",21),T.Bc(373,"<"),T.Sb(),T.Bc(374,"input"),T.Sb(),T.Bc(375," "),T.Tb(376,"span",22),T.Bc(377,"ngl"),T.Sb(),T.Bc(378," "),T.Tb(379,"span",22),T.Bc(380,"type"),T.Sb(),T.Tb(381,"span",23),T.Tb(382,"span",21),T.Bc(383,"="),T.Sb(),T.Tb(384,"span",21),T.Bc(385,'"'),T.Sb(),T.Bc(386,"input"),T.Tb(387,"span",21),T.Bc(388,'"'),T.Sb(),T.Sb(),T.Bc(389," "),T.Tb(390,"span",22),T.Bc(391,"[required]"),T.Sb(),T.Tb(392,"span",23),T.Tb(393,"span",21),T.Bc(394,"="),T.Sb(),T.Tb(395,"span",21),T.Bc(396,'"'),T.Sb(),T.Bc(397,"required"),T.Tb(398,"span",21),T.Bc(399,'"'),T.Sb(),T.Sb(),T.Bc(400," "),T.Tb(401,"span",22),T.Bc(402,"[disabled]"),T.Sb(),T.Tb(403,"span",23),T.Tb(404,"span",21),T.Bc(405,"="),T.Sb(),T.Tb(406,"span",21),T.Bc(407,'"'),T.Sb(),T.Bc(408,"disabled"),T.Tb(409,"span",21),T.Bc(410,'"'),T.Sb(),T.Sb(),T.Bc(411," "),T.Tb(412,"span",22),T.Bc(413,"placeholder"),T.Sb(),T.Tb(414,"span",23),T.Tb(415,"span",21),T.Bc(416,"="),T.Sb(),T.Tb(417,"span",21),T.Bc(418,'"'),T.Sb(),T.Bc(419,"Placeholder Text"),T.Tb(420,"span",21),T.Bc(421,'"'),T.Sb(),T.Sb(),T.Tb(422,"span",21),T.Bc(423,">"),T.Sb(),T.Sb(),T.Bc(424,"\n    "),T.Tb(425,"span",20),T.Tb(426,"span",20),T.Tb(427,"span",21),T.Bc(428,"</"),T.Sb(),T.Bc(429,"ngl-input"),T.Sb(),T.Tb(430,"span",21),T.Bc(431,">"),T.Sb(),T.Sb(),T.Bc(432,"\n  "),T.Tb(433,"span",20),T.Tb(434,"span",20),T.Tb(435,"span",21),T.Bc(436,"</"),T.Sb(),T.Bc(437,"div"),T.Sb(),T.Tb(438,"span",21),T.Bc(439,">"),T.Sb(),T.Sb(),T.Bc(440,"\n  "),T.Tb(441,"span",20),T.Tb(442,"span",20),T.Tb(443,"span",21),T.Bc(444,"<"),T.Sb(),T.Bc(445,"div"),T.Sb(),T.Bc(446," "),T.Tb(447,"span",22),T.Bc(448,"class"),T.Sb(),T.Tb(449,"span",23),T.Tb(450,"span",21),T.Bc(451,"="),T.Sb(),T.Tb(452,"span",21),T.Bc(453,'"'),T.Sb(),T.Bc(454,"slds-col_padded"),T.Tb(455,"span",21),T.Bc(456,'"'),T.Sb(),T.Sb(),T.Tb(457,"span",21),T.Bc(458,">"),T.Sb(),T.Sb(),T.Bc(459,"\n    "),T.Tb(460,"span",20),T.Tb(461,"span",20),T.Tb(462,"span",21),T.Bc(463,"<"),T.Sb(),T.Bc(464,"ng-template"),T.Sb(),T.Bc(465," "),T.Tb(466,"span",22),T.Bc(467,"#customInput"),T.Sb(),T.Tb(468,"span",21),T.Bc(469,">"),T.Sb(),T.Sb(),T.Tb(470,"span",20),T.Tb(471,"span",20),T.Tb(472,"span",21),T.Bc(473,"<"),T.Sb(),T.Bc(474,"i"),T.Sb(),T.Tb(475,"span",21),T.Bc(476,">"),T.Sb(),T.Sb(),T.Bc(477,"Template Label"),T.Tb(478,"span",20),T.Tb(479,"span",20),T.Tb(480,"span",21),T.Bc(481,"</"),T.Sb(),T.Bc(482,"i"),T.Sb(),T.Tb(483,"span",21),T.Bc(484,">"),T.Sb(),T.Sb(),T.Tb(485,"span",20),T.Tb(486,"span",20),T.Tb(487,"span",21),T.Bc(488,"</"),T.Sb(),T.Bc(489,"ng-template"),T.Sb(),T.Tb(490,"span",21),T.Bc(491,">"),T.Sb(),T.Sb(),T.Bc(492,"\n    "),T.Tb(493,"span",20),T.Tb(494,"span",20),T.Tb(495,"span",21),T.Bc(496,"<"),T.Sb(),T.Bc(497,"ngl-input"),T.Sb(),T.Bc(498," "),T.Tb(499,"span",22),T.Bc(500,"[label]"),T.Sb(),T.Tb(501,"span",23),T.Tb(502,"span",21),T.Bc(503,"="),T.Sb(),T.Tb(504,"span",21),T.Bc(505,'"'),T.Sb(),T.Bc(506,"customInput"),T.Tb(507,"span",21),T.Bc(508,'"'),T.Sb(),T.Sb(),T.Bc(509," "),T.Tb(510,"span",22),T.Bc(511,"[error]"),T.Sb(),T.Tb(512,"span",23),T.Tb(513,"span",21),T.Bc(514,"="),T.Sb(),T.Tb(515,"span",21),T.Bc(516,'"'),T.Sb(),T.Bc(517,"hasError ? error : null"),T.Tb(518,"span",21),T.Bc(519,'"'),T.Sb(),T.Sb(),T.Tb(520,"span",21),T.Bc(521,">"),T.Sb(),T.Sb(),T.Bc(522,"\n      "),T.Tb(523,"span",20),T.Tb(524,"span",20),T.Tb(525,"span",21),T.Bc(526,"<"),T.Sb(),T.Bc(527,"input"),T.Sb(),T.Bc(528," "),T.Tb(529,"span",22),T.Bc(530,"ngl"),T.Sb(),T.Bc(531," "),T.Tb(532,"span",22),T.Bc(533,"type"),T.Sb(),T.Tb(534,"span",23),T.Tb(535,"span",21),T.Bc(536,"="),T.Sb(),T.Tb(537,"span",21),T.Bc(538,'"'),T.Sb(),T.Bc(539,"input"),T.Tb(540,"span",21),T.Bc(541,'"'),T.Sb(),T.Sb(),T.Bc(542," "),T.Tb(543,"span",22),T.Bc(544,"[required]");T.Sb(),T.Tb(545,"span",23),T.Tb(546,"span",21),T.Bc(547,"="),T.Sb(),T.Tb(548,"span",21),T.Bc(549,'"'),T.Sb(),T.Bc(550,"required"),T.Tb(551,"span",21),T.Bc(552,'"'),T.Sb(),T.Sb(),T.Bc(553," "),T.Tb(554,"span",22),T.Bc(555,"[disabled]"),T.Sb(),T.Tb(556,"span",23),T.Tb(557,"span",21),T.Bc(558,"="),T.Sb(),T.Tb(559,"span",21),T.Bc(560,'"'),T.Sb(),T.Bc(561,"disabled"),T.Tb(562,"span",21),T.Bc(563,'"'),T.Sb(),T.Sb(),T.Bc(564," "),T.Tb(565,"span",22),T.Bc(566,"value"),T.Sb(),T.Tb(567,"span",23),T.Tb(568,"span",21),T.Bc(569,"="),T.Sb(),T.Tb(570,"span",21),T.Bc(571,'"'),T.Sb(),T.Bc(572,"Lorem Ipsum"),T.Tb(573,"span",21),T.Bc(574,'"'),T.Sb(),T.Sb(),T.Tb(575,"span",21),T.Bc(576,">"),T.Sb(),T.Sb(),T.Bc(577,"\n    "),T.Tb(578,"span",20),T.Tb(579,"span",20),T.Tb(580,"span",21),T.Bc(581,"</"),T.Sb(),T.Bc(582,"ngl-input"),T.Sb(),T.Tb(583,"span",21),T.Bc(584,">"),T.Sb(),T.Sb(),T.Bc(585,"\n  "),T.Tb(586,"span",20),T.Tb(587,"span",20),T.Tb(588,"span",21),T.Bc(589,"</"),T.Sb(),T.Bc(590,"div"),T.Sb(),T.Tb(591,"span",21),T.Bc(592,">"),T.Sb(),T.Sb(),T.Bc(593,"\n"),T.Tb(594,"span",20),T.Tb(595,"span",20),T.Tb(596,"span",21),T.Bc(597,"</"),T.Sb(),T.Bc(598,"div"),T.Sb(),T.Tb(599,"span",21),T.Bc(600,">"),T.Sb(),T.Sb(),T.Sb(),T.Ub(),T.Sb(),T.Bc(601,"\n    ")}}function m(b,n){1&b&&(T.Bc(0,"\n      "),T.Tb(1,"pre",24),T.Tb(2,"code"),T.Tb(3,"span",25),T.Bc(4,"import"),T.Sb(),T.Bc(5," "),T.Tb(6,"span",21),T.Bc(7),T.Sb(),T.Bc(8," Component "),T.Tb(9,"span",21),T.Bc(10),T.Sb(),T.Bc(11," "),T.Tb(12,"span",25),T.Bc(13,"from"),T.Sb(),T.Bc(14," "),T.Tb(15,"span",26),T.Bc(16,"'@angular/core'"),T.Sb(),T.Tb(17,"span",21),T.Bc(18,";"),T.Sb(),T.Bc(19,"\n\n@"),T.Tb(20,"span",27),T.Bc(21,"Component"),T.Sb(),T.Tb(22,"span",21),T.Bc(23,"("),T.Sb(),T.Tb(24,"span",21),T.Bc(25),T.Sb(),T.Bc(26,"\n  selector"),T.Tb(27,"span",21),T.Bc(28,":"),T.Sb(),T.Bc(29," "),T.Tb(30,"span",26),T.Bc(31,"'app-demo-input-basic'"),T.Sb(),T.Tb(32,"span",21),T.Bc(33,","),T.Sb(),T.Bc(34,"\n  templateUrl"),T.Tb(35,"span",21),T.Bc(36,":"),T.Sb(),T.Bc(37," "),T.Tb(38,"span",26),T.Bc(39,"'./basic.html'"),T.Sb(),T.Tb(40,"span",21),T.Bc(41,","),T.Sb(),T.Bc(42,"\n"),T.Tb(43,"span",21),T.Bc(44),T.Sb(),T.Tb(45,"span",21),T.Bc(46,")"),T.Sb(),T.Bc(47,"\n"),T.Tb(48,"span",25),T.Bc(49,"export"),T.Sb(),T.Bc(50," "),T.Tb(51,"span",25),T.Bc(52,"class"),T.Sb(),T.Bc(53," "),T.Tb(54,"span",28),T.Bc(55,"DemoInputBasic"),T.Sb(),T.Bc(56," "),T.Tb(57,"span",21),T.Bc(58),T.Sb(),T.Bc(59,"\n  required "),T.Tb(60,"span",29),T.Bc(61,"="),T.Sb(),T.Bc(62," "),T.Tb(63,"span",30),T.Bc(64,"true"),T.Sb(),T.Tb(65,"span",21),T.Bc(66,";"),T.Sb(),T.Bc(67,"\n\n  hasError "),T.Tb(68,"span",29),T.Bc(69,"="),T.Sb(),T.Bc(70," "),T.Tb(71,"span",30),T.Bc(72,"false"),T.Sb(),T.Tb(73,"span",21),T.Bc(74,";"),T.Sb(),T.Bc(75,"\n  error "),T.Tb(76,"span",29),T.Bc(77,"="),T.Sb(),T.Bc(78," "),T.Tb(79,"span",26),T.Bc(80,"'The input has an error!'"),T.Sb(),T.Tb(81,"span",21),T.Bc(82,";"),T.Sb(),T.Bc(83,"\n\n  disabled "),T.Tb(84,"span",29),T.Bc(85,"="),T.Sb(),T.Bc(86," "),T.Tb(87,"span",30),T.Bc(88,"false"),T.Sb(),T.Tb(89,"span",21),T.Bc(90,";"),T.Sb(),T.Bc(91,"\n"),T.Tb(92,"span",21),T.Bc(93),T.Sb(),T.Bc(94,"\n"),T.Sb(),T.Sb(),T.Bc(95,"\n    ")),2&b&&(T.Bb(7),T.Cc("{"),T.Bb(3),T.Cc("}"),T.Bb(15),T.Cc("{"),T.Bb(19),T.Cc("}"),T.Bb(14),T.Cc("{"),T.Bb(35),T.Cc("}"))}var h,v,f=[{path:"",component:(h=function b(){_classCallCheck(this,b)},h.\u0275fac=function(b){return new(b||h)},h.\u0275cmp=T.Gb({type:h,selectors:[["app-demo-input"]],decls:123,vars:2,consts:[[1,"component__header","slds-border_bottom","slds-grid","slds-wrap","slds-m-bottom_medium"],[1,"slds-has-flexi-truncate","slds-align-middle"],[2,"text-transform","capitalize"],[1,"slds-align-middle","slds-text-body_small"],["href","https://www.lightningdesignsystem.com/components/input","title","External link to Salesforce Lightning Design System Site","target","_blank",1,"slds-button","slds-button_neutral"],["href","https://github.com/ng-lightning/ng-lightning/tree/master/projects/ng-lightning/src/lib/input","target","_blank",1,"slds-button","slds-button_neutral"],[1,"slds-grid","slds-grid_vertical-align-center"],["src","assets/images/github.svg",2,"height","15px","width","15px","margin-right","0.5rem"],[1,"slds-m-vertical_medium","readme"],[1,"slds-m-vertical_medium"],[1,"callout"],[1,"slds-box","slds-is-relative","slds-theme_default","slds-m-bottom_large",2,"padding-top","1.5rem"],[1,"example__header","slds-text-heading_small"],["markupbasic",""],["tsbasic",""],[1,"slds-is-relative","slds-m-top_large",2,"min-height","25px"],["dir","input","file","basic","tsRaw","import%20%7B%20Component%20%7D%20from%20'%40angular%2Fcore'%3B%0A%0A%40Component(%7B%0A%20%20selector%3A%20'app-demo-input-basic'%2C%0A%20%20templateUrl%3A%20'.%2Fbasic.html'%2C%0A%7D)%0Aexport%20class%20DemoInputBasic%20%7B%0A%20%20required%20%3D%20true%3B%0A%0A%20%20hasError%20%3D%20false%3B%0A%20%20error%20%3D%20'The%20input%20has%20an%20error!'%3B%0A%0A%20%20disabled%20%3D%20false%3B%0A%7D%0A","markupRaw","%0A%3Cdiv%20class%3D%22slds-grid%20slds-grid_pull-padded%20slds-grid_vertical-align-center%20slds-m-top_large%22%3E%0A%20%20%3Cdiv%20class%3D%22slds-col_padded%22%3E%0A%20%20%20%20%3Cngl-checkbox%20label%3D%22Required%22%3E%0A%20%20%20%20%20%20%3Cinput%20ngl%20type%3D%22checkbox%22%20%5B(ngModel)%5D%3D%22required%22%3E%0A%20%20%20%20%3C%2Fngl-checkbox%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22slds-col_padded%22%3E%0A%20%20%20%20%3Cngl-checkbox%20label%3D%22Error%22%3E%0A%20%20%20%20%20%20%3Cinput%20ngl%20type%3D%22checkbox%22%20%5B(ngModel)%5D%3D%22hasError%22%3E%0A%20%20%20%20%3C%2Fngl-checkbox%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22slds-col_padded%22%3E%0A%20%20%20%20%3Cngl-checkbox%20label%3D%22Disabled%22%3E%0A%20%20%20%20%20%20%3Cinput%20ngl%20type%3D%22checkbox%22%20%5B(ngModel)%5D%3D%22disabled%22%3E%0A%20%20%20%20%3C%2Fngl-checkbox%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A%3Cdiv%20class%3D%22slds-grid%20slds-grid_pull-padded%20slds-grid_vertical-align-center%20slds-m-top_large%22%3E%0A%20%20%3Cdiv%20class%3D%22slds-col_padded%22%3E%0A%20%20%20%20%3Cngl-input%20label%3D%22Input%20Label%22%20fieldLevelHelpTooltip%3D%22Some%20helpful%20information%22%20%5Berror%5D%3D%22hasError%20%3F%20error%20%3A%20null%22%3E%0A%20%20%20%20%20%20%3Cinput%20ngl%20type%3D%22input%22%20%5Brequired%5D%3D%22required%22%20%5Bdisabled%5D%3D%22disabled%22%20placeholder%3D%22Placeholder%20Text%22%3E%0A%20%20%20%20%3C%2Fngl-input%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22slds-col_padded%22%3E%0A%20%20%20%20%3Cng-template%20%23customInput%3E%3Ci%3ETemplate%20Label%3C%2Fi%3E%3C%2Fng-template%3E%0A%20%20%20%20%3Cngl-input%20%5Blabel%5D%3D%22customInput%22%20%5Berror%5D%3D%22hasError%20%3F%20error%20%3A%20null%22%3E%0A%20%20%20%20%20%20%3Cinput%20ngl%20type%3D%22input%22%20%5Brequired%5D%3D%22required%22%20%5Bdisabled%5D%3D%22disabled%22%20value%3D%22Lorem%20Ipsum%22%3E%0A%20%20%20%20%3C%2Fngl-input%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E",3,"ts","markup"],[1,"slds-box","slds-theme_default"],[1,"api"],[1,"language-markup"],[1,"token","tag"],[1,"token","punctuation"],[1,"token","attr-name"],[1,"token","attr-value"],[1,"language-typescript"],[1,"token","keyword"],[1,"token","string"],[1,"token","function"],[1,"token","class-name"],[1,"token","operator"],[1,"token","boolean"]],template:function(b,n){if(1&b&&(T.Tb(0,"header",0),T.Tb(1,"div",1),T.Tb(2,"h1",2),T.Bc(3," input "),T.Sb(),T.Sb(),T.Tb(4,"div",3),T.Tb(5,"a",4),T.Bc(6,"Lightning"),T.Sb(),T.Tb(7,"a",5),T.Tb(8,"div",6),T.Ob(9,"img",7),T.Bc(10,"Source"),T.Sb(),T.Sb(),T.Sb(),T.Sb(),T.Tb(11,"div",8),T.Tb(12,"p"),T.Bc(13,"Text inputs are used for freeform data entry."),T.Sb(),T.Tb(14,"p"),T.Bc(15,"We don't intend to re-create all the native HTML input elements, but we intend to take all the tedious work away from you and at the same time making sure that your native elements have all the appropriate styles and are fully accessible. So you are responsible to for writing the with the "),T.Tb(16,"code"),T.Bc(17,"ngl"),T.Sb(),T.Bc(18," attribute like this "),T.Tb(19,"code"),T.Bc(20,'<input ngl type="input">'),T.Sb(),T.Bc(21," and hook it to "),T.Tb(22,"code"),T.Bc(23,"ngModel"),T.Sb(),T.Bc(24,", "),T.Tb(25,"code"),T.Bc(26,"formControl"),T.Sb(),T.Bc(27,", "),T.Tb(28,"code"),T.Bc(29,"disabled"),T.Sb(),T.Bc(30," etc based on your needs."),T.Sb(),T.Tb(31,"p"),T.Tb(32,"strong"),T.Bc(33,"Accessibility"),T.Sb(),T.Bc(34,":"),T.Sb(),T.Tb(35,"ul"),T.Tb(36,"li"),T.Tb(37,"code"),T.Bc(38,"<label>"),T.Sb(),T.Bc(39," has a "),T.Tb(40,"code"),T.Bc(41,"for"),T.Sb(),T.Bc(42," attribute whose value is that input field\u2019s "),T.Tb(43,"code"),T.Bc(44,"id"),T.Sb(),T.Bc(45,"."),T.Sb(),T.Tb(46,"li"),T.Bc(47,"Input element(s) with error, receives an "),T.Tb(48,"code"),T.Bc(49,"aria-describedby"),T.Sb(),T.Bc(50," attribute that references the "),T.Tb(51,"code"),T.Bc(52,"id"),T.Sb(),T.Bc(53," attribute of the error message."),T.Sb(),T.Sb(),T.Sb(),T.Tb(54,"div",9),T.Tb(55,"h2",10),T.Bc(56,"Examples"),T.Sb(),T.Tb(57,"div",11),T.Tb(58,"div",12),T.Bc(59,"Basic Usage"),T.Sb(),T.Ob(60,"app-demo-input-basic"),T.zc(61,g,602,0,"ng-template",null,13,T.Ac),T.zc(63,m,96,6,"ng-template",null,14,T.Ac),T.Tb(65,"div",15),T.Ob(66,"app-demo-example-docs",16),T.Sb(),T.Sb(),T.Sb(),T.Tb(67,"div",9),T.Tb(68,"h2",10),T.Bc(69,"API"),T.Sb(),T.Tb(70,"div",17),T.Tb(71,"div",18),T.Tb(72,"h3"),T.Bc(73,"<ngl-input>"),T.Sb(),T.Tb(74,"h4"),T.Bc(75,"NglInput"),T.Sb(),T.Tb(76,"table"),T.Tb(77,"thead"),T.Tb(78,"tr"),T.Tb(79,"th"),T.Bc(80,"Property"),T.Sb(),T.Tb(81,"th"),T.Bc(82,"Description"),T.Sb(),T.Tb(83,"th"),T.Bc(84,"Type"),T.Sb(),T.Tb(85,"th"),T.Bc(86,"Default"),T.Sb(),T.Sb(),T.Sb(),T.Tb(87,"tbody"),T.Tb(88,"tr"),T.Tb(89,"td"),T.Tb(90,"code"),T.Bc(91,"[label]"),T.Sb(),T.Sb(),T.Tb(92,"td"),T.Bc(93,"Input label."),T.Sb(),T.Tb(94,"td"),T.Bc(95,"string | TemplateRef"),T.Sb(),T.Ob(96,"td"),T.Sb(),T.Tb(97,"tr"),T.Tb(98,"td"),T.Tb(99,"code"),T.Bc(100,"[fieldLevelHelpTooltip]"),T.Sb(),T.Sb(),T.Tb(101,"td"),T.Bc(102,"A Tooltip that is displayed next to the label."),T.Sb(),T.Tb(103,"td"),T.Bc(104,"string | TemplateRef"),T.Sb(),T.Ob(105,"td"),T.Sb(),T.Tb(106,"tr"),T.Tb(107,"td"),T.Tb(108,"code"),T.Bc(109,"[error]"),T.Sb(),T.Sb(),T.Tb(110,"td"),T.Bc(111,"Error message."),T.Sb(),T.Tb(112,"td"),T.Bc(113,"string | TemplateRef"),T.Sb(),T.Ob(114,"td"),T.Sb(),T.Sb(),T.Sb(),T.Tb(115,"p"),T.Bc(116,"Highlights label as a required (does not perform any validation) based onto "),T.Tb(117,"code"),T.Bc(118,"<input>"),T.Sb(),T.Bc(119,"'s "),T.Tb(120,"code"),T.Bc(121,"required"),T.Sb(),T.Bc(122," property."),T.Sb(),T.Sb(),T.Sb(),T.Sb()),2&b){var c=T.rc(62),a=T.rc(64);T.Bb(66),T.mc("ts",a)("markup",c)}},directives:[o,u.a],encapsulation:2}),h)}],C=((v=function b(){_classCallCheck(this,b)}).\u0275mod=T.Kb({type:v}),v.\u0275inj=T.Jb({factory:function(b){return new(b||v)},imports:[[a.c,s.g,e.c.forChild(f),p.v,p.m,B.a]]}),v)}}]);