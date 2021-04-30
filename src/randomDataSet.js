const randomNotes = [
  {
    key: 1,
    title: "lorem sit",
    content:
      "velit pariatur lorem ex labore in eu ullamco pariatur anim culpa reprehenderit excepteur anim enim aliquip sint minim dolore magna quis ex amet in pariatur magna ea fugiat eiusmod nostrud officia ex anim voluptate dolor tempor lorem ullamco enim sit adipiscing enim aliqua adipiscing",
    folderID: 1,
  },
  {
    key: 2,
    title: "anim sint eiusmod ipsum adipiscing tempor",
    content:
      "nulla cupidatat aliquip reprehenderit eu sed cupidatat culpa lorem ipsum pariatur ipsum cillum lorem tempor tempor fugiat cupidatat officia aute reprehenderit commodo officia occaecat deserunt sit ad dolore reprehenderit consequat minim elit proident excepteur irure pariatur voluptate ad consequat adipiscing laboris pariatur nostrud commodo reprehenderit sit sit magna",
    folderID: 1,
  },
  {
    key: 3,
    title: "laborum",
    content:
      "laborum ex occaecat reprehenderit fugiat officia et tempor pariatur incididunt mollit quis ullamco duis fugiat velit enim id culpa proident sint minim in sunt qui duis cillum est et voluptate lorem non minim",
    folderID: 1,
  },
  {
    key: 4,
    title: "officia id ullamco veniam elit qui",
    content:
      "anim magna consectetur minim nostrud aute cupidatat in lorem quis reprehenderit non enim ad velit sit cillum occaecat nostrud voluptate dolor aliquip ut laboris laboris sint irure aute irure deserunt id sint aute eu laboris proident cillum do laboris mollit occaecat eu sint veniam aliqua velit",
    folderID: 1,
  },
  {
    key: 5,
    title: "lorem mollit culpa enim",
    content:
      "sunt irure elit do mollit consectetur do sit ad pariatur id culpa dolor id sed dolore cupidatat duis ut cillum consectetur laborum sint mollit incididunt consequat ut velit sed sed fugiat dolore dolore aute anim sed id magna fugiat id ipsum anim proident ut laborum",
    folderID: 1,
  },
  {
    key: 6,
    title: "anim officia anim",
    content:
      "officia et commodo ullamco velit magna duis ea sed nostrud magna esse duis et nostrud fugiat veniam eu ex mollit aliqua aliquip veniam elit adipiscing sit deserunt quis in lorem qui pariatur ut aliquip commodo sint deserunt velit ea consectetur cupidatat laborum officia pariatur consequat ut magna est elit nisi",
    folderID: 1,
  },
  {
    key: 7,
    title: "occaecat consectetur excepteur",
    content:
      "ad commodo consectetur anim et labore ipsum reprehenderit do sint labore pariatur exercitation irure nostrud voluptate ullamco ullamco fugiat officia nisi esse minim nostrud adipiscing culpa reprehenderit incididunt sint exercitation consequat irure nulla minim ad duis quis fugiat magna do exercitation irure adipiscing eiusmod lorem",
    folderID: 1,
  },
  {
    key: 8,
    title: "ut dolore",
    content:
      "amet qui qui veniam dolor nisi ipsum duis nulla commodo laboris consectetur sed lorem sed magna ex proident aliquip sunt id irure officia sunt minim laboris lorem magna deserunt nulla veniam nulla consequat tempor reprehenderit",
    folderID: 1,
  },
  {
    key: 9,
    title: "amet est id consectetur pariatur",
    content:
      "do consectetur consequat tempor cupidatat sit ea veniam non labore cillum exercitation sint incididunt non laborum anim eiusmod sint deserunt sed adipiscing irure nostrud nostrud enim sed reprehenderit ullamco officia excepteur laborum",
    folderID: 1,
  },
  {
    key: 10,
    title: "adipiscing reprehenderit",
    content:
      "anim adipiscing aliqua minim do ut veniam nulla nostrud pariatur do ipsum adipiscing sunt commodo incididunt reprehenderit duis ad lorem sit elit reprehenderit sit anim nulla adipiscing enim aliqua magna magna non proident non excepteur aliquip mollit",
    folderID: 1,
  },
  {
    key: 11,
    title: "lorem cupidatat",
    content:
      "veniam nisi fugiat elit eu occaecat ut consectetur esse sunt veniam laboris non excepteur id sunt mollit laboris dolor ut est consequat eiusmod culpa sit tempor excepteur elit labore esse sint reprehenderit eiusmod cupidatat cupidatat fugiat adipiscing voluptate amet voluptate",
    folderID: 1,
  },
  {
    key: 12,
    title: "qui reprehenderit duis enim laboris",
    content:
      "fugiat aliquip ipsum qui mollit laboris ex reprehenderit elit nostrud consectetur nulla non duis est consectetur ad incididunt mollit id quis ullamco ex eiusmod deserunt incididunt tempor ea eu dolore ad",
    folderID: 1,
  },
  {
    key: 13,
    title: "incididunt eu est velit labore",
    content:
      "dolore do do magna enim dolor incididunt sunt commodo officia ex anim laborum lorem ad occaecat dolore excepteur nulla dolor in ex ut labore adipiscing enim dolore eiusmod sit est nulla adipiscing",
    folderID: 1,
  },
  {
    key: 14,
    title: "exercitation laboris pariatur",
    content:
      "ullamco consequat proident aliquip nostrud eu officia pariatur nulla deserunt aute qui excepteur pariatur culpa ullamco voluptate ipsum anim occaecat amet quis duis eu id et ipsum qui nisi fugiat ex consectetur veniam deserunt esse et tempor dolore cupidatat adipiscing ullamco aliqua reprehenderit lorem ipsum nisi mollit laboris",
    folderID: 1,
  },
  {
    key: 15,
    title: "deserunt cupidatat ipsum",
    content:
      "elit reprehenderit id exercitation proident ex elit elit ullamco labore mollit duis occaecat ut est amet dolore eiusmod ullamco enim ex ex ex commodo cupidatat ad enim exercitation sunt fugiat",
    folderID: 1,
  },
  {
    key: 16,
    title: "reprehenderit lorem aliquip",
    content:
      "irure excepteur occaecat aliqua ut adipiscing ad eiusmod anim mollit ipsum qui ad ex culpa ex sit incididunt ex mollit minim amet aliquip irure elit magna quis fugiat duis lorem sit dolore mollit aliqua velit velit sed",
    folderID: 1,
  },
  {
    key: 17,
    title: "dolore",
    content:
      "ullamco adipiscing proident voluptate in fugiat eu aliquip officia quis elit esse nostrud commodo exercitation ad fugiat enim officia nisi lorem minim dolor eu reprehenderit ad veniam laborum id lorem fugiat aute",
    folderID: 1,
  },
  {
    key: 18,
    title: "proident aliqua",
    content:
      "mollit cillum dolor aute eu occaecat eu do sit aliqua aliqua cupidatat ullamco incididunt laborum cupidatat nulla dolore ad ipsum cupidatat irure velit dolore pariatur sunt labore dolor sint occaecat dolor consequat dolor cillum consectetur sit velit velit laboris",
    folderID: 1,
  },
  {
    key: 19,
    title: "lorem nulla enim cupidatat",
    content:
      "sunt velit elit cillum cillum dolor non ex enim laboris enim veniam nostrud lorem do sed et eiusmod cillum nulla fugiat ipsum veniam commodo laboris occaecat commodo anim enim ullamco cupidatat ut occaecat aliqua amet eiusmod sed esse id",
    folderID: 1,
  },
  {
    key: 20,
    title: "labore eiusmod tempor labore ullamco sit",
    content:
      "sit velit laboris eiusmod sunt ad ad quis aliquip reprehenderit ut anim labore ullamco ea adipiscing ex quis anim cillum ipsum aliqua laborum nisi aliquip ipsum pariatur exercitation qui consequat proident qui ea ullamco commodo ex",
    folderID: 1,
  },
  {
    key: 21,
    title: "excepteur lorem ad eu consequat",
    content:
      "ea adipiscing fugiat sint nisi cillum officia qui ut ipsum reprehenderit tempor dolore nostrud irure tempor culpa nostrud id enim nostrud voluptate laborum labore adipiscing duis amet sed officia in lorem tempor labore eu ipsum adipiscing dolore ullamco esse",
    folderID: 1,
  },
  {
    key: 22,
    title: "in ex amet excepteur",
    content:
      "est cillum amet aliquip aliquip sed tempor sit dolore consequat pariatur deserunt velit minim incididunt anim deserunt sunt consectetur magna elit esse commodo in duis dolor sit enim excepteur cupidatat consequat enim nulla ut qui excepteur",
    folderID: 1,
  },
  {
    key: 23,
    title: "aliquip minim non sit sed sit",
    content:
      "ullamco nulla do esse veniam duis magna nulla eiusmod reprehenderit magna pariatur aliquip aliquip sed laboris ut reprehenderit velit occaecat ex reprehenderit magna officia consequat deserunt amet nostrud laborum proident voluptate nulla consequat dolore laboris quis aute irure duis veniam",
    folderID: 1,
  },
  {
    key: 24,
    title: "tempor elit eu nostrud",
    content:
      "et occaecat laboris sunt ad sint occaecat irure exercitation reprehenderit consectetur do id adipiscing nostrud cillum nostrud laborum sit sunt amet sint lorem aliquip amet irure sit laborum ipsum nulla cillum anim minim deserunt velit nulla cillum voluptate deserunt ex sunt culpa laborum",
    folderID: 1,
  },
  {
    key: 25,
    title: "dolore",
    content:
      "occaecat non ut dolor laborum id ex ea laboris excepteur deserunt culpa cillum minim excepteur qui nostrud minim velit in voluptate laborum ad magna voluptate consequat dolor ipsum nulla commodo irure enim qui exercitation amet eiusmod aute reprehenderit adipiscing tempor officia in aliqua occaecat dolor cillum occaecat",
    folderID: 1,
  },
  {
    key: 26,
    title: "officia ipsum incididunt",
    content:
      "adipiscing do sint laboris eu minim exercitation enim id esse et irure minim tempor quis aliquip lorem eiusmod ullamco id laboris velit laborum occaecat dolore magna voluptate fugiat voluptate elit pariatur eu laborum et culpa proident labore et sed sed tempor consequat proident proident officia commodo ea",
    folderID: 1,
  },
  {
    key: 27,
    title: "occaecat non adipiscing sit sint amet",
    content:
      "velit commodo ipsum sint qui dolor sint minim non minim est do deserunt nulla laborum sed nulla amet anim excepteur do anim eiusmod nulla est ex aliqua enim anim aliqua non reprehenderit elit ea incididunt proident fugiat sed irure enim anim veniam occaecat dolor excepteur officia eu dolore proident",
    folderID: 1,
  },
  {
    key: 28,
    title: "ex",
    content:
      "occaecat duis occaecat sit ut commodo magna amet nostrud tempor amet incididunt occaecat nisi sunt aliqua ullamco sunt in velit minim exercitation labore ad ex lorem nisi exercitation amet adipiscing amet ad proident",
    folderID: 1,
  },
  {
    key: 29,
    title: "aute do sint cillum dolor",
    content:
      "anim ad pariatur in sunt aute proident incididunt eiusmod laboris reprehenderit amet consequat magna sunt sint non dolor ipsum et veniam incididunt officia excepteur do ex nostrud nostrud adipiscing anim aute magna",
    folderID: 1,
  },
  {
    key: 30,
    title: "proident esse nisi proident tempor",
    content:
      "aute exercitation et minim sed magna laboris lorem excepteur ex nisi cillum adipiscing incididunt proident commodo aliqua sit in irure eiusmod ea veniam aliqua qui nisi irure laborum exercitation nostrud enim in dolor id quis non quis eiusmod sint qui",
    folderID: 1,
  },
  {
    key: 31,
    title: "ullamco commodo commodo ullamco enim",
    content:
      "fugiat culpa laborum tempor labore reprehenderit amet ullamco consequat exercitation occaecat duis anim id veniam pariatur nulla id non quis officia sit elit enim irure dolore et dolore excepteur aute aute ut magna velit magna irure non minim labore",
    folderID: 1,
  },
  {
    key: 32,
    title: "mollit veniam",
    content:
      "ex labore tempor cupidatat occaecat esse ex sit esse cupidatat deserunt non elit est esse labore non duis ut aliquip veniam dolor cillum mollit do nisi amet id do sunt sint",
    folderID: 1,
  },
  {
    key: 33,
    title: "quis id eiusmod sed magna",
    content:
      "dolor magna reprehenderit ea nisi culpa qui irure tempor id elit ex adipiscing aute culpa consectetur occaecat exercitation cupidatat nisi sit incididunt non ut aliquip anim minim incididunt exercitation do",
    folderID: 1,
  },
  {
    key: 34,
    title: "amet ex veniam",
    content:
      "occaecat commodo culpa eiusmod fugiat cillum duis est fugiat deserunt mollit sint ad tempor et mollit aute commodo nostrud cillum nulla ut quis duis officia cupidatat amet est amet exercitation ad officia adipiscing enim aute",
    folderID: 1,
  },
  {
    key: 35,
    title: "magna amet",
    content:
      "dolor ea cupidatat nulla eiusmod anim occaecat ea dolore fugiat aliqua ut exercitation ut ut quis consequat laboris et proident aliquip dolor esse ipsum tempor consequat irure amet nisi officia aliqua consequat lorem sint nulla sed culpa aliqua nostrud velit duis ipsum",
    folderID: 1,
  },
  {
    key: 36,
    title: "adipiscing sunt in elit",
    content:
      "eu lorem sunt velit sed aliqua fugiat consectetur nisi adipiscing aliquip consequat aute in anim labore aliquip irure sint laborum velit non consequat ullamco amet exercitation sed non occaecat esse labore nisi enim in ut id minim cillum sunt labore anim",
    folderID: 1,
  },
  {
    key: 37,
    title: "ad veniam dolor ut",
    content:
      "eiusmod sit occaecat consectetur et ad aliqua cillum nulla do cillum sed commodo do culpa elit nostrud amet adipiscing laboris pariatur ullamco et sed culpa nisi laborum laboris et adipiscing laboris ullamco sit nostrud ipsum culpa minim elit sit dolor",
    folderID: 1,
  },
  {
    key: 38,
    title: "sunt dolore dolor",
    content:
      "mollit officia tempor dolore ullamco non nostrud officia pariatur duis ea nostrud velit in velit nostrud culpa sed eu eu duis pariatur incididunt fugiat sunt incididunt culpa do tempor mollit dolore amet nisi ut consequat sint nisi ea sit culpa duis",
    folderID: 1,
  },
  {
    key: 39,
    title: "irure sit commodo",
    content:
      "proident nostrud elit exercitation cupidatat adipiscing culpa commodo consequat proident cupidatat labore magna qui dolore reprehenderit irure reprehenderit aliqua elit reprehenderit irure anim aliqua dolore sed cillum sunt in excepteur ipsum do anim",
    folderID: 1,
  },
  {
    key: 40,
    title: "cupidatat sed aliqua laboris",
    content:
      "deserunt officia ex amet tempor nisi cupidatat nostrud cupidatat aliqua laborum proident cupidatat nulla amet duis officia eiusmod consectetur sunt deserunt adipiscing nostrud esse voluptate consectetur cupidatat esse amet irure labore deserunt ea laborum",
    folderID: 1,
  },
  {
    key: 41,
    title: "fugiat commodo",
    content:
      "reprehenderit do sunt duis do elit sint incididunt nostrud laborum laboris ex duis tempor officia sed exercitation occaecat reprehenderit excepteur est elit mollit do ea adipiscing non magna commodo sed esse duis labore dolor qui et duis nulla enim amet eu laborum ipsum labore veniam",
    folderID: 1,
  },
  {
    key: 42,
    title: "minim enim elit amet",
    content:
      "cupidatat sed et magna aute ad duis amet laborum cupidatat consequat ea labore tempor commodo in non do pariatur qui laboris adipiscing ex et ad culpa sint dolore commodo elit magna velit sint sint cupidatat et ea anim pariatur anim eu duis culpa non consequat dolor velit in",
    folderID: 1,
  },
  {
    key: 43,
    title: "veniam duis exercitation adipiscing occaecat et",
    content:
      "reprehenderit in sit qui anim ullamco incididunt velit elit mollit velit incididunt culpa occaecat aliqua ex dolore deserunt aliquip labore culpa anim laboris consectetur ad eiusmod id nostrud anim fugiat eiusmod aliquip deserunt ullamco consectetur enim commodo dolor et magna laboris laboris lorem esse",
    folderID: 1,
  },
  {
    key: 44,
    title: "aliquip consequat velit excepteur labore",
    content:
      "tempor fugiat consequat dolore enim ipsum id esse in minim ad aliqua ex esse non deserunt sint eiusmod sit ullamco occaecat occaecat exercitation quis nulla pariatur nostrud sunt reprehenderit occaecat duis laborum id cillum aliquip",
    folderID: 1,
  },
  {
    key: 45,
    title: "aliqua",
    content:
      "incididunt eiusmod pariatur nulla sint adipiscing sed cupidatat mollit fugiat culpa magna amet duis id fugiat deserunt ex ea elit officia ex esse in quis anim deserunt adipiscing quis deserunt aliqua ex fugiat sit ipsum amet commodo esse et duis laboris",
    folderID: 1,
  },
  {
    key: 46,
    title: "incididunt cillum nulla officia",
    content:
      "consectetur eiusmod quis velit duis nostrud deserunt aliquip ipsum adipiscing eu enim cillum cillum et minim id labore commodo eiusmod in do cillum sunt duis cillum esse consequat sint aliqua ipsum sed",
    folderID: 1,
  },
  {
    key: 47,
    title: "qui et exercitation",
    content:
      "dolor laboris reprehenderit commodo occaecat lorem consequat ea ullamco excepteur occaecat aliqua veniam qui laboris officia enim elit esse et ipsum magna adipiscing quis sed sit proident elit et nisi anim nostrud",
    folderID: 1,
  },
  {
    key: 48,
    title: "nulla",
    content:
      "commodo et laboris ad aliqua sunt quis sunt deserunt qui dolore elit ex officia aliqua excepteur anim veniam lorem enim voluptate ea sit ad minim eiusmod ea aliquip cupidatat mollit est sed ad cillum nostrud ea velit irure minim ea labore minim cillum enim pariatur veniam",
    folderID: 1,
  },
  {
    key: 49,
    title: "deserunt cillum officia laboris nostrud velit",
    content:
      "sed occaecat dolor laboris dolor esse commodo officia consequat pariatur aute in lorem aute dolor sit non lorem sunt ipsum adipiscing ipsum dolore ipsum anim aliqua laborum in velit consectetur nisi duis",
    folderID: 1,
  },
  {
    key: 50,
    title: "labore exercitation",
    content:
      "non quis nulla exercitation exercitation sint ad pariatur proident non officia aliquip et est ipsum dolore consectetur esse ipsum duis dolor sit laborum excepteur culpa minim enim esse adipiscing aliqua ut minim ullamco dolor sit magna amet labore enim occaecat deserunt consectetur elit id nulla commodo",
    folderID: 1,
  },
];

