import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Graphdata from 'graph-data';
import VideoPlayer from 'video-player';

class App extends Component {
  render() {
    const video = {
      "videoId": "9ca3291ad6330fd1810d40daacc5e095",
      "assets": [{
        "url": "http://assets14.ign.com/videos/zencoder/2016/08/16/416/9ca3291ad6330fd1810d40daacc5e095-110000-1471378033-w.mp4",
        "bitrate": 110000,
        "frame_rate": 29.97,
        "height": 234,
        "width": 416,
        "actual_bitrate_kbps": 147
      }, {
        "url": "http://assets14.ign.com/videos/zencoder/2016/08/16/640/9ca3291ad6330fd1810d40daacc5e095-500000-1471378033-w.mp4",
        "bitrate": 500000,
        "frame_rate": 29.97,
        "height": 360,
        "width": 640,
        "actual_bitrate_kbps": 564
      }, {
        "url": "http://assets14.ign.com/videos/zencoder/2016/08/16/853/9ca3291ad6330fd1810d40daacc5e095-1000000-1471378033-w.mp4",
        "bitrate": 1000000,
        "frame_rate": 29.97,
        "height": 480,
        "width": 853,
        "actual_bitrate_kbps": 1122
      }, {
        "url": "http://assets14.ign.com/videos/zencoder/2016/08/16/960/9ca3291ad6330fd1810d40daacc5e095-1500000-1471378033-w.mp4",
        "bitrate": 1500000,
        "frame_rate": 29.97,
        "height": 540,
        "width": 960,
        "actual_bitrate_kbps": 1653
      }, {
        "url": "http://assets14.ign.com/videos/zencoder/2016/08/16/1280/9ca3291ad6330fd1810d40daacc5e095-2500000-1471378033-w.mp4",
        "bitrate": 2500000,
        "frame_rate": 29.97,
        "height": 720,
        "width": 1280,
        "actual_bitrate_kbps": 2623
      }, {
        "url": "http://assets14.ign.com/videos/zencoder/2016/08/16/1920/9ca3291ad6330fd1810d40daacc5e095-5000000-1471378033-w.mp4",
        "bitrate": 5000000,
        "frame_rate": 29.97,
        "height": 1080,
        "width": 1920,
        "actual_bitrate_kbps": 5138
      }],
      "thumbnails": [{
        "styleUrl": "http://assets1.ignimgs.com/thumbs/userUploaded/2016/8/16/cable1280-1471377948976_{size}.jpg",
        "url": "http://assets1.ignimgs.com/thumbs/userUploaded/2016/8/16/cable1280-1471377948976.jpg"
      }],
      "objectRelations": [{
        "objectName": "Stephen Lang",
        "legacyId": "917948",
        "objectType": "people"
      }, {
        "objectName": "Cable",
        "legacyId": "923879",
        "objectType": "characters"
      }, {
        "commonName": "Deadpool 2",
        "objectName": "Deadpool 2",
        "legacyId": "20049579",
        "objectType": "movie"
      }],
      "metadata": {
        "name": "Deadpool 2 - Stephen Lang on Cable Campaign",
        "description": "The Don't Breathe and Avatar star on fans trying to get him cast in the sequel.",
        "publishDate": "2016-08-16T20:06:00+0000",
        "title": "Stephen Lang Addresses Cable Campaign",
        "longTitle": "Deadpool 2 - Stephen Lang on Cable Campaign",
        "duration": 116,
        "url": "http://www.ign.com/videos/2016/08/16/deadpool-2-stephen-lang-on-cable-campaign",
        "slug": "deadpool-2-stephen-lang-on-cable-campaign",
        "ageGate": "17",
        "classification": "Interview",
        "subClassification": "none",
        "networks": [
          "ign"
        ],
        "state": "published",
        "noads": false,
        "prime": false,
        "subscription": false,
        "downloadable": true,
        "creator": "kwatson@ign.com",
        "origin": "Produced (Complex)",
        "genre": "Entertainment"
      },
      "promo": {
        "title": "Deadpool 2: Stephen Lang Talks Cable Campaign",
        "summary": "The Avatar star on fans using social media to try to get him cast in the sequel."
      },
      "tags": [{
        "slug": "movies",
        "tagType": "freeForm",
        "displayName": "movies"
      }, {
        "slug": "interview",
        "tagType": "classification",
        "displayName": "Interview"
      }, {
        "slug": "stephen-lang",
        "tagType": "objectName",
        "displayName": "Stephen Lang"
      }, {
        "slug": "people",
        "tagType": "objectType",
        "displayName": "people"
      }, {
        "slug": "cable",
        "tagType": "objectName",
        "displayName": "Cable"
      }, {
        "slug": "characters",
        "tagType": "objectType",
        "displayName": "characters"
      }, {
        "slug": "marvel-comics",
        "tagType": "publishers",
        "displayName": "Marvel Comics"
      }, {
        "slug": "deadpool-2",
        "tagType": "objectName",
        "displayName": "Deadpool 2"
      }, {
        "slug": "movie",
        "tagType": "objectType",
        "displayName": "movie"
      }, {
        "slug": "super-hero",
        "tagType": "genre",
        "displayName": "Super-Hero"
      }, {
        "slug": "action-comedy",
        "tagType": "genre",
        "displayName": "Action Comedy"
      }, {
        "slug": "20th-century-fox",
        "tagType": "distributors",
        "displayName": "20th Century Fox"
      }],
      "extra": {
        "videoSeries": "none",
        "live": false,
        "regions": [
          "all"
        ],
        "sent_to_grab": true,
        "embargo": false,
        "autoNeon": false,
        "fixedKeyFrameInterval": true,
        "active": true,
        "liveOnAir": false,
        "neonToYoutube": false
      },
      "refs": {
        "youtubeChannelIds": [
          "none"
        ],
        "zencoderId": 290265303,
        "sponsorShipId": "none",
        "m3uUrl": "http://assets14.ign.com/master/videos/zencoder/2016/08/16/,640/9ca3291ad6330fd1810d40daacc5e095-500000,853/9ca3291ad6330fd1810d40daacc5e095-1000000,960/9ca3291ad6330fd1810d40daacc5e095-1500000,1280/9ca3291ad6330fd1810d40daacc5e095-2500000,1920/9ca3291ad6330fd1810d40daacc5e095-5000000,-1471378033-w/master.m3u8",
        "f4mUrl": "http://assets14.ign.com/master/videos/zencoder/2016/08/16/,640/9ca3291ad6330fd1810d40daacc5e095-500000,853/9ca3291ad6330fd1810d40daacc5e095-1000000,960/9ca3291ad6330fd1810d40daacc5e095-1500000,1280/9ca3291ad6330fd1810d40daacc5e095-2500000,1920/9ca3291ad6330fd1810d40daacc5e095-5000000,-1471378033-w/master.f4m",
        "neonLabsJobID": "7ed8619663ec11e695ee0a178ff1d45f",
        "youtube": [{
          "channelId": "550b0ca4d9a7a21aaf25f9f8",
          "youtubeId": "tnmIa0t7bBE"
        }]
      },
      "category": [
        "movies_all",
        "ign_all",
        "comics_all"
      ],
      "system": {
        "encodingProfile": "ign-default",
        "watermarkProfile": "default",
        "mezzanineUrl": "https://s3.amazonaws.com/o.videoarchive.ign.com/2016/8/16/langcableign-1080p2997-15mbps-1471377654837.mp4",
        "createdAt": "2016-08-16T20:03:26+0000",
        "updatedAt": "2016-08-18T12:55:48+0000"
      },
      "cues": [],
      "popularity": {
        "total": 49277,
        "sevenDays": 248
      },
      "talent": [{
        "profileId": 1808007,
        "displayName": "Jim Vejvoda",
        "nickname": "StaxIGN"
      }]
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Graphdata graphdata='{"labels":["May","June","July","August","September","October","November","December","January","February","March","April","May","June","July"],"datasets":[{"label":["Google organic referrals"],"borderColor":["rgba(255, 0, 0, 1)"],"backgroundColor":["rgba(255, 255, 255, 0)"],"data":["21280940","26039230","30288282","28679481","24482326","24146618","24887769","29513074","28857876","27850754","32722568","30559119","30649938","32646344","28608123"]}]}'
          graphtype="line"
          caption="funtime"/>
        <VideoPlayer config={{
            player: {
              mode: 'hls',
              preferredRendition: 'auto'
            },
            mux: {
              debug: false,
              data: {
                property_key: 'IGN-DEV:OXPYSIJYVD8T8YW',
                experiment_name: 'v6_test'
              }
            },
            autoplay: false,
            muted: false,
            analytics: {
              pageType: 'wikis',
              playerContext: 'Debug V6 Page'
            },
            user: {
              userId: '12345',
              nickname: 'Jsmith',
              adsDisabled: false
            },
            showRecircScreen: true,
            skipInitialAd: false,
            enableSkippablePreroll: true,
            moatPartnerCode: 'ignimajsint947428450867',
            video: video,
            mutedPrerollDelay: 3,
            enableMutedPreroll: false,
          }} />
      </div>
    );
  }
}

export default App;
