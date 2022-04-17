import React, { Component } from 'react';
import * as mmb from 'music-metadata-browser';
import './Styling.css';

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

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

    //console.log('files[files.length-1] = ',  ) //['endSeconds']
    //if(files[files.length-1].endSeconds >= 3600 ){
    //    hourPadding="  "
    //}
    for (const file of files) {
        var txtLine = ""
        //calculate hh:mm:ss startTime
        if (file.startSeconds < 3600) {
            console.log('file.startSeconds < 3600')
            //hourPadding="   "
        } else {
            console.log('file.startSeconds >= 3600')
            //hourPadding=""
        }
        var displayStartTime = `${formatTime(file.startSeconds)}${hourPadding}`//new Date(file.startSeconds * 1000).toISOString().substr(11, 8)
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
            ]
        };
    }

    //render page content
    render() {
        const htmlParseResults = [];

        //format files[] using settings{} for timestampTxt
        var timestampTxt = formatTimestampTxt(this.state.files, this.state.settings)
        console.log('render() timestampTxt=', timestampTxt)

        return (
            <div>


                multiple files:
                <input type="file" multiple="multiple" onChange={this.onChangeFilesSelected}></input>
                <hr></hr>

                <input type="file" name="file" onChange={this.onChangeHandler} />

                {htmlParseResults}


                <br></br>
                <hr></hr>

                {/* timestamped tracklist output */}
                <textarea id='textarea' rows="7" cols="44" onChange={this.onChangeTextArea} value={timestampTxt}></textarea>
                <br></br>

                {/* timestamped tracklist format options */}
                <input defaultChecked={true} onChange={this.onChangeIncludeEndTime} type="checkbox" id="includeEndTime" name="includeEndTime" ></input>
                <label htmlFor="includeEndTime"> Include endTime</label>

                <input defaultChecked={false} onChange={this.onChangeDisplayFilename} type="checkbox" id="displayFilename" name="displayFilename" ></input>
                <label htmlFor="displayFilename"> Display filename</label>


            </div>
        );
    }

    onChangeTextArea = async (e) => {

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