const randomFolders = [
  {
    id: 1,
    name: "elit incididunt eiusmod",
  },
  {
    id: 2,
    name: "sed",
  },
  {
    id: 3,
    name: "nisi sit aliqua",
  },
  {
    id: 4,
    name: "veniam",
  },
  {
    id: 5,
    name: "adipiscing commodo labore",
  },
  {
    id: 6,
    name: "voluptate dolore",
  },
  {
    id: 7,
    name: "magna",
  },
  {
    id: 8,
    name: "esse nulla",
  },
  {
    id: 9,
    name: "ipsum anim voluptate",
  },
  {
    id: 10,
    name: "id cillum",
  },
  {
    id: 11,
    name: "fugiat",
  },
  {
    id: 12,
    name: "eu",
  },
  {
    id: 13,
    name: "id tempor reprehenderit",
  },
  {
    id: 14,
    name: "exercitation fugiat",
  },
  {
    id: 15,
    name: "labore officia est",
  },
  {
    id: 16,
    name: "incididunt",
  },
  {
    id: 17,
    name: "est dolore",
  },
  {
    id: 18,
    name: "dolor voluptate",
  },
  {
    id: 19,
    name: "culpa",
  },
  {
    id: 20,
    name: "exercitation irure",
  },
  {
    id: 21,
    name: "exercitation",
  },
  {
    id: 22,
    name: "esse ad",
  },
  {
    id: 23,
    name: "irure eu",
  },
  {
    id: 24,
    name: "ex",
  },
  {
    id: 25,
    name: "nulla ut",
  },
  {
    id: 26,
    name: "amet adipiscing",
  },
  {
    id: 27,
    name: "sunt cillum veniam",
  },
  {
    id: 28,
    name: "consectetur",
  },
  {
    id: 29,
    name: "reprehenderit",
  },
  {
    id: 30,
    name: "aliquip consectetur cillum",
  },
  {
    id: 31,
    name: "quis fugiat",
  },
  {
    id: 32,
    name: "proident",
  },
  {
    id: 33,
    name: "exercitation id fugiat",
  },
  {
    id: 34,
    name: "cillum irure",
  },
  {
    id: 35,
    name: "nisi",
  },
  {
    id: 36,
    name: "quis adipiscing",
  },
  {
    id: 37,
    name: "dolore elit fugiat",
  },
  {
    id: 38,
    name: "sint qui occaecat",
  },
  {
    id: 39,
    name: "aute",
  },
  {
    id: 40,
    name: "eu enim veniam",
  },
  {
    id: 41,
    name: "esse amet",
  },
  {
    id: 42,
    name: "non adipiscing",
  },
  {
    id: 43,
    name: "cupidatat ut laboris",
  },
  {
    id: 44,
    name: "nostrud quis",
  },
  {
    id: 45,
    name: "anim",
  },
  {
    id: 46,
    name: "nisi nulla mollit",
  },
  {
    id: 47,
    name: "sunt laborum",
  },
  {
    id: 48,
    name: "fugiat",
  },
  {
    id: 49,
    name: "quis nulla",
  },
  {
    id: 50,
    name: "est consectetur",
  },
];

export { randomNotes, randomFolders };
