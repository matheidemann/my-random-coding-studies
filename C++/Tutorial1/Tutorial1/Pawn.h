#pragma once
#include "Actor.h"

class Pawn : public Actor
{
public:
	virtual void beginPlay() override;
	void pawnFunction();
};