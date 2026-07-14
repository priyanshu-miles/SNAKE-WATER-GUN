#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    srand(time(0));
    int player, computer = rand() % 3;
    /*
    0 --> Snake
    1 --> Water
    2 --> Gun
    */

    printf("CHOOSE \n 0 FOR SNAKE \n 1 FOR WATER \n 2 FOR GUN \n");
    scanf("%d", &player);
    printf("COMPUTER'S CHOICE %d\n", computer);
    
    if (player == 0 && computer == 0)
    {
        printf("IT'S A DRAW !\n");
    }
    else if (player == 0 && computer == 1)
    {
        printf("YOU WON !!! :)\n");
    }
    else if (player == 0 && computer == 2)
    {
        printf("OHH YOU LOST !! :(\n");
    }
    else if (player == 1 && computer == 0)
    {
        printf("OHH YOU LOST !! :(\n");
    }
    else if (player == 1 && computer == 1)
    {
        printf("IT'S A DRAW !\n");
    }
    else if (player == 1 && computer == 2)
    {
        printf("YOU WON !!! :)\n");
    }
    else if (player == 2 && computer == 0)
    {
        printf("YOU WON !!! :)\n");
    }
    else if (player == 2 && computer == 1)
    {
         printf("OHH YOU LOST !! :(\n");
    }
    else if (player == 2 && computer == 2)
    {
        printf("IT'S A DRAW !\n");
    }
    else
    {
        printf("SOMETHING WENT WRONG!! SORRY :( ...\n");
    }

    return 0;
}