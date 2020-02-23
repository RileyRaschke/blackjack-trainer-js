
function deckCountToLabel( dc ){
  if( dc == 1 ){
    return 'singleDeck';
  }
  if( dc == 2 ){
    return 'doubleDeck';
  }
  return 'multiDeck';
}

const stratIndexTable = {
  'singleDeck': {
    'hardTable': [[0],[1],[2],[3],[4],
/*                  2     3     4     5     6     7     8     9     10    A */
/*  5  */ [ '','', 'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H' ],
/*  6  */ [ '','', 'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H' ],
/*  7  */ [ '','', 'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H' ],
/*  8  */ [ '','', 'H',  'H',  'H', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/*  9  */ [ '','', 'Dh','Dh', 'Dh', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 10  */ [ '','', 'Dh','Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh',  'H',  'H' ],
/* 11  */ [ '','', 'Dh','Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh' ],
/* 12  */ [ '','', 'H',  'H',  'S',  'S',  'S',  'H',  'H',  'H',  'H',  'H' ],
/* 13  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'H',  'H',  'H',  'H',  'H' ],
/* 14  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'H',  'H',  'H',  'H',  'H' ],
/* 15  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'H',  'H',  'H',  'H',  'H' ],
/* 16  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'H',  'H',  'H',  'H',  'H' ],
/* 17  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
/* 18  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
/* 19  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
/* 20  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
/* 21  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
    ],
    'softTable': [[0],[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],
/*                  2     3     4     5     6     7     8     9     10    A */
/* 12  */ [ '','', 'H',  'H', 'Dh', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 13  */ [ '','', 'H',  'H', 'Dh', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 14  */ [ '','', 'H',  'H', 'Dh', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 15  */ [ '','', 'H',  'H', 'Dh', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 16  */ [ '','', 'H',  'H', 'Dh', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 17  */ [ '','', 'Dh','Dh', 'Dh', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 18  */ [ '','', 'S', 'Ds', 'Ds', 'Ds', 'Ds',  'S',  'S',  'H',  'H',  'H' ],
/* 19  */ [ '','', 'S',  'S',  'S',  'S', 'Ds',  'S',  'S',  'S',  'S',  'S' ],
/* 20  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
/* 21  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
    ],
    'splitTable': [[0],[1],
/*                  2     3     4     5     6     7     8     9     10    A */
/*  2  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'P',  'H',  'H',  'H',  'H' ],
/*  3  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'P',  'P',  'H',  'H',  'H' ],
/*  4  */ [ '','', 'H',  'H',  'P',  'P',  'P',  'H',  'H',  'H',  'H',  'H' ],
/*  5  */ [ '','', 'Dh','Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh',  'H',  'H' ],
/*  6  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'P',  'H',  'H',  'H',  'H' ],
/*  7  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'P',  'P',  'H',  'S',  'H' ],
/*  8  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P' ],
/*  9  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'S',  'P',  'P',  'S',  'P' ],
/* 10  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
/* 11  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P' ],
    ]
  },
  'doubleDeck': {
    'hardTable': [[0],[1],[2],[3],[4],
/*                  2     3     4     5     6     7     8     9     10    A */
/*  5  */ [ '','', 'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H' ],
/*  6  */ [ '','', 'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H' ],
/*  7  */ [ '','', 'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H' ],
/*  8  */ [ '','', 'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H' ],
/*  9  */ [ '','', 'Dh','Dh', 'Dh', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 10  */ [ '','', 'Dh','Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh',  'H',  'H' ],
/* 11  */ [ '','', 'Dh','Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh' ],
/* 12  */ [ '','', 'H',  'H',  'S',  'S',  'S',  'H',  'H',  'H',  'H',  'H' ],
/* 13  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'H',  'H',  'H',  'H',  'H' ],
/* 14  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'H',  'H',  'H',  'H',  'H' ],
/* 15  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'H',  'H',  'H',  'H',  'H' ],
/* 16  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'H',  'H',  'H',  'H',  'H' ],
/* 17  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
/* 18  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
/* 19  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
/* 20  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
/* 21  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
    ],
    'softTable': [[0],[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],
/*                  2     3     4     5     6     7     8     9     10    A */
/* 12  */ [ '','', 'H',  'H',  'H', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 13  */ [ '','', 'H',  'H',  'H', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 14  */ [ '','', 'H',  'H', 'Dh', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 15  */ [ '','', 'H',  'H', 'Dh', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 16  */ [ '','', 'H',  'H', 'Dh', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 17  */ [ '','', 'H', 'Dh', 'Dh', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 18  */ [ '','', 'Ds','Ds', 'Ds', 'Ds', 'Ds',  'S',  'S',  'H',  'H',  'H' ],
/* 19  */ [ '','', 'S',  'S',  'S',  'S', 'Ds',  'S',  'S',  'S',  'S',  'S' ],
/* 20  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
/* 21  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
    ],
    'splitTable': [[0],[1],
/*                  2     3     4     5     6     7     8     9     10    A */
/*  2  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'P',  'H',  'H',  'H',  'H' ],
/*  3  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'P',  'H',  'H',  'H',  'H' ],
/*  4  */ [ '','', 'H',  'H',  'H',  'P',  'P',  'H',  'H',  'H',  'H',  'H' ],
/*  5  */ [ '','', 'Dh','Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh',  'H',  'H' ],
/*  6  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'P',  'H',  'H',  'H',  'H' ],
/*  7  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'P',  'P',  'H',  'H',  'H' ],
/*  8  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P' ],
/*  9  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'S',  'P',  'P',  'S',  'S' ],
/* 10  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
/* 11  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P' ],
    ]
  },
  'multiDeck': {
    'hardTable': [[0],[1],[2],[3],[4],
/*                  2     3     4     5     6     7     8     9     10    A */
/*  5  */ [ '','', 'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H' ],
/*  6  */ [ '','', 'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H' ],
/*  7  */ [ '','', 'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H' ],
/*  8  */ [ '','', 'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H' ],
/*  9  */ [ '','', 'H', 'Dh', 'Dh', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 10  */ [ '','', 'Dh','Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh',  'H',  'H' ],
/* 11  */ [ '','', 'Dh','Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh' ],
/* 12  */ [ '','', 'H',  'H',  'S',  'S',  'S',  'H',  'H',  'H',  'H',  'H' ],
/* 13  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'H',  'H',  'H',  'H',  'H' ],
/* 14  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'H',  'H',  'H',  'H',  'H' ],
/* 15  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'H',  'H',  'H',  'H',  'H' ],
/* 16  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'H',  'H',  'H',  'H',  'H' ],
/* 17  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
/* 18  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
/* 19  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
/* 20  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
/* 21  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
    ],
    'softTable': [[0],[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],
/*                  2     3     4     5     6     7     8     9     10    A */
/* 12  */ [ '','', 'H',  'H',  'H', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 13  */ [ '','', 'H',  'H',  'H', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 14  */ [ '','', 'H',  'H',  'H', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 15  */ [ '','', 'H',  'H', 'Dh', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 16  */ [ '','', 'H',  'H', 'Dh', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 17  */ [ '','', 'H', 'Dh', 'Dh', 'Dh', 'Dh',  'H',  'H',  'H',  'H',  'H' ],
/* 18  */ [ '','', 'Ds','Ds', 'Ds', 'Ds', 'Ds',  'S',  'S',  'H',  'H',  'H' ],
/* 19  */ [ '','', 'S',  'S',  'S',  'S', 'Ds',  'S',  'S',  'S',  'S',  'S' ],
/* 20  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
/* 21  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
    ],
    'splitTable': [[0],[1],
/*                  2     3     4     5     6     7     8     9     10    A */
/*  2  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'P',  'H',  'H',  'H',  'H' ],
/*  3  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'P',  'H',  'H',  'H',  'H' ],
/*  4  */ [ '','', 'H',  'H',  'H',  'P',  'P',  'H',  'H',  'H',  'H',  'H' ],
/*  5  */ [ '','', 'Dh','Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh', 'Dh',  'H',  'H' ],
/*  6  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'H',  'H',  'H',  'H',  'H' ],
/*  7  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'P',  'H',  'H',  'H',  'H' ],
/*  8  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P' ],
/*  9  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'S',  'P',  'P',  'S',  'S' ],
/* 10  */ [ '','', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ],
/* 11  */ [ '','', 'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P' ],
    ]
  }
};

const countingStratTable = [
  { player: '*', dealer: 11, truCount:  3 },
  { player:  16, dealer: 10, truCount:  0 },
  { player:  15, dealer: 10, truCount:  4 },
  { player:  20, dealer: 5,  truCount:  5 },
  { player:  20, dealer: 6,  truCount:  4 },
  { player:  10, dealer: 10, truCount:  4 },
  { player:  12, dealer: 3,  truCount:  2 },
  { player:  12, dealer: 2,  truCount:  3 },
  { player:  11, dealer: 11, truCount:  1 },
  { player:   9, dealer: 2,  truCount:  1 },
  { player:  10, dealer: 11, truCount:  4 },
  { player:   9, dealer: 7,  truCount:  3 },
  { player:  16, dealer: 9,  truCount:  5 },
  { player:  13, dealer: 2,  truCount: -1 },
  { player:  12, dealer: 4,  truCount:  0 },
  { player:  12, dealer: 5,  truCount: -2 },
  { player:  12, dealer: 6,  truCount: -1 },
  { player:  13, dealer: 3,  truCount: -2 },
];

function testCountingStratTable( playerValue, dealerValue, trueCount ){
  for( i = 0; i < countingStratTable.length; ++i ){
    if( countingStratTable[i].player == playerValue && countingStratTable[i].dealer == dealerValue){
      if( trueCount >= countingStratTable[i] ){
        return 'STAND';
      } else {
        return 'SDP';
      }
    }
  }
  return null;
}

function stratDecodeAction(tableAction, hand){
  switch( tableAction ) {
    case  'H': return 'HIT'; break;
    case  'S': return 'STAND'; break;
    case  'P': return 'SPLIT'; break;
    case 'Ds':
      if( hand.canDouble() ){
        return 'DOUBLE';
      } else {
        return 'STAND';
      }
      break;
    case 'Dh':
      if( hand.canDouble() ){
        return 'DOUBLE';
      } else {
        return 'HIT';
      }
      break;
  }
  // Shouldn't run... to lazy to throw
  return 'STAND';
}

