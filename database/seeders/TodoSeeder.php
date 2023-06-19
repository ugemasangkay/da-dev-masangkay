<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Todo;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $todos = [
            [
                'title' => 'Complete assignment',
                'completed' => false,
                'updated_at' => now(),
            ],
            [
                'title' => 'Buy groceries',
                'completed' => true,
                'updated_at' => now(),
            ],
            [
                'title' => 'Call a friend',
                'completed' => false,
                'updated_at' => now(),
            ],
        ];

        foreach ($todos as $todo) {
            Todo::create($todo);
        }
    }
}
