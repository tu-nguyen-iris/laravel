<?php

namespace App\Http\Controllers;

use App\TESTAPI\POST;
use Illuminate\Http\Request;

class TestPostReact extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $post = POST::orderby('id', 'asc')->get();
        return response()->json($post, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $data = $request->all();
        $post = POST::create($data);
        return response()->json($post, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(POST $post)
    {
        // r
        return response() > json($post, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, POST $post)
    {
        //
        $data = response()->$request > all();
        $post->update($data);

        return response()->json($post, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(POST $post)
    {
        //
        $post -> delete();
        $post = POST::orderby('id','desc')->get();
        return response()->json($post, 200);
    }
}
