import React, { Component } from 'react';
import * as mmb from 'music-metadata-browser';
import './Tagger.css';

function formatTime(timeSeconds) {
    let timeStr = ""
    let hh = new Date(timeSeconds * 1000).toISOString().substr(11, 2)
    //if hh are zero
    if (hh === "00") {
        //dont include hh
        timeStr = new Date(timeSeconds * 1000).toISOString().substr(14, 5)
    } else {
        //include hh
        timeStr = new Date(timeSeconds * 1000).toISOString().substr(11, 8)
    }
    return timeStr
}

function formatTimestampTxt(files, settings) {
    console.log('formatTimestampTxt() files.length=', files.length, ', files=', files)
    let txt = ``
    //determine if timestamps go longer then an hour, if so append two blank chars "  " to displayStartTime
    let hourPadding = ""

    for (const file of files) {
        var txtLine = ""
        //calculate hh:mm:ss startTime
        if (file.startSeconds < 3600) {
            //console.log('file.startSeconds < 3600')
            //hourPadding="   "
        } else {
            //console.log('file.startSeconds >= 3600')
            //hourPadding=""
        }
        var displayStartTime = `${formatTime(file.startSeconds)}${hourPadding}`
        //calcualte hh:mm:ss endTime if we need to 
        var displayEndTime = ""
        if (settings.includeEndTime) {
            displayEndTime = formatTime(file.endSeconds)
            displayEndTime = ` - ${displayEndTime}`
        }
        //use metadata title by default, display filename is specified
        var displaySongName = file.trackTitle
        if (settings.displayFilename) {
            displaySongName = file.filename
        }
        //format new txt line
        txtLine = `${displayStartTime}${displayEndTime} ${displaySongName}`
        console.log('txtLine=', txtLine)
        //add new txt line to display result txt
        txt = `${txt}${txtLine}\n`

    }

    return txt
}

class App extends Component {

    //create default states
    constructor(props) {
        super(props);
        this.state = {
            timestampsData: [],
            parseResults: [],
            parseResultsMultiple: [],

            //new vars
            settings: {
                includeEndTime: true,
                displayFilename: false
            },
            files: [
                {
                    filename: 'ex1filename',
                    trackTitle: 'ex1title',
                    startSeconds: 0,
                    endSeconds: 360.22857142857
                },
                {
                    filename: 'ex2filename',
                    trackTitle: 'ex2title',
                    startSeconds: 360.22857142857,
                    endSeconds: 441.6
                },
                {
                    filename: 'ex3filename',
                    trackTitle: 'ex3title',
                    startSeconds: 441.6,
                    endSeconds: 745.9787755102041
                },
            ],

            //url input value
            URLInputValue: '',
        };
    }

    //render page content
    render() {
        const htmlParseResults = [];

        //format files[] using settings{} for timestampTxt
        //var timestampTxt = formatTimestampTxt(this.state.files, this.state.settings)

        return (
            <div>
                {/* tagger.site title */}
                <h1>tagger.site</h1>
                
                {/* tagger.site instructions */}
                <p>Generate timestamped tracklists using audio files or a Discogs/Bandcamp/MusicBrainz URL</p>

                {/* Input */}
                <h3>Input:</h3>
                <div>
                    
                    {/* URL Input */}
                    <button onClick={this.submitURL} >Submit URL</button>
                    <input
                        placeholder='Enter URL'
                        value={this.URLInputValue}
                        onChange={e => this.updateURLInputValue(e)}
                    />
                    
                    <br></br>

                    {/* Files Selector */}
                    <input 
                        type="file" 
                        multiple="multiple" 
                        onChange={this.onChangeFilesSelected}
                    />
                    <br></br>
                    Or drag files into this webpage

                </div>
                <hr></hr>

                {/* Timestamped Tracklist Output */}
                <div>
                    <h3>Timestamped Tracklist:</h3>
                    <textarea id='textarea' rows="7" cols="44" onChange={this.onChangeTextArea} defaultValue=""></textarea> 
                </div>
                <br></br>

                {/* Timestamped Tracklist Options */}
                <div>
                    <h4>Options:</h4>
                    <input defaultChecked={true} onChange={this.onChangeIncludeEndTime} type="checkbox" id="includeEndTime" name="includeEndTime" ></input>
                    <label htmlFor="includeEndTime"> Include endTime</label>

                    <input defaultChecked={false} onChange={this.onChangeDisplayFilename} type="checkbox" id="displayFilename" name="displayFilename" ></input>
                    <label htmlFor="displayFilename"> Display filename</label>
                </div>
                <hr></hr>

                {/* Metadata Tags Output */}
                <div>
                    <h3>Metadata Tags:</h3>
                    <textarea defaultValue={"tag1, tag2, tag3"}></textarea>
                </div>

                {/* Metadata Tags - Options */}
                <div>
                    <h4>Metadata Tag Options:</h4>
                    <textarea defaultValue={"Max tag char limit = 100"}></textarea>
                </div>

            </div>
        );

    }


