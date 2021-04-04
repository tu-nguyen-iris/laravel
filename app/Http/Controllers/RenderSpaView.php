<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RenderSpaView extends Controller
{
    //
    public function __invoke()
    {
        // TODO: Implement __invoke() method.
    return view('spa-view');
    }
}
