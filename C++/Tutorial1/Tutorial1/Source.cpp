#include <iostream>
#include <string>
#include <array>
#include "Chicken.h"
#include "Object.h"
#include "Actor.h"
#include "Pawn.h"
using namespace std;


// global variable
int my_global_var = 5;



// cout = Character OUTput
// cin = Character INput



// functions
void welcomeMessage()
{
	cout << "Hello message from function welcomeMessage" << endl;
}

int addNumbers(int a, int b)
{
	return a + b;
}

char getYesOrNo()
{
	cout << "Please enter Y or N: ";

	char response;
	cin >> response;
	return response;
	
}

void incrementByOne(int& number) // & = reference sign
{
	number++;
}

void changeString(string& str)
{
	str += " >fui adicionado pela funcao changeString<";
}



// function overload
void printNumber(int num1)
{
	cout << "printNumber OVERLOAD 1 - Number: " << num1 << endl;
}

void printNumber(int num1, int num2)
{
	cout << "printNumber OVERLOAD 2 - Number: " << num1 << "  -  Number: " << num2 << endl;
}



// ENUMS + SWTICH CASE
enum PlayerStatus
{
	PS_Standing, // igual a 0
	PS_Crouched, // igual a 1
	PS_Walking, // igual a 2
	PS_Running // igual a 3
};

const float STAND_SPEED = 0.f;
const float CROUCH_SPEED = 300.f;
const float WALK_SPEED = 400.f;
const float RUN_SPEED = 800.f;

void updateMovementSpeed(PlayerStatus PlayerStatus, float& speed);



// classes and objects
// creating a class
class Dog
{
	// criando section pública da classe, pois classes possuem um corpo private por default
public:
	// constructor (precisa ter o mesmo nome da classe)
	Dog()
	{
		Name = "Default Dog Name";
	}

	// class variables
	string Name;

	// class functions
	void bark()
	{
		cout << Name << " just woofed!" << endl;
	}
};

// constructor fora da classe
class Person
{
public:
	Person(); // precisa definir ele aqui dentro
	string Name;
	void sayHello()
	{
		cout << Name << " says hello!" << endl;
	}
};

// depois precisa chamar ele dessa forma
Person::Person()
{
	Name = "Default Person Name";
}

// constructors servem para structs também
struct Cat
{
	Cat();

	string Name;

	void meow();
};

Cat::Cat()
{
	Name = "Random cat";
	cout << "A new cat is born!" << endl;
	meow();
}

void Cat::meow()
{
	cout << Name << " just meowed!" << endl;
}



// inheritance
class Creature
{
public:
	Creature();
	Creature(int eyes, string type);
	int eyes;
	string type;
	void born() {
		cout << "A new creature has born!";
	}
};

// constructor
Creature::Creature()
{
	eyes = 0;
	type = "Default";
	born();
}

// spider class
class Spider : public Creature
{
public:
	Spider(float p_poison_damage)
	{
		poison_damage = p_poison_damage;
		eyes = 8;
		type = "Arachnid";
	}

	float poison_damage;
};

// goblin class
class Goblin : public Creature
{
public:
	Goblin();
	Goblin(int p_eyes, string p_type);
	Goblin(float p_attack_damage);
	float attack_damage = 0;
};

// constructor
Goblin::Goblin()
{
	eyes = 2;
	type = "Humanoid";
};

// constructor
Goblin::Goblin(float p_attack_damage)
{
	attack_damage = p_attack_damage;
};

// constructor
Creature::Creature(int p_eyes, string p_type):
	eyes(p_eyes),type(p_type)
{
	born();
};

// constructor de goblin usando o constructor de creature
Goblin::Goblin(int p_eyes, string p_type) : Creature(p_eyes, p_type) {};



// access modifier - getters & setters
// class
class Animal
{
public:
	Animal();
	void setName(string p_name);
	string getName();
	void takeDamage(float p_damage);

private:
	string name;
	float health;
};

// constructor
Animal::Animal()
{
	cout << "A new animal is born!" << endl;
};

// setter
void Animal::setName(string p_name)
{
	name = p_name;
}