    submitURL = async (e = '') => {
        console.log('submitURL() ')

        var url = this.state.URLInputValue
        console.log('submitURL(), url = ', url)
        //determine which api to query

        //make request to node express proxy to avoid CORS

        //fetch('http://localhost:8080/bandcamp?url=https://ultramajic.bandcamp.com/album/the-ashtar-lavanda-mix')
        //    .then(response => console.log('response=', response))
        //    .then(data => console.log('data=', data));

        fetch(`/bandcamp?url=${url}`, { 
            method: 'get', 
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }), 
        })
        .then(response => response.json())
        .then(response => 
            console.log('response=', response)
        );

        /*
        var http = require ('http');
        http.get ({
            host: 'http://localhost/bandcamp?url=https://ultram',
            port: 8080,
            path: ''
        }, function (response) {
            console.log('proxy rsp = ', response);
        });
        */

        /*
        axios.request({
            url: `localhost:8080/bandcamp?url=${url}`,
            method: 'get',
            headers: {
                'Authorization': `Basic Martin`
            }

        }).then(rsp => {

            console.log('bandcamp rsp = ', rsp)

        }).catch(function (error) {
            console.log('Request failed', error)
        });
        */

    }

    updateURLInputValue = async (e) => {
        const val = e.target.value;
        console.log(`updateInputValue() ${val}`)
        this.setState({ URLInputValue: val });
    }


    //when timestamped tracklist display format options are changed:
    onChangeIncludeEndTime = async (e) => {
        console.log('onChangeIncludeEndTime(): ', e.target.checked)
        let settings = this.state.settings
        settings.includeEndTime = e.target.checked
        this.setState({
            settings: settings
        });
    }

    onChangeDisplayFilename = async (e) => {
        let settings = this.state.settings
        settings.displayFilename = e.target.checked
        this.setState({
            settings: settings
        });
    }

    //when multiple files are selected
    onChangeFilesSelected = async (event) => {
        console.log('onChangeFilesSelected()')
        //reset files[] state obj
        this.setState({
            files: []
        })
        //set default vars
        let startSeconds = 0
        let endSeconds = 0
        //get info for each file and append to files[] state var
        let filesList = []
        for (const file of event.target.files) {
            let fileData = {}
            //get metadata for file
            try {
                console.log('getting metadata for ', file.name)
                const metadata = await this.parseFile(file);
                console.log('got metadata for ', file.name)
                //get duration (seconds)
                var durationSeconds = metadata.format.duration;
                //convert duration to hh:mm:ss
                //var duration = new Date(durationSeconds * 1000).toISOString().substr(11, 8)

                //set startSeconds
                if (endSeconds === 0) {
                    startSeconds = 0;
                } else {
                    startSeconds = endSeconds;
                }
                //set endSeconds
                endSeconds = startSeconds + durationSeconds
                //convert times to hh:mm:ss 
                let startTime = new Date(startSeconds * 1000).toISOString().substr(11, 8)
                let endTime = new Date(endSeconds * 1000).toISOString().substr(11, 8)

                let filename = file.name.replace(/\.[^/.]+$/, "")
                let trackTitle = metadata.common.title;

                //timestampedTracklist = `${timestampedTracklist}\n${startTime} - ${endTime} ${trackTitle}`
                //create fileData obj
                fileData = {
                    filename: filename,
                    trackTitle: trackTitle,
                    metadata: metadata,
                    //times
                    startTime: startTime,
                    endTime: endTime,
                    startSeconds: startSeconds,
                    endSeconds: endSeconds
                }
                console.log('pushing fileData to files local var for ', file.name)
                filesList.push(fileData)

            } catch (err) {
                console.log('err getting file metadata: ', err)
            }
        }
        //set files state var
        this.setState({
            files: filesList
        });
        console.log('onChangeFilesSelected() finished updating files[] state var. ', this.state.files)
    }

    //when file upload handler is changed
    onChangeHandler = async (event) => {

        this.setState({
            parseResults: []
        });

        for (const file of event.target.files) {

            const parseResult = {
                file: file
            };

            this.setState(state => {
                state.parseResults.push(parseResult);
                return state;
            });

            try {
                const metadata = await this.parseFile(file);
                // Update GUI
                this.setState(state => {
                    state.parseResults[state.parseResults.length - 1].metadata = metadata;
                    return state;
                });

            } catch (err) {
                this.setState(state => {
                    state.parseResults[state.parseResults.length - 1].error = err.message;
                    return state;
                });
            }
        }
    };

    //get metadata for audio file
    async parseFile(file) {
        //console.log(`Parsing file "${file.name}" of type ${file.type}`);
        return mmb.parseBlob(file, { native: true })
            .then(metadata => {
                //console.log(`Completed parsing of ${file.name}:`, metadata);
                return metadata;
            }).catch((error) => {
                console.log('parseFile error: ', error)
            }).finally(() => {
                //console.log('finally')
            })
    }




}

export default App;
