#pragma once
#include "Object.h"


class Actor : public Object
{
public:
	virtual void beginPlay() override;
	void actorFunction();
};