// getter 
string Animal::getName()
{
	return name;
}

// takeDamage
void Animal::takeDamage(float p_damage)
{
	float total;
	total = health - p_damage;
	if (total <= 0.f)
	{
		cout << getName() << " has died." << endl;
	}
	else
	{
		cout << getName() << " took " << p_damage << " damage." << endl;
	}
}



// static
// static variables: faz com que algo permaneça existindo e mantendo seu contexto atual mesmo quando saimos do seu contexto
void updateCount()
{
	static int count = 0; // isso aqui só vai acontecer 1 vez, ele n vai ficar fazendo reasign de valor td hr
	count++;
};

// static class objects
// o objeto my_dog vai continuar existindo mesmo após sair do bloco do "if(true)"
class Wolf {};

void wolfFunction()
{
	if (true)
	{
		static Wolf my_dog;
	}
};

// static data member in a class
// a "monster_count" é uma variável que pertence à class, e não à uma instância
class Monster
{
private:
	static int monster_count;

public:
	Monster()
	{
		monster_count++;
	}
};

int Monster::monster_count = 0; // ela precisa ser iniciada fora da classe

// static member functions
// é possível chamar a função "welcome" mesmo que não hajam instâncias do Announcer criadas (pois ela pertence à classe, n às instancias)
class Announcer
{
public:
	static void welcome()
	{
		cout << "Welcome!" << endl;
	}
};



// virtual functions (override)







