<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\listItem;

class ToloListController extends Controller
{
    //
    function saveItem(Request $request)
    {
        $newListItem = new listItem();
        $newListItem->name = $request->listItem;
        $newListItem->is_completed = 0;
        $newListItem->save();

        return view('welcome');
    }
}
