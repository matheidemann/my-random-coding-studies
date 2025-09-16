#include "Pawn.h"
#include <iostream>
using namespace std;

void Pawn::beginPlay()
{
	cout << "PAWN - Begin play!" << endl;
	Actor::beginPlay();
}

void Pawn::pawnFunction()
{
	cout << "PAWN - Function!" << endl;
};