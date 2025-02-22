#include <iostream>
#include <string>
using namespace std;

int main()
{
    setlocale(LC_ALL, "Russian");
    string binarySequence;
    bool isValid = false;

    while (!isValid)
    {
        cout << "Введите двоичную последовательность: ";
        getline(cin, binarySequence);

        if (binarySequence.empty())
        {
            cout << "Ошибка: строка пустая, введите двоичную последовательность." << endl;
            continue;
        }
        isValid = true;
        for (char ch : binarySequence)
        {
            if (ch != '0' && ch != '1')
            {
                cout << "Ошибка: недопустимый символ, введите двоичную последовательность." << endl;
                isValid = false;
                break;
            }
        }
    }
    int decimal = 0;
    int power = binarySequence.length() - 1;

    for (size_t i = 0; i < binarySequence.length(); ++i)
    {
        int digit = binarySequence[i] - '0';

        decimal += digit * pow(2, power);

        power--;
    }

    cout << "Десятичное число: " << decimal << endl;

    return 0;
}