int main()
{
	
	// print text on console
	std::cout << "You Died\n";

	// aqui eu não preciso usar o "std" pq estou usando o "using namespace std;" no topo
	cout << "That's the end!" << endl; // endl é a mesma coisa que o \n



	// variables
	char my_character;
	my_character = 'y';
	int my_int = 13;
	float my_float = 7.123;
	float my_float_example = 7.123e3; // e3 = x10³ - o computador entende floats como notação científica
	my_character = 'n';
	string my_string = "Capivara são amadas";



	// print variables
	cout << my_character << endl;
	cout << my_int << endl;



	// if - else - else if
	int a(1); // mesma coisa que o assigment operator
	int b = 13;
	bool is_capybara = true;

	if (a > b && is_capybara)
	{
		cout << "A is bigger from B" << endl;
	}
	else if (a < b || !is_capybara) {
		cout << "A is less to B" << endl;
	}
	else
	{
		cout << "A is equal to B" << endl;
	}



	// functions
	welcomeMessage();
	cout << addNumbers(5, 10) << endl;
	cout << "Your answer was: " << getYesOrNo() << endl;



	// while loop
	int count = 5;
	cout << "While Loop!" << endl;

	while (count > 0)
	{
		cout << count-- << endl;
	}



	// do while
	count = 5;
	bool my_condition = true;
	cout << "Do While Loop!" << endl;

	do
	{
		cout << count-- << endl;
		if (count == 0)
		{
			my_condition = false;
		}
	} while (my_condition);



	// for loops
	int loop_counter = 0;
	cout << "For Loop!" << endl;

	for (int i = 0; i <= 2; i++)
	{
		for (int j = 0; j <= 2; j++)
		{
			for (int k = 0; k <= 2; k++)
			{
				cout << "i == " << i << " --- j == " << j << " --- k == " << k << "   |   Loop counter: " << ++loop_counter << endl;
			}
		}
	}



	// passing values by reference - é uma referência no local da memória de alguma variável
	int random_int1 = 0;
	cout << random_int1 << endl;
	incrementByOne(random_int1); // essa função é void, mas ainda assim, irá modificar o valor de random_int
	cout << random_int1 << endl;

	// aqui estamos passando a variável de referência para a função, e ainda assim, modifica o valor original da variável "random_int2"
	int random_int2 = 5;
	int& ref_random_int2 = random_int2;
	incrementByOne(ref_random_int2);
	cout << ref_random_int2 << endl;
	
	// mesmo que a função use uma reference como parâmetro, nós podemos passar a variável direto, sem precisar passar como uma reference
	string my_string1 = "Capivara";
	changeString(my_string1); //
	cout << my_string1 << endl;



	// function overload
	printNumber(5);
	printNumber(5, 2);



	// C style string
	char red[4] = { 'r','e','d','\0' };
	char c_style_string[6] = "Hello";



	// constants
	const int MY_CONST_INST = 5;



	// compound types
	// arrays
	// C style
	int my_array1[3] = { 255, 17, 86};
	cout << "valor do my_array1[2]: " << my_array1[2] << endl;
	cout << "local na memória do my_array1: " << my_array1[3] << endl;

	// para pegar o tamanho do array C style
	// o sizeof retorna o tamanho de determinado elemento na memória, sendo que, neste caso funciona corretamente, pois cada valor no array possui 4 bytes
	// contudo, se houvessem elementos no array com tamanhos diferentes (ex: strings com 4 bytes e outras com 8 bytes, o tamanho do array seria incorreto)
	int my_array2[10];
	cout << "tamanho em bytes de um index no my_array2: " << sizeof(my_array1[0]) << endl;
	cout << "length do my_array2 fazendo divisão dos bytes: " << sizeof(my_array2) / sizeof(my_array1[0]) << endl;

	// std::array style
	array<int, 3> my_array3 = { 255, 17, 86 };
	cout << "length do my_array3: " << my_array3.size() << endl;

	for (int i = 0; i < my_array3.size(); i++)
	{
		cout << "value from my_array3[" << i << "]: " << my_array3[i] << endl;
	}



	// enum
	enum PlayerType
	{
		PT_PlayerOne,
		PT_PlayerTwo,
		PT_PlayerThree,
		PT_PlayerFour,
	};

	// enum compacto
	enum GameState {GS_Paused, GS_Play};

	// neste caso, os valores depois do Is_PickedUp serão o valor anterior +1 por conta de termos definido que o valor de Is_PickedUp é 1
	enum ItemStatus
	{
		IS_PickedUp = 1, // igual a 1
		IS_Dropped, // igual a 2
		IS_Equipped // igual a 3
	};

	// é possível definir um valor para cada enum
	enum CurrencyType
	{
		CT_Copper = 1,
		CT_Silver = 100,
		CT_Gold = 1000,
		CT_Diamond = 10000
	};



	// switch case
	// variável do tipo PlayerStatus recebendo algum valor possível do enum
	// ver linhas 55 e AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA 
	PlayerStatus current_player_status = PlayerStatus::PS_Running;

	// exemplo de switch/case e enums
	float movement_speed;
	updateMovementSpeed(current_player_status, movement_speed);



	// struct - estrutura de dados que permite agrupar diferentes tipos de dados sob um único nome
	// é semelhante a uma classe, mas com algumas diferenças importantes.
	struct LocationVector {
		float X;
		float Y;
		float Z;
	};

	struct Character
	{
		string Name;
		float Health;
		int Level;

		LocationVector Location = { 0.f, 0.f, 0.f };

		void attack()
		{
			cout << Name << " has attacked!" << endl;
		}

		void takeDamage(float damage)
		{
			cout << "Joe took damage!" << endl;
			Health -= damage;
		}

		void getLocation()
		{
			cout << Name << " Current X: " << Location.X << endl;
			cout << Name << "Current Y: " << Location.Y << endl;
			cout << Name << "Current Z: " << Location.Z << endl;
		}
	};

	// criando um novo personagem
	Character Joe;
	Joe.Name = "Joe";
	Joe.Health = 100.f;
	Joe.Level = 1;

	Joe.attack();
	Joe.takeDamage(5.f);
	cout << "Joe's Health: " << Joe.Health << endl;
	Joe.getLocation();

	// shorthand para fazer a mesma coisa acima
	Character Lisa = { "Lisa", 100.f, 5, {1.f, 10.f, 0.f} };
	Lisa.attack();
	Lisa.getLocation();

	// pointers!!!!!!!
	// é uma variável q segura o endereço de memória de outra variável
	// pointer to int
	// "address of" operator = &
	int my_normal_int = 2;
	int* PtrTo_my_normal_int;
	PtrTo_my_normal_int = &my_normal_int;

	// printing the memory addr
	cout << PtrTo_my_normal_int << endl;

	// printing the actual value from the memory addr
	cout << *PtrTo_my_normal_int << endl;

	// arrays e pointers
	int numbers_array[] = { 10,20,30,40,50,60,70,80,90,100 };
	int* PtrTo_numbers_array = numbers_array;
	cout << *PtrTo_numbers_array << endl; // vamos pegar o 1o valor do array (10)
	PtrTo_numbers_array++;				// adicionando +1 no pointer, resultando no 2o valor do array (20)
	cout << *PtrTo_numbers_array << endl; // vamos pegar o 2o valor do array (20)
	PtrTo_numbers_array += 3;				// adicionando o valor atual (2) com 3, resultando 5
	cout << *PtrTo_numbers_array << endl; // vamos pegar o 5o valor do array (50)

	// structs com pointers
	struct Container
	{
		string Name;
		int X;
		int Y;
		int Z;
	};

	Container my_container = { "Sam", 5, 6, 7 };
	Container* PtrTo_my_container = &my_container;

	// fazendo referência ao construct e acessando o valor name
	// forma clássica
	cout << "Name: " << (*PtrTo_my_container).Name << endl;
	// arrow notation = forma mais bonita e utilizada por padrão
	cout << "Name: " << PtrTo_my_container->Name << endl;



	//classes and objects
	// criando uma instância
	Dog default_dog;
	default_dog.bark();

	// constructor com struct
	Cat my_cat;


	// inheritance
	// criando aranha com poison damage customizado
	Spider black_spider(50.f);

	Goblin goblin1;
	Goblin goblin2(5.f);



	// dynamic memory allocation
	// new - guarda no heap, q é separado da stack, fazendo com q seja criado no runtime ao invés de ser no compile
	struct Human
	{
	public:
		Human()
		{
			Ptr_name = new string("Default name");
			Ptr_health = new float(100.f);
			cout << "A new human has born!" << endl;
		};
		~Human()
		{
			delete Ptr_name;
			delete Ptr_health;
			cout << "A human has died." << endl;
		}
	private:
		string* Ptr_name;
		float* Ptr_health;
	};

	Human* PtrTo_Human = new Human();	// depois que o escopo terminar, isso aqui vai continuar existindo na memória mas
	delete PtrTo_Human;					// a gnt n vai ter o endereço de mmória q essa poha aq ta (memory leak)



	// destructor
	// basta usar o ~NomeDaClasse, ele é chamado quando bate na keyword "delete"

	

	// static
	Announcer::welcome();



	// virtual functions
	Object* PtrTo_Object = new Object;
	PtrTo_Object->beginPlay();

	Actor* PtrTo_Actor = new Actor;
	PtrTo_Actor->beginPlay();

	Pawn* PtrTo_Pawn = new Pawn;
	PtrTo_Pawn->beginPlay();

	delete PtrTo_Object;
	delete PtrTo_Actor;
	delete PtrTo_Pawn;



	// polymorphism & casting
	Object* ObjectArray[] = { PtrTo_Object, PtrTo_Actor, PtrTo_Pawn };

	for (int i = 0; i < 3; i++)
	{
		//ObjectArray[i]->beginPlay();
		cout << i << endl;

		Object* obj = ObjectArray[i];
		Actor* act = static_cast<Actor*>(obj);
		Pawn* pwn = static_cast<Pawn*>(obj);

		if (act)
		{
			act->actorFunction();
		};


		if (pwn)
		{
			pwn->pawnFunction();
		};
	};



	// header file
	Chicken::makeSound();




	system("pause");



}



// função no fim foi possível pois definimos ela no topo do código
void updateMovementSpeed(PlayerStatus player_status, float& speed)
{
	switch (player_status)
	{
	case PS_Standing:
		speed = STAND_SPEED;
		break;
	case PS_Crouched:
		speed = CROUCH_SPEED;
		break;
	case PS_Walking:
		speed = WALK_SPEED;
		break;
	case PS_Running:
		speed = RUN_SPEED;
		break;
	}
};



