
const sleep = (ms) => { return new Promise(resolve => setTimeout(resolve, ms)); }

const CardModel = function(rank, suit){
  this.rank = rank;
  this.suit = suit;
  this.value = function(){
    if( jQuery.isNumeric(this.rank) ){
      return parseInt(this.rank);
    } else if( this.rank == 'A' ){
      return 11;
    }
    return 10;
  }
}

const DeckModel = function(){
  ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  suits = ["♣","♠","♦","♥"];
  deck = [];
  for(i = 0; i < suits.length; ++i){
    for(j = 0; j < ranks.length; ++j){
      deck.push( new CardModel( ranks[j], suits[i] ) );
    }
  }
  return deck;
}

const ShoeModel = function(decks){
  this._shoe = [];
  this.decks = decks;
  this.sentShuffleNotice = false;
  this.needsShuffle = false;
  this._shuffleAtDecks = 1.5;

  for(var i = 0; i < this.decks; ++i){
    Array.prototype.push.apply(this._shoe, new DeckModel());
  }

  this.shuffle = function(){
    var j, x, i;
    for( i = this._shoe.length-1; i > 0; i--){
      j = Math.floor(Math.random() * (i + 1));
      x = this._shoe[i];
      this._shoe[i] = this._shoe[j];
      this._shoe[j] = x;
    }
  }

  this.shuffle();

  this.nextCard = function(){
    if( this.sentShuffleNotice ||
        (this.decks < 4 && this._shoe.length > this.decks*52*0.2) ||
        (this.decks > 3 && this._shoe.length > 52 * this._shuffleAtDecks )
      ){
      return this._shoe.pop();
    } else {
      this.sentShuffleNotice = true;
      throw shuffleShoeException;
    }
  }
}

const HandModel = function(){
  this.cards = [];
  this.isSoft = false;
  this.nextHand = null;
  this.isFinal = false;
  this.wasSplitAces = false;
  this._canHit = true;
  this._canDouble = true;
  this.bet = 0;

  this.addCard = function(card){
    // try to allow allow aces to re-split... How to prevent the option to hit though... hrmmm
    if( this.wasSplitAces && card.value == 11 ){
      this.wasSplitAces = false;
      this._canHit = false;
      this._canDouble = false;
    }

    this.cards.push( card );
    if( this.value() >= 21 || this.wasSplitAces){
      this.isFinal = true;
    }
    return this.isFinal;
  }

  this.hasBusted = function(){
    return (this.value() > 21 ? true : false);
  }

  this.isBlackjack = function(){
    if( this.value() == 21 && this.cards.length == 2 ){
      return true;
    }
    return false;
  }

  this.canSplit = function(){
    if( this.cards.length == 2 && cards[0].value() == cards[1].value() ){
      return true;
    }
    return false;
  }

  this.canDouble = function(){
    // FIXME: prevent double after split aces?
    return (this.cards.length == 2 ? true : false );
  }

  this.splitHand = function(){
    if( this.canSplit() ){
      if( this.cards[0].value() == 11 ){
        this.wasSplitAces = true;
      }
      this.nextHand = new HandModel();
      this.nextHand.addCard( this.cards.pop() );
      this.nextHand.wasSplitAces = this.wasSplitAces;
      return this.nextHand;
    }
    return null;
  }

  this.offerInsurance = function(){
    if( this.cards[0].value() == 11 && this.cards.length == 2 ){
      return true;
    }
    return false;
  }

  /**
   * maybe this should be handled differently... TBD
   */
  this.dealerHand = function(){
    dHand = new HandModel();
    dHand.addCard(cards[0]);
    dHand.addCard(new Card(null, null, true) );
    return dHand;
  }

  this.value = function(){
    var x = 0;
    var aceCount = 0;
    this.isSoft = false;
    for( i = 0; i < this.cards.length; ++i){
      var cVal = this.cards[i].value();
      if( cVal == 11 ){
        cVal = 0;
        aceCount++;
      }
      x += cVal;
    }

    while( aceCount > 0 ){
      if( x== 10 && aceCount == 1){
        this.isSoft == true;
        x += 11;
      } else if( x > 10-aceCount ){
        x += 1;
      } else {
        this.isSoft == true;
        x += 11;
      }
      aceCount--;
    }
    return x;
  }
}

const PlayerModel = function(name, agent, bankRoll) {
  this.name  = name;
  this.hands = [];
  this.agent = agent;
  this.bankRoll = bankRoll;
  this.roundsPlayed = 0;
  this.handsPlayed = 0;
  this.stats = {
     'bjs': 0,
     'wins': 0,
     'splits': 0,
     'doubles': 0,
     'pushes': 0,
     'loses': 0,
     'busts': 0,
  };
}

const ScoreModel = function(){
  this.blackjack = '*!BlackJack!*';
  this.win = 'Winner!';
  this.push = 'Pushed';
  this.bust = 'Busted';
  this.lose = 'LOSER';
}

const GameSettingsDialogModel = function() {
  this.bjg = {};
  this.visible = false;
  this.incDeckCount = function() { if( this.bjg.game.opts.deckCount < 12){ this.bjg.game.opts.deckCount++;}};
  this.decDeckCount = function() { if( this.bjg.game.opts.deckCount > 1 ){ this.bjg.game.opts.deckCount--;}};
  this.incDealRate  = function() { this.bjg.game.opts.dealRate += 0.1; };
  this.decDealRate  = function() { if( this.bjg.game.opts.dealRate > 0.01) {this.bjg.game.opts.dealRate -= 0.1; }};
  this.open = function(bjg) {
    this.bjg = bjg;
    this.visible = true;
  };
  this.close = function() {
    this.visible = false;
  };
};

const PlayerSettingsDialogModel = function() {
  this.bjg = {};
  this.visible = false;
  this.open = function(bjg) {
    this.bjg = bjg;
    this.visible = true;
  };
  this.close = function() {
    this.visible = false;
  };
};

