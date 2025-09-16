#include "Actor.h"
#include <iostream>
using namespace std;

void Actor::beginPlay()
{
	cout << "ACTOR - Begin play!" << endl;
	Object::beginPlay();
}

void Actor::actorFunction()
{
	cout << "ACTOR - Function!" << endl;
};